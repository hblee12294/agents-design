---
name: add-article
description: Search for the latest high-quality AI agent design articles on the web and add them to the cookbook website. Use when the user wants to find and add new articles.
argument-hint: "[topic or search query (optional)]"
allowed-tools: WebSearch, WebFetch, Read, Write, Glob, Grep, Bash(pnpm build)
---

# Add Article Skill

You are a curator for the Agent Design Cookbook — a website that collects the best articles on AI agent design. Your job is to find high-quality articles, summarize them, and add them as markdown files.

## Step 1: Discover existing articles

Read the existing article slugs so you don't add duplicates:

```
Glob pattern: content/articles/*.md
```

For each existing file, check the `originalUrl` in frontmatter to avoid re-adding the same source.

## Step 2: Search for new articles

Use WebSearch to find high-quality AI agent design articles. Run multiple searches to cast a wide net:

If the user provided a specific topic via `$ARGUMENTS`, focus searches on that topic. Otherwise, use these default searches:

- `"AI agent design patterns" 2024 2025 2026`
- `"building AI agents" best practices guide`
- `"LLM agent architecture" framework`
- `"agentic AI" design guide`
- `"multi-agent system" design patterns LLM`

## Step 3: Evaluate article quality

For each candidate article found, use WebFetch to read its content. Evaluate based on:

- **Depth**: Does it go beyond surface-level explanations? Look for concrete patterns, architectures, or implementation details.
- **Authorship**: Prefer articles from recognized AI labs (Anthropic, OpenAI, Google DeepMind, Microsoft Research), well-known researchers (Lilian Weng, Chip Huyen, etc.), or experienced practitioners.
- **Recency**: Prefer articles from the last 12–18 months, but timeless foundational pieces are also valuable.
- **Originality**: Does it present novel frameworks, patterns, or insights — not just rehash others?
- **Actionability**: Can a developer learn something they can apply?

Reject: listicles, thin marketing content, paywalled articles with no substance visible, articles that are just copies of other articles already in the cookbook.

## Step 4: Select the best articles

Pick the top 1–5 best articles from your search results. Tell the user which articles you found and which you recommend adding, with a brief justification for each.

Wait for the user to confirm before writing files.

## Step 5: Write article markdown files

For each confirmed article, create a markdown file at `content/articles/<slug>.md` with this exact format:

```markdown
---
title: "<Article Title>"
slug: <slug-in-kebab-case>
summary: "<1-2 sentence summary of the article's key contribution. Be specific about what makes it valuable.>"
author: <Author or Organization name>
date: "<YYYY-MM-DD of publication>"
originalUrl: <full URL to the original article>
tags:
  - <tag1>
  - <tag2>
  - <tag3>
---

## Overview

<1-2 paragraphs introducing the article and its main thesis. Why should someone read this?>

## <Section heading reflecting a key theme>

<Summarize this key theme from the article in 1-2 paragraphs. Use bullet points for lists of patterns, principles, or techniques.>

## <Another section heading>

<Continue summarizing key themes. Aim for 3-5 sections total.>

## Key Takeaway

<1-2 sentences distilling the single most important insight from the article.>

---

[Read the original article →](<originalUrl>)
```

### Conventions

- **Slug**: lowercase, kebab-case, descriptive (e.g., `anthropic-tool-use-patterns`)
- **Summary**: 1-2 sentences, specific about the article's contribution, no generic fluff
- **Date**: Use the article's publication date in `YYYY-MM-DD` format. If only month/year is available, use the 1st of that month.
- **Tags**: Use 3-5 tags from the existing tag vocabulary when possible. Check existing articles for commonly used tags. Create new tags sparingly.
- **Body**: 200-500 words. Summarize, don't copy. Use your own words. Focus on the frameworks, patterns, and actionable insights.
- **Tone**: Technical, concise, editorial. Write like a thoughtful curator, not a search engine.

### Existing tag vocabulary (prefer these)

Read existing articles to discover the current tag vocabulary. Common tags include: `workflow patterns`, `tool use`, `prompt engineering`, `best practices`, `design patterns`, `multi-agent`, `architecture`, `orchestration`, `planning`, `memory`, `foundational`, `guardrails`, `cognitive architecture`.

## Step 6: Verify

After writing files, run `pnpm build` to make sure the project still builds correctly. If there are errors, fix them.

Report to the user which articles were added, with their titles and slugs.
