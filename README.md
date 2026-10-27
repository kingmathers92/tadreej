# Tadreej — website

A premium, production-ready website for Tadreej, built with Next.js (App
Router), TypeScript and Tailwind CSS v4.

## Before you launch — read this first

I could not access the real `@tadreej.shop` Instagram profile (it isn't
reachable through automated search/fetch), so **everything below is a
placeholder standing in for the real brand**, built around the literal
meaning of "tadreej" (تدريج = gradation) applied to leather goods. Swap
these out before this goes live:

| What | Where | Notes |
|---|---|---|
| WhatsApp number | `src/lib/config.ts` → `whatsappNumber` | Currently a dummy placeholder. Digits only, international format, no `+`. |
| Instagram handle | `src/lib/config.ts` → `instagramHandle`, `instagramUrl` | Confirm the exact handle. |
| Business email | `src/lib/config.ts` → `email` | Left blank on purpose. |
| City / hours / delivery note | `src/lib/config.ts` | Placeholder hours and a generic Tunisia-wide delivery note. |
| Domain | `src/lib/config.ts` → `url` | Used for SEO metadata, sitemap, canonical URLs. |
| **All products** | `src/lib/products.ts` | Names, prices, descriptions, variants — all invented, in the style of hand-finished leather goods (bags, wallets, book covers). Replace with the real catalogue. |
| **All imagery** | `public/products/`, `public/hero/`, `public/about/`, `public/instagram/`, `public/og-image.svg` | Procedurally generated placeholder art (gradient + simple line icons) — intentionally not fake stock photography. Replace with real product photography at the same file paths and the site updates automatically. See "Swapping in real photos" below. |
| Logo | `src/components/Logo.tsx` | Currently a text wordmark + the gradation swatch mark. Drop in a real logo file if one exists. |
| Copy tone / language | Throughout `src/app/**/page.tsx` | Written in English, in a plain/confident tone. If the real brand voice includes Arabic/French, or a different tone, this needs a pass. |

Nothing about payment, returns policy, or reviews was invented — those
sections either stay generic ("we'll confirm on WhatsApp") or are left out
entirely, per the brief. Confirm and fill those in once you have real
answers.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

This build was verified end-to-end (`npm run build` completes clean, all
17 routes prerender, `tsc --noEmit` and `eslint` both pass with zero
errors).

## Deploying

Any Node host works; Vercel (the maker of Next.js) is the path of least
resistance — connect the repo and it deploys itself, no config needed.

## Swapping in real photos

Every product references an image path like `/products/bag-01.svg`
(see `src/lib/products.ts`). Product photos should be roughly a 4:5
portrait crop. To switch to real photography:

1. Add real photos to `public/products/` (e.g. `bag-01.jpg`).
2. Update the `image` / `gallery` fields in `src/lib/products.ts` to point
   at the new files.

No component code needs to change — `next/image` handles the rest
(resizing, lazy loading, etc.).

## Project structure

- `src/app/` — pages (App Router): home, `/shop`, `/shop/[slug]`, `/about`,
  `/contact`, plus `sitemap.ts` / `robots.ts` for SEO.
- `src/components/` — reusable UI (Header, Footer, ProductCard, Button,
  the gradation-swatch signature mark, etc.).
- `src/lib/config.ts` — every business-specific constant in one place
  (contact info, hours, delivery note, WhatsApp link builder).
- `src/lib/products.ts` — the product catalogue and types.
- `src/app/globals.css` — the full design-token system (colors, radii,
  the gradation ramp) via Tailwind v4's `@theme`.
- `src/fonts/` — self-hosted font files (Fraunces, Public Sans, IBM Plex
  Mono), each under the SIL Open Font License (see `src/fonts/LICENSES/`).
  Self-hosted rather than pulled from Google Fonts at request time, so
  there's no third-party font CDN in the critical path.

## Design system, briefly

- **Ink / Stone / Paper** — the neutral palette (near-black text, warm
  putty background, lighter card surface).
- **The gradation ramp** — five tonal steps from deep umber to pale sand.
  This is the brand's signature device (it's literally what "tadreej"
  means) and shows up as the wordmark mark, section dividers, hover
  underlines and category tags, rather than a single flat accent color.
- **Fraunces** (italic, display headings) + **Public Sans** (body/UI) +
  **IBM Plex Mono** (labels, prices, eyebrows — a nod to price tags and
  receipt printing).

## Ordering flow

There's no payment system, per the brief — every "Order via WhatsApp"
button opens `wa.me` with a pre-filled message naming the product,
variant and quantity. See `whatsappLink()` / `whatsappOrderMessage()` in
`src/lib/config.ts`.
