import { createFileRoute, Link } from '@tanstack/react-router'
import { getArticleBySlug } from '../../lib/articles'
import { MarkdownRenderer } from '../../components/MarkdownRenderer'
import { TagBadge } from '../../components/TagBadge'

export const Route = createFileRoute('/article/$slug')({
  component: ArticlePage,
})

function ArticlePage() {
  const { slug } = Route.useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          Article not found
        </h2>
        <Link
          to="/"
          className="mt-4 inline-block text-accent-600 dark:text-accent-400 underline underline-offset-2"
        >
          Back to all articles
        </Link>
      </div>
    )
  }

  return (
    <article>
      <Link
        to="/"
        className="group/back inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <svg className="h-4 w-4 transition-transform duration-200 group-hover/back:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        All articles
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {article.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          {article.title}
        </h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span>{article.author}</span>
          <span>&middot;</span>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      <MarkdownRenderer content={article.body} />

      <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <a
          href={article.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
        >
          Read the original
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>
    </article>
  )
}
