# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A curated content website for AI agent design pattern articles, built with Astro 6 and deployed via Cloudflare Pages at `https://agentsdesign.dev`.

## Commands

```bash
pnpm dev       # Start Astro dev server
pnpm build     # Astro static build (outputs to dist/)
pnpm lint      # ESLint
pnpm preview   # Preview production build
```

## Architecture

**Framework:** Astro 6 with static output (`output: 'static'`). Zero client-side framework JS — only vanilla JS for theme toggle.

**Routing:** File-based routing in `src/pages/`. Static pages generated for all routes:
- `/` — home (default topic: Fundamentals)
- `/topic/[topic]/` — topic listing pages (3)
- `/tag/[tag]/` — tag listing pages (14)
- `/article/[slug]/` — article detail pages (6)

**Content:** Astro Content Collections. Articles live as Markdown in `src/content/articles/`. Schema defined in `src/content.config.ts` with Zod validation. Adding an article = adding a `.md` file with the required frontmatter (title, slug, summary, author, date, originalUrl, topic, tags).

**Styling:** Tailwind CSS 4 with custom OKLCH accent palette and dark mode (`.dark` class on `<html>`). Typography plugin for prose. Shiki dual themes (github-light/github-dark) for code highlighting.

**Fonts:** Astro 6 built-in Fonts API with Fontsource provider for Inter.

**Build/Deploy:** Cloudflare Pages with GitHub integration (auto-builds on push to main). Environment variables `NODE_VERSION=22` and `PUBLIC_GA_ID` set in Cloudflare dashboard.

## Key Conventions

- Package manager: **pnpm**
- TypeScript strict mode (extends `astro/tsconfigs/strict`)
- All components are `.astro` files (no React)
- Topic ordering defined in `src/lib/topics.ts`
- Custom rehype plugin (`src/lib/rehype-read-original.ts`) styles "Read the original" links as buttons
- Theme preference persisted in localStorage
- Trailing slashes on all URLs (`trailingSlash: 'always'`)
