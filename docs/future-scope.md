# Future scope

What a full build of the site would need beyond the current mockup, in plain language for the Collaborative's leadership. Claude adds to this list instead of building out-of-scope features; see "Scope: this is a mockup" in CLAUDE.md.

Each item: what it is, why it matters, and what it would take.

---

## Working story submissions for The Archivist
- **What:** the "Submit a Story" form actually sending submissions to the editorial team.
- **Why:** it's how the community helps build the archive.
- **What it would take:** a secure place to store submissions (separate from the public site), a privacy policy and retention policy, a decision on who reviews submissions, and someone to maintain it. Submissions may include sensitive personal stories, so this needs care.

## Connecting the content system (Sanity) to the live site
- **What:** Archivist entries edited in Sanity Studio appearing on the site automatically.
- **Why:** lets the team publish stories without touching code.
- **What it would take:** a private Sanity dataset, a read token stored in Cloudflare's build settings, a deploy hook so publishing triggers a rebuild, and ongoing upkeep of the Studio.
- **Bandwidth safeguards (required before connecting):** Sanity's Free plan has a hard 100 GB/month bandwidth cap. When it runs out, images from `cdn.sanity.io` stop loading and builds fail until the 1st of the month; only the paid Growth plan bills for overage instead. Another Astro + Sanity + Cloudflare site went down this way because its own test and audit automation re-downloaded every image dozens of times a week. Before going live:
  - Serve Sanity images through Cloudflare: a small Worker route (this site runs on Cloudflare Workers, not Pages, so this means a Worker script with `"main"` and `run_worker_first` for `/img/*` in `wrangler.jsonc`) that fetches from `cdn.sanity.io`, caches successful responses for a year (Sanity image URLs change when the image changes), never caches errors, allows only this project's own `images/<projectId>/<dataset>/` paths, and sends a fixed `Accept` header. A build step rewrites `cdn.sanity.io` URLs in the HTML to `/img/`, leaving social-preview image tags absolute. Cloudflare's cache is per location; R2 storage would make it permanent.
  - Keep automation off real images: no scheduled jobs that download images; any browser tests use placeholder images and block service workers; a CI check fails the build if a workflow breaks either rule.
  - Watch usage at sanity.io/manage. The Free plan gives no warning before it blocks; on Growth, set a $0 spending alert.
  - If it's ever blocked: upgrade to Growth so overage is billed, deploy the fix, then downgrade on or just after the 1st (a mid-month downgrade prorates the quota).

## Branch preview links
- **What:** a private test link for each set of changes before it goes live.
- **Why:** makes it easier for non-developers to review changes.
- **What it would take:** fixing Cloudflare's preview build settings from a desktop browser (they kept failing in October 2026 and were turned off). Low cost if someone with Cloudflare access has an hour.

## Own domain name
- **What:** a proper web address instead of `ncrj.rumeaudesign.workers.dev`.
- **What it would take:** choosing and buying a domain (about $10–15/year), then connecting it in Cloudflare. Best done once the organization's name is settled.

## Moving accounts to the organization
- **What:** the GitHub repository and Cloudflare account currently belong to a volunteer's personal accounts.
- **Why:** the organization's website shouldn't depend on one person's logins.
- **What it would take:** a GitHub organization and a Cloudflare account owned by the Collaborative, with current contributors added as members.
