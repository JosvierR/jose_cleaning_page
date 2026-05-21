# Bronx Restaurant Cleaning Co. — Premium Landing Page

Luxury single-page marketing site for a Bronx/NYC commercial restaurant cleaning service.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Framer Motion, GSAP (hero glow), Lenis (smooth scroll)
- React Hook Form + Zod (walkthrough form)
- Embla Carousel (before/after), react-countup (metrics)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — layout, page, global styles, SEO metadata
- `src/components/` — all landing sections
- `src/lib/site-data.ts` — copy, services, pricing, FAQ (edit here)
- `src/lib/form-schema.ts` — Zod validation for quote form

## Customization

1. **Brand & contact** — `src/lib/site-data.ts` (`brand.phone`, `brand.email`)
2. **Pricing** — `pricingPlans` in `site-data.ts`
3. **Before/after photos** — replace placeholders in `before-after-section.tsx` with `next/image`
4. **Form backend** — `contact-form.tsx` `onSubmit` (console.log today; wire to Formspree, Resend, etc.)

## Sections

Hero, trust bar, problem, services, before/after proof, process, pricing, materials, metrics, industries, local SEO, owner concerns, FAQ, contact form, footer — plus sticky mobile CTA and floating phone button.
