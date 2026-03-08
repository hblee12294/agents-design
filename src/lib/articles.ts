import fm from 'front-matter'
import type { Article, ArticleFrontmatter } from './types'

const modules = import.meta.glob('/content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const articles: Article[] = Object.values(modules).map((raw) => {
  const { attributes, body } = fm<ArticleFrontmatter>(raw)
  return { ...attributes, body }
})

articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  for (const article of articles) {
    for (const tag of article.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
}
