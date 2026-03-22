import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="border-b border-neutral-100 dark:border-neutral-800/60">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-8 lg:px-12 py-6">
        <Link to="/" className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7 shrink-0">
            <rect width="32" height="32" rx="7" fill="#111" className="dark:fill-neutral-200" />
            <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" className="dark:[stroke:#111]">
              <path d="M4 24V12L8 8L12 12V24M4 18H12" />
              <path d="M20 8V24H22C26 24 28 20 28 16S26 8 22 8H20" />
            </g>
          </svg>
          <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Agents Design
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
