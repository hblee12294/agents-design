# Agents Design

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

A curated collection of the best articles on AI agent design patterns, best practices, and architecture.

**[agentsdesign.dev](https://agentsdesign.dev)**

## About

Agents Design is a community-driven resource that curates and summarizes high-quality articles on building AI agents. Each article includes key takeaways and links back to the original source. All rights belong to the original authors.

### Topics

- **Fundamentals** — Core concepts, cognitive architectures, and foundational papers
- **Design Patterns** — Workflow patterns, multi-agent systems, and orchestration
- **Best Practices** — Practical guides for building production-ready agents

## Tech Stack

- [Astro 6](https://astro.build) — Static site generation, zero client-side JS
- [Tailwind CSS 4](https://tailwindcss.com) — Utility-first styling with dark mode
- [Cloudflare Pages](https://pages.cloudflare.com) — Edge deployment and CDN
- [Shiki](https://shiki.style) — Syntax highlighting (github-light / github-dark)

## Getting Started

```bash
# Prerequisites: Node.js 22+, pnpm
pnpm install
pnpm dev
```

Open [http://localhost:4000](http://localhost:4000).

## Commands

| Command | Description |
|----------------|--------------------------------------|
| `pnpm dev` | Start Astro dev server |
| `pnpm build` | Build static site to `dist/` |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## Adding an Article

Create a Markdown file in `src/content/articles/` with the following frontmatter:

```yaml
---
title: "Article Title"
slug: article-slug
summary: "A brief summary of the article."
author: Author Name
date: "2025-01-01"
originalUrl: https://example.com/original-article
topic: Fundamentals # or "Design Patterns" or "Best Practices"
tags:
  - architecture
  - tool use
---

Your markdown content here...
```

The article will automatically appear on the site after rebuild. No other configuration needed.

## Project Structure

```
src/
  content/articles/    # Markdown articles with frontmatter
  components/          # Astro components (Header, Footer, etc.)
  layouts/             # Base layout
  pages/               # File-based routing
    index.astro        # Home page
    article/[slug].astro
    topic/[topic].astro
    tag/[tag].astro
  styles/app.css       # Tailwind + custom styles
  lib/                 # Utilities (topics, rehype plugin)
```

## Contributing

Contributions are welcome! You can:

- **Add articles** — Submit a PR with a new `.md` file in `src/content/articles/`
- **Fix bugs** — Open an issue or submit a PR
- **Suggest features** — Open an issue for discussion

## License

[MIT](LICENSE)
