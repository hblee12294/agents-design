import { Link } from '@tanstack/react-router'
import type { Article } from '../lib/types'
import { TagBadge } from './TagBadge'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group py-8 first:pt-0">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {article.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="block"
      >
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
          {article.title}
        </h2>
      </Link>
      <div className="mt-1.5 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <span>{article.author}</span>
        <span>&middot;</span>
        <time dateTime={article.date}>
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
      </div>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
        {article.summary}
      </p>
    </article>
  )
}
