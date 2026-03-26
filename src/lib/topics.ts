/**
 * Defines the display order for known topics.
 * New topics from articles are appended alphabetically after these.
 */
export const TOPIC_ORDER = ['Fundamentals', 'Design Patterns', 'Best Practices', 'Platform & Tools'] as const

export function topicToSlug(topic: string): string {
  return topic.toLowerCase().replace(/\s+/g, '-')
}

export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-')
}

/**
 * Returns all topics from articles, ordered by TOPIC_ORDER first,
 * then any new topics alphabetically.
 */
export function getOrderedTopics(articleTopics: string[]): string[] {
  const topicSet = new Set(articleTopics)
  const ordered: string[] = []

  // Known topics first, in defined order
  for (const topic of TOPIC_ORDER) {
    if (topicSet.has(topic)) {
      ordered.push(topic)
      topicSet.delete(topic)
    }
  }

  // New topics appended alphabetically
  const remaining = Array.from(topicSet).sort((a, b) => a.localeCompare(b))
  return [...ordered, ...remaining]
}
