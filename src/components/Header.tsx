import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link to="/" className="group">
          <h1 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Agent Design Cookbook
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Curated articles on building AI agents
          </p>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
