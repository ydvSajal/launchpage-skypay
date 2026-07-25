# SkyPay Landing

Crypto payment gateway landing page. Next.js 16 App Router, TypeScript, Tailwind v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — assembles the page from `src/components/landing/*`
- `src/components/landing/hero.tsx` — nav, cursor-follow glow, word cycle, waitlist form, chain marquee
- `src/components/landing/stats-section.tsx` — count-up stats card + feature cards
- `src/components/landing/product-stack.tsx` — 4-tab product panel
- `src/components/landing/faq.tsx` — accordion
- `src/components/landing/reveal.tsx` — shared scroll-reveal wrapper (IntersectionObserver)

No backend. The waitlist form is local UI state only, there's no email capture wired up yet.

## Build

```bash
npm run build
npm run lint
```
