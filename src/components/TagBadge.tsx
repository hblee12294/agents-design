const TAG_COLORS: Record<string, string> = {}

function getTagColor(tag: string): string {
  if (TAG_COLORS[tag]) return TAG_COLORS[tag]!

  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash)
  }

  const hues = [220, 260, 190, 330, 160, 30, 280, 350, 140, 200]
  const hue = hues[Math.abs(hash) % hues.length]!
  TAG_COLORS[tag] =
    `bg-[oklch(0.95_0.02_${hue})] text-[oklch(0.40_0.08_${hue})] dark:bg-[oklch(0.25_0.04_${hue})] dark:text-[oklch(0.75_0.08_${hue})]`
  return TAG_COLORS[tag]!
}

interface TagBadgeProps {
  tag: string
  active?: boolean
  onClick?: () => void
}

export function TagBadge({ tag, active, onClick }: TagBadgeProps) {
  const colorClass = getTagColor(tag)
  const activeClass = active
    ? 'ring-2 ring-accent-500 ring-offset-1 dark:ring-offset-neutral-950'
    : ''

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all ${colorClass} ${activeClass} ${onClick ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
    >
      {tag}
    </button>
  )
}
