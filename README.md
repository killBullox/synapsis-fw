# Synapsis FW — Sito vetrina

Sito ufficiale di Synapsis FW. One-page B2B in italiano e inglese, stile agency.

## Stack

- **Astro 5** — static site, performance top, zero JS by default
- **Tailwind CSS 4** — design tokens CSS-based
- **GSAP + Lenis** — animazioni e smooth scroll (desktop only)
- **TypeScript strict**
- **i18n IT/EN** — IT default, EN su `/en/`
- **Fraunces + Inter** via Google Fonts

## Comandi

```bash
npm install
npm run dev       # dev server su http://localhost:4321
npm run build     # build produzione in dist/
npm run preview   # preview build locale
```

## Struttura

```
src/
├── components/         componenti riutilizzabili (Header, Footer, CookieBanner)
│   └── sections/       sezioni della home (Hero, ecc.)
├── i18n/               dizionari IT/EN + utils
├── layouts/            Layout.astro (head, SEO, scripts globali)
├── pages/              index.astro (IT) + en/index.astro (EN)
└── styles/             global.css (Tailwind + design tokens)

public/
├── logo.svg            logo completo
├── favicon.svg         icona quadrata (solo simbolo)
└── video/              video di sfondo hero (hero.mp4 + hero-poster.jpg)
```

## Asset da aggiungere in `/public`

- `video/hero.mp4` — video di sfondo dell'hero (consigliato: 720p, H.264, ≤5MB)
- `video/hero.webm` — versione WebM più leggera (opzionale ma consigliata)
- `video/hero-poster.jpg` — frame statico di fallback
- `og-image.jpg` — immagine social 1200×630
- `apple-touch-icon.png` — 180×180

## Mobile

- Video con `muted + playsinline + autoplay` per iOS
- Lenis smooth scroll **disattivato** su mobile (momentum nativo)
- Cursor custom solo desktop
- Safe-area insets per notch iOS
- Rispetta `prefers-reduced-motion`

## Deploy

Vercel: connetti il repo, build command `npm run build`, output `dist/`.
