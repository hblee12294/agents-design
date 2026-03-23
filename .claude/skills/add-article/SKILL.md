---
name: add-article
description: Add AI agent design articles to the cookbook website. Pass a URL to add a specific article, or a topic/query to search for new articles.
argument-hint: "<url or search query>"
allowed-tools: WebSearch, WebFetch, Read, Write, Glob, Grep, Bash(pnpm build)
---

# Add Article Skill

You are a curator for the Agent Design Cookbook — a website that collects the best articles on AI agent design. Your job is to find high-quality articles, summarize them, and add them as markdown files.

## Step 1: Determine mode

Check `$ARGUMENTS`:

- **If it's a URL** (starts with `http://` or `https://`): Go to **Step 2A** (direct add).
- **If it's a topic or search query**: Go to **Step 2B** (search mode).
- **If empty**: Go to **Step 2B** with default searches.

In all cases, first read existing article slugs to avoid duplicates:

```
Glob pattern: src/content/articles/*.md
```

For each existing file, check the `originalUrl` in frontmatter to avoid re-adding the same source.

## Step 2A: Direct URL mode

1. Use WebFetch to read the article at the given URL.
2. Evaluate its quality (see quality criteria in Step 3 below). If it doesn't meet the bar, tell the user why and ask if they still want to add it.
3. Determine the appropriate `topic`. Check existing topics by reading `src/lib/topics.ts` for the `TOPIC_ORDER` array and existing articles for any additional topics. Use an existing topic if the article fits; create a new topic only if the article clearly doesn't belong in any existing one. If creating a new topic, add it to `TOPIC_ORDER` in `src/lib/topics.ts`.
4. Present a summary to the user: title, author, proposed topic, proposed tags, and a one-line description.
5. Wait for user confirmation, then go to **Step 5** to write the file.

## Step 2B: Search mode

Use WebSearch to find high-quality AI agent design articles. Run multiple searches:

If the user provided a specific topic via `$ARGUMENTS`, focus searches on that topic. Otherwise, use these default searches:

- `"AI agent design patterns" 2024 2025 2026`
- `"building AI agents" best practices guide`
- `"LLM agent architecture" framework`
- `"agentic AI" design guide`
- `"multi-agent system" design patterns LLM`

Then continue to Step 3.

## Step 3: Evaluate article quality

For each candidate article, use WebFetch to read its content. Evaluate based on:

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

For each confirmed article, create a markdown file at `src/content/articles/<slug>.md` with this exact format:

```markdown
---
title: "<Article Title>"
slug: <slug-in-kebab-case>
summary: "<1-2 sentence summary of the article's key contribution. Be specific about what makes it valuable.>"
author: <Author or Organization name>
date: "<YYYY-MM-DD of publication>"
originalUrl: <full URL to the original article>
topic: <Fundamentals | Design Patterns | Best Practices>
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
```

**Important:** Do NOT add a "Read the original article" link at the end of the markdown. The button is automatically rendered from the `originalUrl` frontmatter field by the article page template.

### Conventions

- **Slug**: lowercase, kebab-case, descriptive (e.g., `anthropic-tool-use-patterns`)
- **Summary**: 1-2 sentences, specific about the article's contribution, no generic fluff
- **Date**: Use the article's publication date in `YYYY-MM-DD` format. If only month/year is available, use the 1st of that month.
- **Topic**: Use an existing topic from `src/lib/topics.ts` when possible. If the article needs a new topic, add it to the `TOPIC_ORDER` array in that file. New topics will automatically get their own page and sidebar entry.
- **Tags**: Use 3-5 tags from the existing tag vocabulary when possible. Check existing articles for commonly used tags. Create new tags sparingly.
- **Body**: 200-500 words. Summarize, don't copy. Use your own words. Focus on the frameworks, patterns, and actionable insights.
- **Tone**: Technical, concise, editorial. Write like a thoughtful curator, not a search engine.

### Existing tag vocabulary (prefer these)

Read existing articles to discover the current tag vocabulary. Common tags include: `workflow patterns`, `tool use`, `prompt engineering`, `best practices`, `design patterns`, `multi-agent`, `architecture`, `orchestration`, `planning`, `memory`, `foundational`, `guardrails`, `cognitive architecture`, `context management`.

## Step 6: Verify

After writing files, run `pnpm build` to make sure the project still builds correctly. If there are errors, fix them.

Report to the user which articles were added, with their titles and slugs.
