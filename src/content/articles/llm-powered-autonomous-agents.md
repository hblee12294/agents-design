---
title: "LLM-Powered Autonomous Agents"
slug: llm-powered-autonomous-agents
summary: "Lilian Weng's seminal deep-dive into the architecture of LLM-based autonomous agents, covering planning (CoT, ToT, self-reflection), memory systems (sensory, short-term, long-term), and tool use as the three pillars of agent design."
author: Lilian Weng
date: "2023-06-23"
originalUrl: https://lilianweng.github.io/posts/2023-06-23-agent/
topic: Fundamentals
tags:
  - planning
  - memory
  - tool use
  - architecture
  - foundational
---

## Overview

This blog post by Lilian Weng (OpenAI) is widely considered **the foundational reference** on LLM-powered agent architecture. It frames an autonomous agent as having three core components: **Planning**, **Memory**, and **Tool Use** — with the LLM serving as the central controller.

## Planning

Planning is how the agent breaks down complex tasks into manageable steps:

- **Chain of Thought (CoT)** — the model "thinks step by step," improving reasoning on complex tasks by making intermediate steps explicit.
- **Tree of Thoughts (ToT)** — extends CoT by exploring multiple reasoning paths simultaneously, enabling search and backtracking.
- **Self-Reflection** — the agent critiques its own outputs and refines them. Techniques like ReAct, Reflexion, and Chain of Hindsight allow agents to learn from mistakes within a single session.

## Memory

The article maps agent memory onto cognitive science concepts:

- **Sensory Memory** — raw input embeddings (what the model sees right now)
- **Short-Term Memory** — the context window, limited in size but immediately accessible
- **Long-Term Memory** — external storage (vector databases, knowledge graphs) that the agent can query. This enables agents to retain information beyond the context window.

Maximum Inner Product Search (MIPS) and approximate nearest neighbor algorithms are discussed as practical retrieval mechanisms.

## Tool Use

Tools extend the agent's capabilities beyond what the LLM can do alone:

- **MRKL** — a modular architecture routing to expert modules (calculators, APIs, databases)
- **Toolformer** — LLMs learn to call APIs by self-supervised annotation of training data
- **Function Calling** — the modern approach where APIs are described in the prompt and the model generates structured calls

## Key Takeaway

An effective agent is not just a powerful LLM — it is an LLM augmented with structured planning strategies, external memory systems, and a well-designed tool interface. Each component can be improved independently.

