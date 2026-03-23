---
title: "A Practical Guide to Building Agents"
slug: practical-guide-building-agents
summary: "OpenAI's practical guide covering the three pillars of agent construction — choosing the right model, defining tools clearly, and writing effective instructions — with actionable advice on guardrails and evaluation."
author: OpenAI
date: "2025-01-16"
originalUrl: https://platform.openai.com/docs/guides/agents
topic: Best Practices
tags:
  - best practices
  - tool use
  - prompt engineering
  - guardrails
---

## Overview

OpenAI's guide takes a **builder-first** perspective on constructing AI agents. Rather than diving into theory, it focuses on the three concrete pillars you need to get right: **Model**, **Tools**, and **Instructions**. The guide is aimed at developers who want to ship reliable agents in production.

## The Three Pillars

### 1. Model Selection

Choose the right model for each task within your agent. Not every step needs the most powerful model — use faster, cheaper models for routing and classification, and reserve the most capable model for complex reasoning steps.

### 2. Tool Design

Tools are the bridge between the LLM and the outside world. The guide emphasizes:

- **Clear naming and descriptions** — tool names and docstrings should be self-explanatory
- **Minimal parameter surface** — fewer required parameters means fewer chances for the model to make mistakes
- **Structured outputs** — return data in consistent formats the model can parse reliably
- **Error messages** — return helpful errors instead of raw exceptions so the model can recover

### 3. Instruction Engineering

System prompts are the control surface for agent behavior:

- Be **explicit** about the agent's role, boundaries, and output format
- Include **examples** of correct behavior for ambiguous scenarios
- Define **escalation paths** — when should the agent ask for help vs. proceed?
- Use **structured formats** (numbered steps, markdown sections) for complex instructions

## Guardrails

The guide introduces a layered guardrail strategy:

- **Input guardrails** — validate and sanitize user input before it reaches the agent
- **Output guardrails** — check the agent's responses before they reach the user
- **Tool guardrails** — validate tool parameters and rate-limit sensitive operations

## Evaluation

Building agents is iterative. The guide recommends:

1. Start with a handful of representative test cases
2. Measure task completion, not just individual step accuracy
3. Use both automated metrics and human review
4. Continuously expand your eval set as you discover failure modes

## Key Takeaway

A reliable agent is built on **clear tools, clear instructions, and clear guardrails** — not on clever prompting tricks. Invest in the fundamentals and iterate based on evaluation.

