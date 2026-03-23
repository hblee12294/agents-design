---
title: "Agents White Paper"
slug: google-agents-whitepaper
summary: "Google's comprehensive whitepaper distinguishing agents from plain models, explaining how tools, orchestration layers, and cognitive architectures combine to create capable AI agents."
author: Google
date: "2024-09-01"
originalUrl: https://www.kaggle.com/whitepaper-agents
topic: Fundamentals
tags:
  - architecture
  - orchestration
  - tool use
  - cognitive architecture
  - foundational
---

## Overview

Google's Agents whitepaper provides a **formal framework** for understanding what makes an AI agent more than just an LLM. The core argument: a model alone is not an agent. An agent emerges from the combination of a model, tools, and an **orchestration layer** that manages the interaction loop.

## Agent vs. Model

The paper draws a clear line:

- A **model** takes input and produces output — it has no state, no tools, and no ability to act on the world.
- An **agent** wraps a model in a loop that can observe the environment, plan actions, execute tools, and incorporate feedback.

This distinction matters because it clarifies where to invest engineering effort: not just in model quality, but in the orchestration and tooling layers.

## The Orchestration Layer

The orchestration layer is the "brain" that manages the agent's execution loop:

1. **Receive** input (user query or environment observation)
2. **Plan** the next action using the model's reasoning capabilities
3. **Execute** the chosen action (tool call, API request, code execution)
4. **Observe** the result and update internal state
5. **Repeat** until the task is complete or a termination condition is met

The paper discusses several orchestration strategies, including ReAct-style interleaving of reasoning and action, and plan-then-execute approaches where the full plan is generated upfront.

## Tool Integration

Tools are categorized into:

- **Extensions** — first-party APIs tightly integrated with the agent
- **Functions** — developer-defined capabilities exposed to the model
- **Data stores** — retrieval systems (RAG) that provide dynamic context

The paper emphasizes that tool descriptions serve as a form of **in-context learning** — the model uses the tool's name, description, and parameter schema to decide when and how to invoke it.

## Cognitive Architectures

The whitepaper introduces the concept of **cognitive architectures** for agents — structured ways of combining reasoning, memory, and action:

- **Reactive** — simple stimulus-response, no planning
- **Deliberative** — explicit planning before acting
- **Reflective** — self-monitoring and strategy adjustment during execution

## Key Takeaway

Building an effective agent requires thinking beyond the model. The orchestration layer and tool interface are equally important — and often more impactful to improve than the underlying model itself.

