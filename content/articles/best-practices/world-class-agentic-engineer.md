---
title: "How To Be A World-Class Agentic Engineer"
slug: world-class-agentic-engineer
summary: "A practitioner's guide to maximizing agent capabilities with minimal tooling — covering context management, sycophancy exploitation, task contracts, and iterative rules/skills architecture."
author: sysls
date: "2026-03-01"
originalUrl: https://medium.com/@nonsensee/how-to-be-a-world-class-agentic-engineer-413783d24388
topic: Best Practices
tags:
  - best practices
  - prompt engineering
  - workflow patterns
  - context management
---

## Overview

Most developers trying to get the most out of AI agents fall into a trap: accumulating frameworks, plugins, and harnesses in search of a magic combination. This article argues the opposite — that a barebones CLI setup (Claude Code or Codex) combined with a few fundamental principles will outperform any complex toolchain. The author draws from extensive production experience building agentic factories for signals, infrastructure, and data pipelines.

## Less Is More

Foundation companies are on a generational run. Every new generation of agent intelligence changes optimal workflows, which means locking into external harnesses creates dependencies on solutions for problems that may soon disappear. If a capability is truly groundbreaking, frontier companies will incorporate it into their base products — skills, memory, subagents, and planning all started as external solutions before becoming core features. The practical advice: just update your CLI tool regularly and read the changelog.

## Context Is Everything

The single most important principle is giving agents exactly the information they need and nothing more. Using many plugins and dependencies causes context bloat — agents become overwhelmed with irrelevant information. The key practice is separating research from implementation:

- **Vague prompt**: "Build an auth system" forces the agent to research alternatives, filling context with unnecessary options
- **Precise prompt**: "Implement JWT authentication with bcrypt-12 password hashing, refresh token rotation with 7-day expiry" lets the agent focus purely on execution

When you don't know the implementation details, create a research task first, decide on the approach, then hand a fresh-context agent the specific implementation work.

## Exploiting Sycophancy

Agents are engineered to please, which means biased prompts produce biased results. Saying "find me a bug" will make the agent engineer one if needed. Instead, use neutral prompts: "Search through the database, follow the logic of each component, and report all findings."

The author describes a powerful adversarial pattern for bug-finding:

- A **bug-finder agent** scored on impact (incentivized to find everything, producing a superset of possible bugs)
- An **adversarial agent** scored for disproving bugs with penalties for wrong calls (producing a subset of real bugs)
- A **referee agent** that scores both, believing the author holds ground truth

This multi-agent pattern exploits each agent's desire to please in opposing directions, producing high-fidelity results.

## Task Contracts and Completion

Agents know how to start tasks but struggle with knowing when to stop. The solution is explicit contracts: define tests that must pass, screenshots that must verify design/behavior, and embed these into a `{TASK}_CONTRACT.md`. A stop-hook prevents session termination until all contract conditions are met.

For long-running automation, the author recommends one session per contract rather than marathon 24-hour sessions, which cause context bloat from unrelated work. An orchestration layer creates new contracts as needed and spawns fresh sessions for each.

## Rules, Skills, and Iteration

Treat your CLAUDE.md as a logical, nested directory of where to find context — not a monolithic document. Use conditional branching: "If coding, read coding-rules.md; if tests are failing, read test-failing-rules.md."

- **Rules** encode preferences (what not to do, how to behave)
- **Skills** encode recipes (specific approaches to specific problems)

Add rules and skills iteratively based on real friction. But as they accumulate, they'll start contradicting each other and causing context bloat — so periodically consolidate and clean up. This cycle of iterate-then-consolidate is the core workflow.

## Key Takeaway

Strip your agent setup to the bare minimum, obsessively manage context, and build up rules and skills iteratively from real usage — the simplicity is the superpower, not the toolchain.

---

[Read the original article →](https://medium.com/@nonsensee/how-to-be-a-world-class-agentic-engineer-413783d24388)
