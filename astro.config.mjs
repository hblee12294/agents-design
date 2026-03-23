import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import remarkGfm from 'remark-gfm'
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://agentsdesign.dev',
  output: 'static',
  trailingSlash: 'always',

  markdown: {
    remarkPlugins: [remarkGfm],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  fonts: [
    {
      name: 'Source Sans 3',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
    },
  ],

  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  server: { port: 4000 },
  adapter: cloudflare(),
})