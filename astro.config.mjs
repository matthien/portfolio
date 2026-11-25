// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://matthewthien.com',
  redirects: {
    // The Contact page was replaced by the contact links in the sidebar and menu.
    '/contact': '/',
  },
});
