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
    <nav className="space-y-0.5">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
        Topics
      </h3>
      {topics.map((topic) => (
        <Link
          key={topic}
          to="/"
          search={{ topic }}
          className={`block py-1.5 text-[0.9rem] transition-colors ${
            activeTopic === topic
              ? 'text-neutral-900 font-semibold dark:text-neutral-100'
              : 'text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-200'
          }`}
        >
          {topic}
        </Link>
      ))}
    </nav>
  )
}
