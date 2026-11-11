# ADR-0002: Host on GitHub Pages from a public repo

Status: accepted (the founder asked for it, 2026-11-11)
Date: 2026-11-11

## Context
The site is static ([ADR-0001](0001-astro-static-site.md)) and needs a public URL. The founder asked for GitHub Pages, with the repo made public.

## Options
- **GitHub Pages, public repo, deployed by GitHub Actions.** Free, and every push to `main` deploys. Costs: the source is public, and the site is served under `/private-trade-review/` until a custom domain is set.
- **GitHub Pages from a private repo.** Needs a paid GitHub plan.
- **Another static host (Netlify, Cloudflare Pages).** Works from a private repo for free. Costs another account and service.

## Decision
GitHub Pages from the public repo, built by `.github/workflows/deploy.yml` on every push to `main`.

## Why
It's what the founder chose, it costs nothing, and the source holds no secrets or client data ([P2](../00-principles.md#p2-no-client-data-in-the-repo)).

## Consequences
- Internal links go through `import.meta.env.BASE_URL`, because the site lives under `/private-trade-review/`.
- Anything committed is public at once. P2 matters more now.
- Razorpay Checkout would need a server, which Pages can't run. Payment Links still work.

## Assumptions
- A1 (written consent for Case 001) is still unverified, and the sample is now public. See [assumptions.md](../assumptions.md#a1).

## Revisit when
A custom domain is bought (set `site`, drop `base`), or payments need a server.
