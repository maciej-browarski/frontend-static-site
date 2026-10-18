// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://maciej-browarski.github.io',
  base: '/frontend-static-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
