export interface ArticleFrontmatter {
  title: string
  slug: string
  summary: string
  author: string
  date: string
  originalUrl: string
  topic: string
  tags: string[]
}

export interface Article extends ArticleFrontmatter {
  body: string
}
