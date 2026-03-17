import { Link } from '@tanstack/react-router'
import type { Article } from '../lib/types'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group -mx-4 rounded-2xl px-4 py-6 transition-colors duration-300 hover:bg-neutral-100/60 dark:hover:bg-white/[0.03]">
      <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
        {article.topic}
      </span>
      <Link
        to="/article/$slug"
        params={{ slug: article.slug }}
        className="block mt-1.5"
      >
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
          {article.title}
          <span className="inline-block ml-1.5 text-accent-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
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
