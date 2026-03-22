import { createFileRoute, Link } from '@tanstack/react-router'
import { getArticleBySlug, getTagCounts } from '../../lib/articles'
import { MarkdownRenderer } from '../../components/MarkdownRenderer'

export const Route = createFileRoute('/article/$slug')({
  component: ArticlePage,
})

function ArticlePage() {
  const { slug } = Route.useParams()
  const article = getArticleBySlug(slug)
  const tagCounts = getTagCounts()

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
        search={{ topic: article.topic }}
        className="group/back inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-8"
      >
        <svg className="h-4 w-4 transition-transform duration-200 group-hover/back:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {article.topic}
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Link
            to="/"
            search={{ topic: article.topic }}
            className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider hover:text-neutral-900 dark:hover:text-neutral-200 hover:underline underline-offset-2"
          >
            {article.topic}
          </Link>
          <span className="text-neutral-300 dark:text-neutral-600">/</span>
          {article.tags.map((tag) => (
            <Link
              key={tag}
              to="/"
              search={{ tag }}
              className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2.5 py-0.5 text-xs text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
            >
              {tag}
            </Link>
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

      <section className="mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-5">
          Discover more
        </h2>
        <div className="flex flex-wrap gap-2">
          {tagCounts.map(({ tag, count }) => (
            <Link
              key={tag}
              to="/"
              search={{ tag }}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {tag}
              <span className="text-neutral-400 dark:text-neutral-500 text-xs">
                {count}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}
