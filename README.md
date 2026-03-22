# Agents Design

A curated collection of the best articles on AI agent design patterns, best practices, and architecture.

Live at [agentsdesign.dev](https://agentsdesign.dev)

## About

Agents Design is a community-driven resource that curates and summarizes high-quality articles on building AI agents. All article rights belong to the original authors — we provide summaries and link back to the source.

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **TanStack Router** — file-based routing
- **Tailwind CSS 4** — styling with dark mode
- **react-markdown** + remark-gfm + rehype-highlight — Markdown rendering

## Getting Started

```bash
pnpm install
pnpm dev
```

## Commands

| Command | Description |
|--------------|-------------------------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | TypeScript check + Vite build |
| `pnpm lint` | Run ESLint |
| `pnpm preview`| Preview production build |

## Adding Articles

Add a Markdown file to `content/articles/<topic>/` with YAML frontmatter:

```yaml
---
title: "Article Title"
slug: article-slug
summary: "Brief summary"
author: Author Name
date: "YYYY-MM-DD"
originalUrl: https://example.com/article
topic: Fundamentals
tags:
  - tag1
  - tag2
---
```

## License

[MIT](LICENSE)
