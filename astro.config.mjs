import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import remarkGfm from 'remark-gfm'
import rehypeReadOriginal from './src/lib/rehype-read-original'

export default defineConfig({
  site: 'https://agentsdesign.dev',
  output: 'static',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeReadOriginal],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  fonts: [
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.fontsource(),
    },
  ],
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  server: { port: 4000 },
})
