import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    author: z.string(),
    date: z.string(),
    originalUrl: z.string().url(),
    topic: z.string(),
    tags: z.array(z.string()),
  }),
})

export const collections = { articles }
