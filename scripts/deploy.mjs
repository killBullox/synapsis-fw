#!/usr/bin/env node
/**
 * Deploy automatico su Aruba Hosting Easy Linux via FTP.
 *
 * Uso:
 *   npm run deploy            # build + upload
 *   npm run deploy:dry        # solo simulazione (mostra cosa caricherebbe)
 *
 * Credenziali in .env.deploy (NON committato):
 *   FTP_HOST=ftp.synapsisfw.it
 *   FTP_USER=...
 *   FTP_PASSWORD=...
 *   FTP_PORT=21
 *   FTP_REMOTE_DIR=/htdocs
 *   FTP_SECURE=false           # true per FTPS esplicito
 */

import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';
import { Client } from 'basic-ftp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';

dotenvConfig({ path: '.env.deploy' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const distDir = resolve(projectRoot, 'dist');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

const required = ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD'];
const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`\n  ✗ Variabili mancanti in .env.deploy: ${missing.join(', ')}`);
  console.error(`    Copia .env.deploy.example in .env.deploy e compila i valori.\n`);
  process.exit(1);
}

if (!existsSync(distDir)) {
  console.error(`\n  ✗ La cartella dist/ non esiste. Lancia prima 'npm run build'.\n`);
  process.exit(1);
}

const config = {
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  port: Number(process.env.FTP_PORT ?? 21),
  secure: process.env.FTP_SECURE === 'true',
  remoteDir: process.env.FTP_REMOTE_DIR ?? '/htdocs',
};

const palette = {
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  gray: '\x1b[90m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};
const c = (col, str) => `${palette[col]}${str}${palette.reset}`;

function fmtBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function main() {
  console.log(`\n${c('bold', 'Synapsis FW — Deploy Aruba')}\n`);
  console.log(`  ${c('gray', 'Host:    ')}${config.host}:${config.port}${config.secure ? ' (FTPS)' : ''}`);
  console.log(`  ${c('gray', 'User:    ')}${config.user}`);
  console.log(`  ${c('gray', 'Remote:  ')}${config.remoteDir}`);
  console.log(`  ${c('gray', 'Local:   ')}${distDir}`);
  if (dryRun) console.log(`  ${c('yellow', 'DRY RUN — nessun upload eseguito')}`);
  console.log('');

  if (dryRun) {
    console.log(c('yellow', '  Solo simulazione. I file verrebbero caricati così:\n'));
    return;
  }

  const client = new Client(30_000);
  client.ftp.verbose = false;

  let totalBytes = 0;
  let fileCount = 0;
  const start = Date.now();

  client.trackProgress((info) => {
    if (info.type === 'upload') {
      totalBytes += info.bytesOverall;
    }
  });

  try {
    console.log(c('cyan', '  → Connessione FTP…'));
    await client.access({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port,
      secure: config.secure,
    });
    console.log(c('green', '  ✓ Connesso\n'));

    console.log(c('cyan', `  → Upload mirror in ${config.remoteDir}`));
    console.log(c('gray', '    (basic-ftp upload solo i file diversi per dimensione)\n'));

    // Conta file prima dell'upload
    const { readdirSync, statSync } = await import('node:fs');
    function walk(dir) {
      let count = 0;
      let bytes = 0;
      for (const item of readdirSync(dir)) {
        const p = `${dir}/${item}`;
        const st = statSync(p);
        if (st.isDirectory()) {
          const sub = walk(p);
          count += sub.count;
          bytes += sub.bytes;
        } else {
          count += 1;
          bytes += st.size;
        }
      }
      return { count, bytes };
    }
    const stats = walk(distDir);
    fileCount = stats.count;

    await client.ensureDir(config.remoteDir);
    await client.uploadFromDir(distDir, config.remoteDir);

    const elapsed = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`\n${c('green', `  ✓ Deploy completato in ${elapsed}s`)}`);
    console.log(`  ${c('gray', 'File:    ')}${fileCount}`);
    console.log(`  ${c('gray', 'Size:    ')}${fmtBytes(stats.bytes)}`);
    console.log(`\n  ${c('bold', 'Live su:')} https://synapsisfw.it/\n`);
  } catch (err) {
    console.error(`\n${c('red', '  ✗ Errore deploy:')}`);
    console.error(`    ${err.message}\n`);
    process.exitCode = 1;
  } finally {
    client.close();
  }
}

main();
