import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.synapsisfw.it',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/wechiaia') && !page.includes('/performace') && !page.includes('/miramare') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
