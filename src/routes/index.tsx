import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllArticles, getAllTopics, getArticlesByTag } from '../lib/articles'
import { ArticleCard } from '../components/ArticleCard'

interface HomeSearch {
  topic?: string
  tag?: string
}

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    topic: typeof search.topic === 'string' ? search.topic : undefined,
    tag: typeof search.tag === 'string' ? search.tag : undefined,
  }),
  component: HomePage,
})

function HomePage() {
  const { topic, tag } = Route.useSearch()

  if (tag) {
    const filtered = getArticlesByTag(tag)
    return (
      <div>
        <div className="mb-8 flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500">
          <Link
            to="/"
            className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
          >
            All articles
          </Link>
          <span>/</span>
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">
            Tag: {tag}
          </span>
        </div>
        <section>
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </section>
      </div>
    )
  }

  const articles = getAllArticles()
  const activeTopic = topic ?? getAllTopics()[0]!
  const filtered = articles.filter((a) => a.topic === activeTopic)

  return (
    <div>
      <section>
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  )
}
