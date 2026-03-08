import { TagBadge } from './TagBadge'

interface TagFilterProps {
  tags: string[]
  activeTag: string | null
  onTagSelect: (tag: string | null) => void
}

export function TagFilter({ tags, activeTag, onTagSelect }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onTagSelect(null)}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all cursor-pointer ${
          activeTag === null
            ? 'bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900'
            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <TagBadge
          key={tag}
          tag={tag}
          active={activeTag === tag}
          onClick={() => onTagSelect(activeTag === tag ? null : tag)}
        />
      ))}
    </div>
  )
}
