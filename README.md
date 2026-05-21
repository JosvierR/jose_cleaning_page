# Maison Clean NYC

Cinematic luxury landing page for premium restaurant cleaning in Bronx / NYC.

## Run

```bash
npm install
npm run dev
```

## Brand

- **Maison Clean NYC** — porcelain, navy, ice-blue editorial aesthetic
- Rolls-Royce-inspired pacing: full-screen sections, minimal copy, slow motion
- Not a SaaS dashboard — no fake metrics, testimonials, or certifications

## Stack

Next.js 16 · TypeScript · Tailwind v4 · Framer Motion · GSAP ScrollTrigger · Lenis · SplitType · React Hook Form + Zod

## Customize

| File | Purpose |
|------|---------|
| `src/lib/site-data.ts` | Copy, pricing, FAQ, services |
| `src/lib/images.ts` | Image URLs — swap to `/images/*.jpg` when local files exist |
| `src/lib/seo.ts` | Metadata |
| `src/components/quote-form.tsx` | Form submit → API / Formspree / Resend |

## Local images

Place files in `public/images/`:

- `hero-kitchen.jpg`, `dining-room.jpg`, `stainless-detail.jpg`, `restroom-clean.jpg`, `floor-reflection.jpg`, `bakery-counter.jpg`, `before-kitchen.jpg`, `after-kitchen.jpg`

Update `imageSrc()` in `src/lib/images.ts` to return `images[key].local` when files are present.

## Build

```bash
npm run build
npm start
```

## Deploy en Netlify

El proyecto incluye `netlify.toml` y `@netlify/plugin-nextjs` para Next.js 16 (App Router).

### 1. Subir el código a GitHub

```bash
git add .
git commit -m "Maison Clean NYC — listo para Netlify"
git push origin main
```

### 2. Crear el sitio en Netlify

1. Entra en [https://app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import an existing project**
3. Elige **GitHub** y el repo `JosvierR/jose_cleaning_page`
4. Netlify leerá `netlify.toml` automáticamente:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (el plugin se encarga del runtime)
   - **Node:** 20
5. Clic en **Deploy site**

No uses “drag & drop” de la carpeta: Next.js necesita el build en los servidores de Netlify.

### 3. Comprobar el deploy

- El build debe terminar en verde (2–4 min la primera vez).
- Abre la URL `https://tu-sitio.netlify.app`
- Si falla, revisa **Deploy log** → suele ser Node &lt; 20 o dependencias sin instalar.

### 4. Dominio propio (opcional)

**Domain settings** → **Add custom domain** → sigue los pasos DNS de Netlify.

### Variables de entorno

Este sitio no requiere `.env` para funcionar. Cuando conectes el formulario (Formspree, Resend, etc.), añade las claves en **Site settings → Environment variables**.
