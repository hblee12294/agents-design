---
title: "User Interface Wiki — 152 Rules for UI/UX Code Review"
slug: ui-wiki-code-review-rules
summary: "A comprehensive skill containing 152 prioritized rules across 12 categories for reviewing web interface implementations, from animation principles and timing functions to UX laws and visual design, each with incorrect vs. correct code examples."
author: raphael-salaja
date: "2026-03-01"
originalUrl: https://github.com/raphaelsalaja/userinterface-wiki/tree/256a954080c8bcf1b1ceb1e2a4079d1f24cf593a/skills
topic: Skills
tags:
  - best practices
  - tool use
  - prompt engineering
---

## Overview

Most UI code review feedback is subjective and inconsistent. This skill solves that by codifying 152 concrete rules across 12 categories — each with a rationale, an incorrect example, and a correct implementation. Designed as a reusable skill for Claude Code, it gives agents a structured rubric for evaluating web interface quality across animation, timing, CSS, audio, typography, UX principles, and visual design.

## Priority-Based Rule Organization

Rules are organized by implementation impact into four priority tiers:

- **CRITICAL** — Animation Principles (12 rules): Disney-inspired principles adapted for web, including the 300ms constraint for user-initiated animations and proper staging techniques
- **HIGH** — Timing Functions (16 rules), Exit Animations (12 rules), Laws of UX (23 rules), Visual Design (9 rules): Core patterns like spring vs. easing selection, AnimatePresence usage, cognitive psychology principles (Fitts's Law, Hick's Law), and layered shadow techniques
- **MEDIUM** — CSS Pseudo Elements (15 rules), Audio Feedback (14 rules), Sound Synthesis (13 rules), Container Animation (7 rules), Predictive Prefetching (6 rules), Typography (16 rules): Specialized techniques for decorative elements, accessible sound design, Web Audio API, dynamic sizing, trajectory-based loading, and OpenType features
- **LOW** — Morphing Icons (9 rules): SVG icon morphing patterns using three-line techniques

## Rule Structure and Actionability

Each rule follows a consistent format: a prefix-based naming convention (e.g., `timing-`, `spring-`, `ux-`), a rationale explaining why it matters, an incorrect code example showing the common mistake, and a correct implementation showing the fix. This before/after pattern makes rules immediately actionable — a reviewer can point to the specific rule and the developer can see exactly what to change.

## Accessibility as a First-Class Concern

Accessibility runs throughout the ruleset rather than being siloed. The audio feedback rules require `prefers-reduced-motion` respect. Animation rules enforce completion constraints that prevent motion sickness triggers. Typography rules cover proper text rendering for readability. This integrated approach ensures accessibility isn't an afterthought.

## Key Takeaway

Codifying subjective UI quality into numbered, prioritized rules with before/after code examples transforms inconsistent code review feedback into a repeatable, teachable rubric that both humans and AI agents can apply systematically.
