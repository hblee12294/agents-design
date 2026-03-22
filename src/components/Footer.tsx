export function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800/60">
      <div className="mx-auto max-w-6xl px-8 lg:px-12 py-8 text-sm text-neutral-400 dark:text-neutral-500">
        <p className="text-right">
          Agents Design{' '}
          <span className="mx-1">&middot;</span>
          <a
            href="https://github.com/hblee/agent-design"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
