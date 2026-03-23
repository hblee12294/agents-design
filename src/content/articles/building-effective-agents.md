---
title: "Building Effective Agents"
slug: building-effective-agents
summary: "Anthropic's guide to building effective AI agents, covering workflow patterns like prompt chaining, routing, parallelization, and the orchestrator-workers pattern. Emphasizes simplicity and starting with the least complex solution."
author: Anthropic
date: "2024-12-20"
originalUrl: https://www.anthropic.com/engineering/building-effective-agents
topic: Design Patterns
tags:
  - workflow patterns
  - tool use
  - prompt engineering
  - best practices
---

## Overview

This article from Anthropic offers a practical, opinionated guide to building LLM-powered agents and workflows. Rather than jumping straight to complex autonomous agents, the authors argue for **starting simple** — using single LLM calls with retrieval and in-context examples before graduating to more complex agentic systems.

## Key Workflow Patterns

The article defines a clear taxonomy of **agentic systems**, distinguishing between _workflows_ (predetermined orchestration of LLMs) and _agents_ (LLMs dynamically directing their own processes):

- **Prompt Chaining** — break a task into sequential steps, where each LLM call processes the output of the previous one. Useful when you can decompose a task cleanly.
- **Routing** — classify the input first, then direct it to a specialized handler. Good for complex tasks with distinct categories.
- **Parallelization** — run multiple LLM calls simultaneously and aggregate results. Works for tasks requiring multiple independent perspectives (e.g., voting on code quality).
- **Orchestrator-Workers** — a central LLM dynamically delegates subtasks to worker LLMs. Great when you cannot predict the subtasks in advance.
- **Evaluator-Optimizer** — one LLM generates, another evaluates, looping until quality criteria are met. Useful when you have clear evaluation standards.

## When to Use Agents

The article recommends true agents (with tool use and autonomous loop control) only when **the task requires flexibility and model-driven decision-making** that workflows cannot handle. Agents trade latency and cost for better performance on open-ended problems.

## Key Takeaways

1. Keep agentic systems as simple as possible — complexity for its own sake hurts reliability
2. Transparency is critical: show the agent's planning steps to users
3. Invest heavily in your **tool design** — clear names, thorough descriptions, and well-tested interfaces make or break agent performance

