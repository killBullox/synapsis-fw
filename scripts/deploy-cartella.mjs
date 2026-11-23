#!/usr/bin/env node
/**
 * Carica su Aruba UNA sola cartella di public/ (pagine statiche con video pesanti), senza rifare tutto il sito.
 *   node scripts/deploy-cartella.mjs conceptVMM     # public/conceptVMM -> <remote>/conceptVMM
 * Credenziali in .env.deploy, come scripts/deploy.mjs.
 */
import { config as dotenvConfig } from 'dotenv';
import { Client } from 'basic-ftp';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

dotenvConfig({ path: '.env.deploy' });

const nome = process.argv[2];
if (!nome || /[\\/.]/.test(nome)) { console.error('Indica il nome di una cartella di public/'); process.exit(1); }
const locale = resolve('public', nome);
if (!existsSync(locale)) { console.error(`Non esiste ${locale}`); process.exit(1); }
const remoteDir = `${process.env.FTP_REMOTE_DIR ?? '/htdocs'}/${nome}`;

const client = new Client(60_000);
try {
  await client.access({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: Number(process.env.FTP_PORT ?? 21),
    secure: process.env.FTP_SECURE === 'true',
  });
  await client.ensureDir(remoteDir);
  await client.uploadFromDir(locale, remoteDir);
  const elenco = await client.list(remoteDir);
  for (const f of elenco) console.log(`${f.name}  ${f.size} byte`);
  console.log(`Caricata ${nome} in ${remoteDir}`);
} catch (e) {
  console.error(`Errore: ${e.message}`);
  process.exitCode = 1;
} finally {
  client.close();
}
