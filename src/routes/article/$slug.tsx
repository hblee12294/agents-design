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
    </article>
  )
}
