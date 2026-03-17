import { createFileRoute } from '@tanstack/react-router'
import { getAllArticles, getAllTopics } from '../lib/articles'
import { ArticleCard } from '../components/ArticleCard'

interface HomeSearch {
  topic?: string
}

export const Route = createFileRoute('/')({
  validateSearch: (search: Record<string, unknown>): HomeSearch => ({
    topic: typeof search.topic === 'string' ? search.topic : undefined,
  }),
  component: HomePage,
})

function HomePage() {
  const articles = getAllArticles()
  const { topic } = Route.useSearch()
  const activeTopic = topic ?? getAllTopics()[0]!

  const filtered = articles.filter((a) => a.topic === activeTopic)

  return (
    <div>
      <section className="space-y-2">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  )
}
