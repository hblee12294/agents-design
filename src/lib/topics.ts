export const TOPIC_ORDER = ['Fundamentals', 'Design Patterns', 'Best Practices'] as const
export type Topic = (typeof TOPIC_ORDER)[number]

export function topicToSlug(topic: string): string {
  return topic.toLowerCase().replace(/\s+/g, '-')
}

export function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-')
}
