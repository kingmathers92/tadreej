# Tadreej

Website for **Tadreej** (تدريج), a Tunisian studio making hand-finished leather goods: bags, wallets and book covers, dyed in graduated tone. The word _tadreej_ means "gradation", and that idea runs through the whole design.

The site is bilingual (French and Arabic, with full right-to-left layout), fast, static, and built around one conversion path: customers pick a piece and order it through WhatsApp, with the product, shade and quantity already written into the message. There is no cart or payment system.

- **Pages:** home, shop (filterable by category), product detail, about, contact with FAQ
- **Languages:** French (default, `/fr`) and Arabic (`/ar`)
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, lucide-react
- **Output:** every page is prerendered as static HTML (29 static pages at build time, each page in both languages)

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000, redirects to /fr
```

Other commands:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
npx tsc --noEmit # type-check
```

## Configuration

Business details that don't change by language live in `src/lib/config.ts`:

| Setting                           | Purpose                                                                                                                |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `whatsappNumber`                  | Number every "Order via WhatsApp" button opens. Digits only, international format, no `+` (for example `216XXXXXXXX`). |
| `instagramHandle`, `instagramUrl` | Used in the header, footer, contact page and the Instagram strip.                                                      |
| `url`                             | Production domain. Used for canonical URLs, Open Graph tags and the sitemap.                                           |
| `email`, `address`                | Optional. Empty by default and not shown anywhere until filled in.                                                     |
| `name`, `legalName`               | Brand name. The wordmark always renders in Latin script, in both languages.                                            |

Language-dependent business details (opening hours, delivery note, city) live in the dictionaries under `src/lib/i18n/dictionaries/`, in the `site` block.

## Content

### Products

The catalogue is `src/lib/products.ts`. Each product has a slug, category, price (in dinars), availability, image paths, and a `content` block with its name, descriptions and shade names in both languages:

```ts
{
  slug: "ombre-tote",
  category: "bags",            // "bags" | "wallets" | "covers"
  price: 420,
  bestSeller: true,            // shows on the home page
  available: true,             // false renders the card as sold out
  image: "/products/bag-01.svg",
  gallery: ["/products/bag-01.svg", "/products/bag-01-alt.svg"],
  content: {
    fr: { name: "…", shortDescription: "…", description: "…", variants: ["…"] },
    ar: { name: "…", shortDescription: "…", description: "…", variants: ["…"] },
  },
}
```

Adding a product means adding one entry. Its pages, sitemap entries and "related products" all follow from that. Prices are formatted per locale to three decimals (the millime): `420,000 DT` in French, `420.000 د.ت` in Arabic.

The products, prices and descriptions currently in the file are sample data. Replace them with the real catalogue.

### Images

All imagery is in `public/` (`products/`, `hero/`, `about/`, `instagram/`, plus `og-image.svg`). The images currently there are generated placeholder artwork. To use real photography, add the files to `public/products/` (portrait crops around 4:5 work best) and update the `image` and `gallery` paths in `products.ts`. No component changes are needed; `next/image` handles resizing and lazy loading.

### Copy

All interface text is in two files, `src/lib/i18n/dictionaries/fr.ts` and `ar.ts`. Both are checked against a single `Dictionary` type in `src/lib/i18n/types.ts`, so the build fails if a string exists in one language but not the other.

The copy is written in standard French and Modern Standard Arabic. Have a native speaker read it before publishing, particularly the Arabic.

## Internationalization

- Routes are `/fr/...` and `/ar/...`. Any path without a locale prefix redirects to `/fr/...` (`src/proxy.ts`).
- Arabic pages set `dir="rtl"` on `<html>`. Layout mirrors automatically, using logical Tailwind utilities (`ms-`, `start-`, `-me-`) and `rtl:rotate-180` on directional icons.
- A `:lang(ar)` rule in `globals.css` swaps in Arabic fonts and disables italics, since slanting connected Naskh letterforms breaks them.
- The language switcher keeps the visitor on the same page when switching.
- The sitemap lists both language versions of every URL with `hreflang` alternates.

To add another language: add it to `locales` in `src/lib/i18n/types.ts`, create a dictionary file for it, add a `content` entry for each product, and, if it uses a non-Latin script, load a font for it in `src/app/[locale]/layout.tsx`.

## Ordering flow

Every "Order via WhatsApp" button opens `wa.me/<number>` with a pre-filled message in the visitor's language, naming the product, selected shade and quantity. On product pages the button shows the running total, and on mobile it sits in a sticky bar at the bottom of the screen. The message text is built in `src/lib/i18n/whatsapp.ts`.

## Design system

The tokens are defined in `src/app/globals.css` with Tailwind v4's `@theme`.

- **Palette:** ink, stone and paper as the warm neutral base, plus a five-step ramp from deep umber to pale sand. The ramp is the brand's signature. It appears as the wordmark mark, category dots, section markers, the footer edge and the link-hover underline, instead of as a single accent colour.
- **Type, French pages:** Fraunces (italic display headings), Public Sans (body and UI), IBM Plex Mono (labels, prices).
- **Type, Arabic pages:** Amiri (headings), IBM Plex Sans Arabic (body and UI).
- **Motion:** restrained. Scroll reveals, image zoom on hover, the underline sweep. All of it is disabled under `prefers-reduced-motion`.
- **Accessibility:** skip link, visible focus states, semantic landmarks, labelled controls.

Fonts are self-hosted in `src/fonts/` with their SIL Open Font License files in `src/fonts/LICENSES/`. There is no runtime request to Google Fonts.

## Project structure

```
src/
├── app/
│   ├── [locale]/              # every page, rendered once per language
│   │   ├── layout.tsx         # fonts, <html lang dir>, metadata, header/footer
│   │   ├── page.tsx           # home
│   │   ├── shop/              # listing and [slug] product pages
│   │   ├── about/
│   │   ├── contact/
│   │   └── not-found.tsx
│   ├── globals.css            # design tokens, RTL overrides
│   ├── sitemap.ts, robots.ts, icon.svg
├── proxy.ts                   # locale redirect (Next.js 16's replacement for middleware)
├── components/                # Header, Footer, ProductCard, ProductGrid, ProductGallery,
│                              # ProductActions, ShopBrowser, LanguageSwitcher, MobileMenu,
│                              # Button, SectionHeading, FaqAccordion, InstagramStrip, …
├── lib/
│   ├── config.ts              # business constants, WhatsApp link builder
│   ├── products.ts            # catalogue
│   └── i18n/                  # Dictionary type, fr/ar dictionaries, helpers
└── fonts/                     # self-hosted font files and licenses
public/                        # product, hero, about and Instagram imagery, OG image
```

## Deployment

Any Node host works. On Vercel, import the repository and deploy with the default settings; no environment variables are needed. Before going live, set `url` in `src/lib/config.ts` to the real domain so canonical URLs and the sitemap point at it.
