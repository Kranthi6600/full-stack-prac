# FULL STACK DEVELOPER (Node.js + React) — PREPARATION ROADMAP

Target: **"I can independently design, build, debug, optimize and deploy a production-level full-stack application — and explain my decisions in an interview."**

Interview standard throughout: explain **WHY** things work, not just write syntax.

---

## Phase 0 — Git (start day 1, use throughout)

- [ ] Git + GitHub
- [ ] Branching
- [ ] Pull requests
- [ ] Merge / rebase basics
- [ ] Commit every practice project as you learn

## Phase 1 — JavaScript + TypeScript (must be VERY strong)

- [x] Scope
- [x] Closures
- [x] Hoisting
- [x] `this` keyword
- [x] Prototypes
- [x] Event loop
- [x] Promises
- [x] async/await
- [x] Callbacks
- [x] Microtasks & macrotasks
- [x] Destructuring
- [x] Spread/rest operators
- [x] map/filter/reduce
- [x] Higher-order functions
- [ ] ES6+ features (remaining bits)
- [ ] Modules (ESM vs CommonJS)
- [ ] Debouncing / throttling
- [ ] Error handling
- [ ] Memory concepts
- [ ] **TypeScript** — types, interfaces, generics, narrowing, utility types (mandatory for modern Node/React roles; you already write `.ts`)

**Bar to pass before moving on:** predict event-loop/async output cold, explain "why," and build a small JS project end-to-end.

## Phase 2 — React (must be VERY strong)

- [ ] Components, props, state
- [ ] useState, useEffect, useRef
- [ ] useContext, useReducer
- [ ] useMemo, useCallback
- [ ] Custom hooks
- [ ] Forms & validation
- [ ] API integration + loading/error states
- [ ] React Router (incl. protected routes)
- [ ] Authentication flows
- [ ] Pagination, filtering, search
- [ ] Rendering & reconciliation, performance optimization
- [ ] TanStack Query
- [ ] Redux Toolkit or Zustand
- [ ] Component architecture, reusable components
- [ ] React Testing Library
- [ ] SSR / CSR / SSG, Next.js basics

**Bar:** receive a feature requirement → build it independently.

## Phase 3 — Node.js + Express (production level)

- [x] Node.js runtime
- [x] Event loop
- [ ] Node fundamentals: fs, path, process, streams, EventEmitter, env vars
- [ ] Express basics → middleware
- [ ] Routing → controllers → services
- [ ] REST APIs (design + versioning)
- [ ] Input validation
- [ ] Async error handling + error-handling middleware
- [ ] File uploads
- [ ] CORS
- [ ] Rate limiting
- [ ] Logging
- [ ] Pagination
- [ ] WebSockets (realtime basics)

## Phase 4 — SQL / PostgreSQL + ORM

- [ ] SELECT, WHERE, ORDER BY, LIMIT
- [ ] JOINs (INNER vs LEFT — know the difference cold)
- [ ] GROUP BY, HAVING
- [ ] Subqueries, CTEs
- [ ] Window functions
- [ ] Primary/foreign keys, constraints
- [ ] Indexes — how they work, when NOT to use them
- [ ] Transactions, ACID, isolation levels
- [ ] Normalization
- [ ] Query optimization — why queries become slow
- [ ] **Prisma** (SQL first, ORM second): migrations, relations, transactions

## Phase 5 — Authentication & Security

Build one complete auth system end to end:

Register → hash password → login → access + refresh tokens → protected API

- [ ] bcrypt / password hashing
- [ ] JWT (access tokens)
- [ ] Refresh tokens
- [ ] HTTP-only cookies
- [ ] Authentication vs Authorization
- [ ] Role-based access control (RBAC)
- [ ] XSS, CSRF, SQL injection
- [ ] CORS, rate limiting, input validation
- [ ] OAuth basics
- [ ] API security checklist

## Phase 6 — Backend Architecture

Understand the flow:

```
Routes → Controllers → Services → Repositories → Database
```

- [ ] SOLID principles
- [ ] DRY, separation of concerns, clean code
- [ ] Design patterns (common ones)
- [ ] API versioning
- [ ] Scalability basics
- [ ] Project structure

## Phase 7 — Testing

- [ ] Vitest/Jest basics (unit tests)
- [ ] Supertest — API/integration tests for Express
- [ ] Testing async code, mocking
- [ ] "How do you test this?" — be able to answer in interviews

## Phase 8 — Deployment & DevOps

- [ ] Linux basics
- [ ] Environment variables (done early, used everywhere)
- [ ] Docker basics
- [ ] CI/CD basics
- [ ] Nginx basics
- [ ] DNS, HTTPS
- [ ] Logs + production debugging
- [ ] Basics of: Vercel, AWS

## Parallel track — DSA (30–60 min/day alongside everything)

- [ ] Arrays, strings
- [ ] Hash maps, sets
- [ ] Two pointers, sliding window
- [ ] Stack, queue, linked lists
- [ ] Binary search
- [ ] Recursion
- [ ] Trees basics
- [ ] Sorting
- [ ] Big-O

**Target:** 100–150 quality problems, not hundreds randomly.

## Phase 9 — System Design

Practice designing: e-commerce, ticket booking, food delivery, URL shortener, chat app.

- [ ] Load balancing
- [ ] Caching, Redis
- [ ] Database indexing, replication
- [ ] Queues, workers
- [ ] CDN
- [ ] Rate limiting
- [ ] Horizontal vs vertical scaling
- [ ] Distributed systems basics

## Phase 10 — Capstone: E-COMMERCE PLATFORM

**Not another todo app.** React/Next.js frontend, Node/Express backend, PostgreSQL + Prisma.

- [ ] Auth + authorization + RBAC
- [ ] Admin dashboard
- [ ] Product management, cart, orders
- [ ] Payments
- [ ] Search, filtering, pagination
- [ ] File uploads
- [ ] Email notifications
- [ ] Error handling, logging
- [ ] Redis caching
- [ ] Tests
- [ ] Docker + production deployment

## Phase 11 — Specialization: RAG / LLMs

- [ ] Python basics
- [ ] LLM APIs
- [ ] Embeddings, vector search
- [ ] Hybrid retrieval, reranking, evaluation
- [ ] RAG → LLMOps (secure production AI)

---

## Rules that matter more than the list

1. **Build a small project after every phase** — a mini API after Express, an auth flow after JWT. The capstone works only if each phase shipped something real.
2. **DSA runs in parallel**, never as a dedicated phase — it won't happen otherwise.
3. **Git from day 1** — commit practice work as you go.
4. **SQL before ORM** — Prisma is a convenience, not a substitute.

## Target skill levels

| Skill | Target |
|---|---|
| JavaScript / TypeScript | ★★★★★ |
| React | ★★★★★ |
| Node.js / Express | ★★★★★ |
| REST APIs | ★★★★★ |
| Auth | ★★★★★ |
| PostgreSQL / SQL | ★★★★ |
| Git | ★★★★ |
| DSA | ★★★★ |
| System Design | ★★★ |
| Docker | ★★★ |
| AWS | ★★ |
