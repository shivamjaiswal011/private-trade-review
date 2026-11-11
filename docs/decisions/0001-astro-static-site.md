# ADR-0001: Astro, static output

Status: accepted (the founder asked for Astro, 2026-11-11)
Date: 2026-11-11

## Context
The landing page and the sample review exist as two self-contained HTML drafts. They need a repo of their own, a build that can be hosted anywhere, and room to add Razorpay payments later.

## Options
- **Astro, static output.** Pages stay plain HTML and CSS. A shared layout removes the duplicated head. A server adapter can be added later without a rewrite. Costs a Node toolchain.
- **Plain HTML files.** No build at all. Costs duplicated markup, and there's no path to server routes for payments.
- **Next.js.** Good at server routes. Costs a React runtime and a framework far larger than two pages of copy need.

## Decision
Astro with its default static output. Each page keeps its own styles and script as global, unscoped CSS and plain scripts, so the look matches the drafts exactly.

## Why
It keeps the pages byte-for-byte close to the approved drafts today, and it is the cheapest framework that can grow a payment route later.

## Consequences
- `npm run build` produces `dist/`, which any static host can serve.
- The two pages each carry their own CSS tokens, copied from the drafts. That's duplication, accepted to keep them identical to the drafts for now.
- Razorpay Checkout would need `@astrojs/node` or a host adapter, plus a secret key.

## Assumptions
None beyond the open payment question.

## Revisit when
Payments are added through Razorpay Checkout (needs a server), or a third page needs the same styles (move the shared tokens into the layout).
