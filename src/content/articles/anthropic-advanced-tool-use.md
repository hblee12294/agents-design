---
title: "Advanced Tool Use on the Claude Developer Platform"
slug: anthropic-advanced-tool-use
summary: "Introduces three advanced tool use features — tool search, programmatic tool calling, and tool use examples — that enable Claude agents to dynamically discover, efficiently orchestrate, and accurately invoke tools across large tool libraries while minimizing context token consumption."
author: Anthropic
date: "2025-11-24"
originalUrl: https://www.anthropic.com/engineering/advanced-tool-use
topic: Platform & Tools
tags:
  - tool use
  - architecture
  - context management
  - design patterns
---

## Overview

As AI agents gain access to increasingly large tool libraries, naive approaches to tool management break down. Loading all tool definitions upfront devours context tokens, sequential tool calls create latency bottlenecks, and ambiguous schemas lead to malformed invocations. Anthropic's engineering team addresses these challenges with three complementary features that fundamentally change how agents interact with tools — shifting from static function calling toward intelligent, dynamic orchestration.

## Tool Search: On-Demand Discovery

The first bottleneck is context bloat. A typical multi-server setup (GitHub, Slack, Sentry, Grafana, Splunk) can consume 55K+ tokens in tool definitions alone before a conversation even begins. The tool search feature replaces this by loading only a lightweight search tool (~500 tokens) upfront, letting the agent discover relevant tools on demand.

- Tools are marked with `defer_loading: true` for on-demand discovery, while critical tools remain always-loaded
- Context consumption drops from ~72K tokens to ~8.7K tokens — preserving 95% of the context window
- Accuracy improved significantly: Opus 4 went from 49% to 74%, Opus 4.5 from 79.5% to 88.1%

This pattern is most valuable for systems with 10+ tools consuming over 10K tokens in definitions.

## Programmatic Tool Calling: Code as Orchestration

Traditional tool calling forces every intermediate result through the model's context and requires a full inference pass per invocation. Programmatic tool calling lets Claude write Python code that orchestrates multiple tool calls in a sandboxed environment, processing outputs before they enter the context window.

- Token reduction of 37% on complex tasks (43K down to 27K tokens)
- Eliminates 19+ inference passes in multi-step workflows by batching operations
- Only final, processed results enter Claude's context — turning 200KB of raw data into ~1KB of actionable output

The pattern excels at dataset processing, multi-step dependent workflows, and any scenario requiring filtering or aggregation before the model reasons over results.

## Tool Use Examples: Teaching by Demonstration

JSON schemas define what is structurally valid but cannot express usage patterns — when to include optional parameters, expected format conventions, or API-specific expectations. Tool use examples fill this gap by providing 1–5 concrete demonstrations of correct invocations.

- Examples clarify date formats, ID conventions, nested object construction, and parameter correlations
- Internal testing showed accuracy jumping from 72% to 90% on complex parameter handling
- Most effective for tools with similar names, complex nested structures, or domain-specific conventions

## Strategic Layering

Rather than implementing all three features at once, Anthropic recommends addressing bottlenecks sequentially: start with tool search if context bloat is the primary issue, add programmatic calling if large intermediate results are a problem, and layer in examples where parameter errors persist. Each feature targets a distinct failure mode, and their benefits compound when combined.

## Key Takeaway

These three features represent a shift from treating tools as static function signatures to treating them as a dynamic, searchable, programmable ecosystem — enabling agents to scale across dozens of tools while maintaining both efficiency and accuracy.
