import { Link, useMatches } from '@tanstack/react-router'
import { getAllTopics } from '../lib/articles'

export function TopicSidebar() {
  const topics = getAllTopics()
  const matches = useMatches()
  const indexMatch = matches.find((m) => m.routeId === '/')
  const activeTopic = (indexMatch?.search as { topic?: string })?.topic ?? topics[0]

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
