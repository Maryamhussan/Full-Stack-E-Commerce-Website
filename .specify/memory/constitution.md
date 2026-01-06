<!--
Sync Impact Report: Constitution Update
Version change: N/A → 1.0.0
Modified principles: None (initial creation)
Added sections: All principles and sections (initial constitution creation)
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md ✅ needs Constitution Check section update
- .specify/templates/spec-template.md ✅ no direct updates needed
- .specify/templates/tasks-template.md ✅ no direct updates needed
- .specify/templates/phr-template.prompt.md ✅ no direct updates needed
Runtime docs requiring updates:
- CLAUDE.md ✅ references constitution but no specific updates needed
Follow-up TODOs: None
-->
# Full-Stack E-Commerce Website (Portfolio Project) Constitution

## Core Principles

### Specification First
All behavior must be defined in specifications before implementation.

### Traceability
Every UI component, API endpoint, and data model must trace back to a written spec.

### Clarity for Reviewers
Specifications must be readable by developers with a computer science background.

### Reproducibility
The project must be buildable from scratch using only the specs and repository contents.

### Rigor
No undocumented assumptions, implicit behavior, or speculative features are allowed.

### Cost Consciousness
All tools, libraries, services, and platforms must be free tier. No paid APIs or subscriptions are permitted.

## Key Standards
All implemented features must correspond to an explicit spec. No code may introduce behavior not defined in `/specs`. Figma is a visual reference only, not a behavioral authority. Types, schemas, and APIs must be derived from specs. Each feature spec must define: Inputs, Behavior, Outputs, Edge cases, Constraints.

## Development Workflow
Technology: Frontend: Next.js + TypeScript, Backend: Next.js API Routes, Database: SQLite (local) and free-tier PostgreSQL, Authentication: Free authentication methods only, Payments: Stripe test mode only (no real transactions). Development Method: Spec-Driven Development (SDD), No implementation before specification approval.

## Governance
Specification Requirements: Specs must be written in Markdown, Specs must reside exclusively in `/specs`, Each feature must have its own spec file, Data models must be specified before database schemas, Error handling behavior must be explicitly documented. Non-Goals: Production-grade scalability, Real payment processing, Refunds or financial reconciliation, Admin dashboards (reserved for future phase), Performance optimization beyond reasonable defaults.

**Version**: 1.0.0 | **Ratified**: 2026-01-07 | **Last Amended**: 2026-01-07