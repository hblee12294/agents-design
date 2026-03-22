import { Link, useLocation, useParams } from '@tanstack/react-router'
import { getAllTopics, getArticleBySlug } from '../lib/articles'

export function TopicSidebar() {
  const topics = getAllTopics()
  const location = useLocation()
  const params = useParams({ strict: false }) as { slug?: string }
  const searchParams = new URLSearchParams(location.search)
  const searchTag = searchParams.get('tag')
  const searchTopic = searchParams.get('topic')

  let activeTopic: string | null
  if (searchTag) {
    activeTopic = null
  } else if (params.slug) {
    const article = getArticleBySlug(params.slug)
    activeTopic = article?.topic ?? null
  } else {
    activeTopic = searchTopic ?? topics[0] ?? null
  }

  return (
    <nav className="space-y-1">
      <h3 className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
        Topics
      </h3>
      {topics.map((topic) => (
        <Link
          key={topic}
          to="/"
          search={{ topic }}
          className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            activeTopic === topic
              ? 'bg-neutral-100 text-neutral-900 font-semibold dark:bg-neutral-800 dark:text-neutral-100'
              : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200'
          }`}
        >
          {topic}
        </Link>
      ))}
    </nav>
  )
}
