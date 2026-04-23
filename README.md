# Portfolio – Florian 

Personal portfolio built to showcase **full‑stack projects**, experiments, and my “creative coding” approach.

## What you’ll find here

- **Home** (`/`): quick intro + shortcuts to sections
- **Work** (`/work`): major projects (e‑commerce/headless, AI, etc.)
- **Experiments** (`/experiments`): prototypes, technical explorations, mini‑projects
- **About** (`/about`): background and context

## Demos (external links)

- **Atelier (headless Shopify + custom storefront)**: `https://atelier-storefront.vercel.app/`
- **AI Image Playground (multimodal image + prompt)**: `https://elite-sport-storefront.vercel.app/`
- **SkandiWall (minimal e‑commerce)**: `https://skandiwall.vercel.app/`
- **Sandbox / experiments**: `https://flobby41.github.io/sandbox/`

## Tech stack

- **Next.js 15** (App Router) + **React**
- **TypeScript**
- **Tailwind CSS**
- **Animation**: Framer Motion, React Spring
- **Code quality**: Biome (lint/format) + TypeScript `--noEmit`

## Run locally

Prerequisites: Node.js + a package manager (npm / pnpm / yarn / bun).

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Useful scripts

```bash
npm run build
npm run start
npm run lint
npm run format
```

## Notes

- Main code lives in `src/app` (pages) and `src/components` (UI).
- Some pages link to external demos (Vercel / GitHub Pages).
