import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { getAllArticles, getAllTags } from '../lib/articles'
import { ArticleCard } from '../components/ArticleCard'
import { TagFilter } from '../components/TagFilter'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const articles = getAllArticles()
  const tags = getAllTags()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles

  return (
    <div>
      <section className="mb-10">
        <TagFilter tags={tags} activeTag={activeTag} onTagSelect={setActiveTag} />
      </section>
      <section className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  )
}
