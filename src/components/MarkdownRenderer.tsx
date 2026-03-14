import Markdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MarkdownRendererProps {
  content: string
}

const components: Components = {
  a({ href, children }) {
    const text = typeof children === 'string' ? children : ''
    if (text.startsWith('Read the original article')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="not-prose inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-neutral-900 no-underline hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors duration-200"
        >
          Read the original
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      )
    }
    return <a href={href}>{children}</a>
  },
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent-600 dark:prose-a:text-accent-400 prose-a:underline-offset-2">
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={components}>
        {content}
      </Markdown>
    </div>
  )
}
