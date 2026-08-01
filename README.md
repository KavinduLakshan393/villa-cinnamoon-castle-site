# Villa Cinnamoon Castle Website

A server-rendered React application for Villa Cinnamoon Castle, rebuilt from the approved static reference while preserving its photography, content, responsive layouts, accessibility behavior, and lightweight 2.5D parallax experience.

## Included

- Nine public routes rendered through the Next.js App Router.
- TypeScript content, components, API contracts, and validation.
- The original responsive CSS design system and all 21 authentic photographs.
- Request-animation-frame parallax with native scrolling and reduced-motion fallbacks.
- Accessible gallery filtering, modal lightbox, keyboard controls, and swipe navigation.
- Inquiry form with client and server validation.
- Server-side inquiry persistence, rate limiting, honeypot protection, and optional webhook forwarding.
- Per-route metadata, canonical URLs, social preview image, sitemap, robots file, and web manifest.
- Vitest and Testing Library coverage for inquiry and gallery behavior.

## Requirements

- Node.js 20 or newer.

## Local development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4173`.

## Verification

```bash
npm run check
npm run build
```

## Production

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the public origin before building production metadata.

## Inquiry delivery

Successful inquiries are stored in `data/inquiries.ndjson`, which is excluded from Git. Set `INQUIRY_WEBHOOK_URL` to forward each normalized record to an approved workflow. Inquiry responses never claim that a booking is confirmed.

## Structure

```text
src/
├── app/            # Public routes and server API handlers
├── components/     # Shared layout and interactive React components
├── content/        # Typed property-media records
├── lib/            # Metadata and inquiry domain rules
└── tests/          # Unit and component tests
public/
├── assets/css/     # Preserved reference design system
├── assets/images/  # Originals and responsive WebP derivatives
├── favicon.svg
├── robots.txt
├── site.webmanifest
└── sitemap.xml
```

## Accuracy guardrails

The application does not claim that the property is beachfront, fully air-conditioned, equipped with a pool, highly rated, instantly bookable, or confirmed to have smoke and carbon-monoxide alarms. Public phone numbers, email addresses, rates, exact coordinates, journey times, policies, and reviews remain omitted until approved.
