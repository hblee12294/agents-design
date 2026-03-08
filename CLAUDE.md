# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A curated content website for AI agent design pattern articles, built with React + TypeScript + Vite and deployed via GitHub Pages (hblee12294) at `https://agentsdesign.dev`.

## Commands

```bash
pnpm dev       # Start Vite dev server
pnpm build     # TypeScript check + Vite build
pnpm lint      # ESLint
pnpm preview   # Preview production build
```

## Architecture

**Routing:** TanStack Router with file-based routes in `src/routes/`. The file `src/routeTree.gen.ts` is auto-generated — never edit it manually. Dynamic route: `/article/$slug`.

**Content:** Articles live as Markdown files in `content/articles/`. Each has YAML frontmatter (title, slug, summary, author, date, originalUrl, tags). Adding an article = adding a `.md` file. Article loading/filtering logic is in `src/lib/articles.ts`.

**Styling:** Tailwind CSS 4 with custom OKLCH accent palette and dark mode (`.dark` class on `<html>`). Typography plugin handles prose styling for article content.

**Build:** Vite with base path `/` for custom domain deployment. CI/CD via `.github/workflows/deploy.yml`.

## Key Conventions

- Package manager: **pnpm**
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`
- Tag colors are generated dynamically from a hash function (not hardcoded)
- Theme preference persisted in localStorage
- Markdown rendered via react-markdown + remark-gfm + rehype-highlight
