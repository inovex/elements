import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://elements.inovex.de',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
