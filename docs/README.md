# Private Trade Review: design pack

Status: **Draft for review** (2026-11-11).

## The one rule

**The site describes a trader's record. It never recommends a trade, a strategy or a position size.** Every line of copy, and every number on the sample, is held to that rule. The founder isn't registered with SEBI as an investment adviser or research analyst.

## Reading order

| Doc | What it holds | Status |
|---|---|---|
| This file | The rule, the pages, questions for the review, glossary | Draft for review |
| [00-principles.md](00-principles.md) | The rules the site obeys | Draft for review |
| [assumptions.md](assumptions.md) | What the site takes as true without evidence | Draft for review |
| [decisions/](decisions/README.md) | Decision records | See index |

## What the site is

Two static pages, ported unchanged in look and copy from the claude.ai drafts of 2026-11-11 (landing page v6, sample v2):

- **Landing page** (`/`): what a review finds, the open method, how it works, privacy, what it isn't, the founding offer, FAQ.
- **Sample review** (`/sample`): Case 001. Every figure was computed from the trader's own export. The raw export is **not** in this repo, and must never be committed ([P2](00-principles.md#p2-no-client-data-in-the-repo)).

Prices live in one place: the `PRICES` object in `src/pages/index.astro`.

## Questions for the review

1. **Payments: Razorpay Payment Links or Razorpay Checkout?** Payment Links need no server and keep the site static. Checkout needs a server route for orders and signature checks, which means an Astro server adapter and a host that runs it ([ADR-0001](decisions/0001-astro-static-site.md#revisit-when)). It decides the hosting.
2. **International payments.** Which provider for $ cards, and the GST/FEMA handling for them. A lawyer or CA should answer the tax part.
3. **Domain and contact email.** `hello@tracktions.com` on the page is a placeholder.
4. **Hosting.** Undecided. Any static host serves `dist/`.
5. **Founding offer terms.** $149 and the 11 Dec 2026 deadline were set without evidence ([A2](assumptions.md#a2)).
6. **Legal review of the copy,** and the employment-contract check, before the site is public.

## Open items

- [assumptions.md](assumptions.md): A1–A3 are unverified.

## Glossary

- **Review**: one trader's full trade history measured and written up, with a one-hour walkthrough call.
- **Founding review**: one of the first three reviews, at half the list price, in return for a testimonial and permission to publish anonymised findings.
- **1R**: the risk unit a trade's result is divided by. It's the trader's recorded original stop where one exists. Otherwise it's their stated rule, or else the strategy's average net loss, marked as such. Case 001 uses average net loss for every strategy, because only trailing stops were used.
- **Orphaned position**: the label Case 001's own system log gives to a position the strategy no longer managed, closed by the end-of-day safety sweep.
- **Free file check**: counting a prospect's closed trades and strategies before payment, to confirm the data can support a review.
