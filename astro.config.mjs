import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  // base: '/repo-name',  // uncomment for GitHub Pages project repo
  site: 'https://your-username.github.io',

  integrations: [mdx()]
});