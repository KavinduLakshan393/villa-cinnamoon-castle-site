# Villa Cinnamoon Castle Website

A photography-led Next.js website for Villa Cinnamoon Castle in Hikkaduwa. The homepage implements the approved Lusion-inspired direction through restrained editorial composition, native scroll storytelling, scene-specific motion, and truthful property photography.

## Experience highlights

- Layered arrival scene built from the authentic exterior photograph and a decorative botanical foreground.
- Editorial property-fact rail with the four primary verified facts.
- Architecture chapter using the garden-gate and balcony photographs.
- Guided five-bedroom sequence on desktop and native horizontal scroll-snap on compact screens.
- Shared-spaces transition expressing the villa's two levels.
- Numbered amenities inventory instead of icon cards.
- Approximate location presentation with an explicit accuracy disclaimer.
- Evening transition that resolves into a stable, motion-free inquiry experience.
- Section-aware header, accessible full-screen menu, editorial gallery, and scoped media cursor.

## Technical foundation

- Next.js App Router
- React and TypeScript
- Server-rendered, indexable property content
- Existing inquiry API, validation, persistence, and optional webhook forwarding
- Responsive `<picture>` delivery for all 21 approved property photographs
- Three motion tiers: `full`, `light`, and `static`
- Native scrolling with no scroll hijacking
- Reduced-motion, keyboard, touch, and JavaScript-failure fallbacks

## Requirements

- Node.js 20 or newer
- A normal npm registry connection for dependency installation

## Local development

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:4173`.

## Verification

Run the dependency-independent source and behavior suite:

```bash
npm run check
npm run build:verify
```

Run the framework production build after dependencies are installed:

```bash
npm run build
```

The included suite contains 26 tests covering inquiry validation, media integrity, motion calculations, narrative order, reduced-motion behavior, navigation accessibility, gallery contracts, and scoped cursor behavior.

## Production

```bash
npm ci
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the public origin before building production metadata.

## Inquiry delivery

Successful inquiries are stored in `data/inquiries.ndjson`, which is excluded from version control. Set `INQUIRY_WEBHOOK_URL` to forward each normalized record to an approved workflow. Inquiry responses never claim that a booking is confirmed.

## Project structure

```text
src/
├── app/                    # Public routes, homepage composition, and API handlers
├── components/
│   ├── arrival/            # Layered arrival scene
│   ├── motion/             # Motion provider and reveal enhancement
│   ├── rooms/              # Desktop/mobile room sequence
│   └── ...                 # Editorial chapters and shared UI
├── content/                # Typed property and media records
├── hooks/                  # Scroll, pointer, visibility, and motion-tier hooks
└── lib/                    # Motion math, metadata, and inquiry rules
public/
├── assets/css/             # Design system and responsive presentation
└── assets/images/          # Originals, optimized variants, and decorative artwork
tests/                      # Node-based verification suite
scripts/                    # Offline type, lint, verification, and QA-preview tools
docs/                       # Implementation, motion, traceability, and QA records
```

## Accuracy guardrails

The site does not claim that the property is beachfront, fully air-conditioned, equipped with a pool, highly rated, instantly bookable, or confirmed to have smoke and carbon-monoxide alarms. Public contact details, rates, exact coordinates, journey times, detailed policies, and reviews remain omitted until approved.
