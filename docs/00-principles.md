# Principles

## P1. Describe, never advise
**Rule.** No page recommends a security, a trade, a strategy or a position size. Findings are stated as what the record shows.
**Why.** The founder isn't SEBI-registered. SEBI's December 2025 action against an unregistered "mentorship" business impounded ₹546 crore (figure from research done on 2026-11-11). The first draft of Case 001 had a "suggested sizing" section, and it was removed for this reason.
**Alternative.** Register as a research analyst and give advice. Rejected for now: it needs certification and registration the founder doesn't have.
**Cost.** Some buyers read "no advice" as "no answers". The copy has to explain why the description alone is worth paying for.

## P2. No client data in the repo
**Rule.** No raw trade file, name, account number or instrument-level record is ever committed. Only the anonymised, aggregated figures that appear on a page are allowed.
**Why.** The privacy promise on the landing page ("analysed on a local machine", "deleted after 30 days") is broken the moment a file is in git history, private repo or not.
**Alternative.** Keep the raw files in a private repo. Rejected: git history is permanent, and the repo may be shared with collaborators or a host.
**Cost.** You can't rebuild the sample's figures from the repo alone. The script and the raw file stay on the founder's machine.

## P3. Static until payments need a server
**Rule.** The site is static HTML. A server is added only when a feature can't work without one.
**Why.** Two pages of copy don't need a runtime. See [ADR-0001](decisions/0001-astro-static-site.md).
**Alternative.** Server-render from the start. Rejected: it adds a host and failure modes for nothing today.
**Cost.** Razorpay Checkout, if chosen, will need an adapter added later.

## P4. Every published number carries its source
**Rule.** Each figure on the sample page must trace back to the trader's export, through the computation kept with the raw file. A figure that can't be recomputed is removed.
**Why.** The first draft of Case 001 had wrong R figures and a wrong target count. Both were found by recomputing from the raw file.
**Alternative.** Trust figures copied from an earlier report. Rejected for that reason.
**Cost.** Every change to a figure needs a rerun of the computation.
