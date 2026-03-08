export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-neutral-500 dark:text-neutral-400">
        <p>
          A curated collection of the best articles on AI agent design.{' '}
          <a
            href="https://github.com/hblee/agent-design"
            className="underline underline-offset-2 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
