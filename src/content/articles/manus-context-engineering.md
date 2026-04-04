---
title: "Context Engineering for AI Agents: Lessons from Building Manus"
slug: manus-context-engineering
summary: "Six battle-tested context engineering principles from Manus's production agent — including KV-cache optimization, logit masking over tool removal, filesystem-as-memory, attention manipulation through todo recitation, preserving error traces, and breaking few-shot pattern imitation."
author: Manus
date: "2025-07-18"
originalUrl: https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
topic: Best Practices
tags:
  - context management
  - best practices
  - architecture
  - prompt engineering
---

## Overview

Most agent engineering advice focuses on prompting or tool design. This article from the Manus team tackles a less-discussed but equally critical layer: how you structure and manage the context window itself. Drawing from production experience processing millions of real-world interactions, it presents six principles for context engineering that directly affect agent latency, cost, error recovery, and task completion quality. Several insights are counterintuitive, making this a valuable read for anyone building agents beyond the prototype stage.

## Design Around the KV-Cache

The single most important metric for production agents is KV-cache hit rate. With agents processing roughly 100 input tokens for every output token, cached tokens cost ~90% less than uncached ones. The practical implications are strict: maintain stable prompt prefixes so earlier tokens remain cacheable, use append-only context structures that never invalidate the cache, and route requests consistently to the same workers using session IDs. Any architectural decision that breaks prefix stability — like dynamically reordering tools or injecting variable content early in the prompt — has an outsized cost impact.

## Mask, Don't Remove

When agents have access to many tools, a common approach is dynamically loading only relevant tools per turn. This backfires in two ways: it breaks KV-cache and confuses the model about what capabilities exist. Instead, Manus keeps all tool definitions in context permanently and uses logit masking through a context-aware state machine to constrain which tools can be selected at each step. The model sees all tools, but invalid choices are masked at the logit level — preserving cache while preventing erroneous selections.

## Filesystem as Externalized Memory

Even 128K+ token context windows prove insufficient for real-world tasks involving unstructured data like PDFs or web pages. Manus treats the filesystem as unlimited external memory — agents learn to write intermediate results to files and read them back when needed, rather than stuffing everything into the context window. A key principle: compression must be reversible. Even when dropping content, preserve URLs or file paths so the agent can recover the original information later.

## Attention Manipulation Through Recitation

With typical tasks requiring ~50 tool calls, models risk drifting off-topic or forgetting their original objectives — the "lost-in-the-middle" problem. Manus combats this by having agents create and continuously update a `todo.md` file throughout execution, effectively reciting objectives into the model's recent attention window. This lightweight technique keeps goals salient without architectural changes.

## Keep the Wrong Stuff In

Counterintuitively, Manus preserves failed actions and error traces in context rather than cleaning them up. When a model observes its own failed attempts alongside stack traces, it implicitly updates its beliefs and steers away from similar mistakes. Removing errors forces the model to rediscover what doesn't work. Error recovery is what distinguishes real agentic behavior from demo-quality prototypes.

## Don't Get Few-Shotted By Your Own Context

Language models are powerful pattern imitators. When an agent's context fills with repetitive action-observation pairs of the same format, the model starts mimicking that pattern regardless of whether it's optimal. Manus mitigates this by introducing controlled variation — alternating serialization templates, varying phrasing, and applying minor formatting changes to break monotonous patterns and restore the model's ability to generalize.

## Key Takeaway

Context engineering — how you structure, cache, compress, and vary what the model sees — is as important as the model's raw capability in determining production agent performance, and small structural decisions like cache-aware prompt ordering or keeping errors visible compound into massive quality and cost differences at scale.
