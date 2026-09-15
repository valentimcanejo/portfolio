# Portfolio — Rômulo Valentim

Personal portfolio, rebuilt as a bilingual (EN/PT) Next.js site.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based theme in `src/app/globals.css`)
- [next-intl](https://next-intl.dev) for i18n routing (`/en`, `/pt`)
- Deployed on Vercel

## Getting started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en` or `/pt` based on browser language.

## Editing content

All resume-facing content lives in `src/content/`, not in the components:

- `src/content/en/profile.ts`, `src/content/pt/profile.ts` — name, bio, contact, socials.
- `src/content/en/projects.ts`, `src/content/pt/projects.ts` — one entry per featured project. Entries with `pending: true` have a real, GitHub-confirmed tech stack but a placeholder `summary` ("Description pending…") — replace the summary (and add `notes` for a longer case-study write-up) once you've written the real one.
- `src/content/en/experience.ts`, `src/content/pt/experience.ts` — work/education timeline. Currently only seeded with what's publicly confirmed on GitHub; add real dates and any earlier roles.
- `src/content/skills.ts` — shared across locales (tool names aren't translated).

UI copy (nav labels, section headings, buttons) lives in `messages/en.json` and `messages/pt.json`.

Still missing, add these yourself:

- `public/cv-en.pdf` and `public/cv-pt.pdf` — the Contact section's résumé buttons link here; the files don't exist yet.
- The real domain in `NEXT_PUBLIC_SITE_URL` (used by `src/app/sitemap.ts` / `robots.ts`) once deployed.

## Design concept

The site's signature element is the "exploded stack" diagram in the hero — four bands (Interface / Application / Data / Infra) that double as a legend for the layer tags on every project card, and as the filter in the Projects section.

## Deploy

Push to `main` and import the repo on [Vercel](https://vercel.com/new) — no environment variables are required beyond the optional `NEXT_PUBLIC_SITE_URL` above.
