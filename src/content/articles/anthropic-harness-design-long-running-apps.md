---
title: "Harness Design for Long-Running Application Development"
slug: anthropic-harness-design-long-running-apps
summary: "Presents a GAN-inspired three-agent architecture (planner, generator, evaluator) for long-running application development, demonstrating how separating generation from structured evaluation with sprint contracts dramatically improves quality over single-agent approaches."
author: Anthropic
date: "2026-03-24"
originalUrl: https://www.anthropic.com/engineering/harness-design-long-running-apps
topic: Design Patterns
tags:
  - multi-agent
  - architecture
  - orchestration
  - design patterns
---

## Overview

Single-agent approaches to complex, long-running development tasks consistently underdeliver. Context degradation causes models to lose coherence or prematurely wrap up work, and self-evaluation bias means agents reliably praise their own mediocre outputs. This article from Anthropic Labs presents a multi-agent harness inspired by GANs that addresses both problems by separating generation from structured evaluation, producing dramatically higher-quality results on tasks spanning hours of autonomous work.

## The Two Core Problems

Long-running agent tasks face interconnected failure modes. First, **context degradation** — as context windows fill, models lose coherence and exhibit "context anxiety," rushing to finish prematurely. Context resets (clearing the window with structured handoffs) proved more effective than compaction alone, though they add orchestration overhead. Second, **self-evaluation bias** — agents asked to grade their own work consistently overrate quality. For subjective tasks like frontend design, this is especially problematic since there's no binary pass/fail. The solution: separate the roles entirely so an independent evaluator provides concrete iteration targets.

## Three-Agent Architecture

The harness decomposes work across three specialized agents:

- **Planner** — expands brief prompts into full product specifications, emphasizing scope and high-level design while avoiding over-specified implementation details that cause cascading errors
- **Generator** — works in sprints implementing one feature at a time, using self-evaluation before handing work to QA, and maintaining git version control throughout
- **Evaluator** — tests the running application via Playwright like an actual user, exercising UI features, API endpoints, and database states to catch gaps that self-evaluation misses

## The Sprint Contract Pattern

Before each implementation sprint, the generator and evaluator negotiate a "sprint contract" — the generator proposes specific deliverables and success criteria, and the evaluator validates that the right thing is being built. This bridges the gap between high-level specifications and testable implementation, preventing the common failure where an agent builds something technically functional but misaligned with intent.

## Results and Cost-Quality Tradeoffs

On a retro game maker case study, the contrast was stark. A single-agent run took 20 minutes and $9 but produced broken core functionality. The three-agent harness took 6 hours and $200 but delivered a 16-feature application across 10 sprints with polished UI and working gameplay. The evaluator caught critical gaps — tools that only partially worked, routing bugs, and missing interactive depth — that solo approaches consistently missed.

## Evolving Harnesses with Model Capabilities

A key insight: every harness component encodes an assumption about what the model cannot do. As Claude Opus 4.6 improved, the author systematically removed scaffolding — dropping sprint decomposition (the model could sustain coherence longer) and moving the evaluator to single-pass assessment. A later DAW case study ran the builder coherently for 2+ hours without sprint decomposition, though the evaluator still caught essential gaps like stub-only implementations. The takeaway is that harnesses should be stress-tested with each new model release, removing components that are no longer load-bearing.

## Key Takeaway

Separating generation from structured evaluation is the single highest-leverage pattern for long-running agent tasks — but the optimal level of decomposition is a moving target that should be recalibrated as model capabilities improve.
