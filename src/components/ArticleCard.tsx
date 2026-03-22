import { Link } from '@tanstack/react-router'
import type { Article } from '../lib/types'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group py-7 border-b border-neutral-100 dark:border-neutral-800/60 last:border-b-0">
      <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
        <Link
          to="/"
          search={{ topic: article.topic }}
          className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
        >
          {article.topic}
        </Link>
        <span>&middot;</span>
        <time dateTime={article.date}>
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        <span>&middot;</span>
        <span>{article.author}</span>
      </div>
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="block mt-2"
      >
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200">
          {article.title}
        </h2>
      </Link>
      <p className="mt-2.5 text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
        {article.summary}
      </p>
    </article>
  )
}
