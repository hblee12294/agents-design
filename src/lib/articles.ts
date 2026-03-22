import fm from 'front-matter'
import type { Article, ArticleFrontmatter } from './types'

const modules = import.meta.glob('/content/articles/**/*.md', {
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

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((a) => a.tags.includes(tag))
}

export function getTagCounts(): { tag: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const article of articles) {
    for (const tag of article.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}

const TOPIC_ORDER = ['Fundamentals', 'Design Patterns', 'Best Practices']

export function getAllTopics(): string[] {
  const topicSet = new Set<string>()
  for (const article of articles) {
    topicSet.add(article.topic)
  }
  return TOPIC_ORDER.filter((t) => topicSet.has(t))
}
