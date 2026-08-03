# Implementation Notes

## Architecture

The site uses React, TypeScript, and the Next.js App Router. Core property routes remain server-rendered and indexable, while interactive enhancements are isolated in focused client components. Inquiry and health endpoints retain the existing Node.js server runtime behavior.

The homepage is composed in the approved order:

1. Arrival scene
2. Editorial fact rail
3. Architecture chapter
4. Five-bedroom sequence
5. Shared-spaces chapter
6. Amenities inventory
7. Approximate location
8. Practical disclosures
9. Evening transition
10. Inquiry

## Design system

The implementation uses Inter Variable for both display and body typography, with separate display, heading, body, and utility-label treatments. The palette is restricted to warm light, white, and near-black principal surfaces with cinnamon and tropical green accents.

Primary controls are rectangular or minimally rounded. Pill buttons, circular amenity-icon cards, and the former purple-grey editorial panel have been removed from the homepage system.

## Motion architecture

Motion is owned by the section that uses it instead of by a global animation controller.

- `MotionProvider.tsx` supplies the shared `full`, `light`, or `static` tier.
- `useScrollProgress.ts` writes normalized, clamped progress without React state updates per frame.
- `usePointerDrift.ts` provides bounded pointer movement on fine-pointer desktop devices only.
- `MotionController.tsx` now handles only generic reveal enhancement and mobile inquiry visibility.
- `CustomCursor.tsx` activates only on explicit `[data-cursor]` media targets.

All scene animation uses native reversible scrolling. Offscreen and hidden-document work is paused, and reduced-motion mode removes pinned scenes, pointer drift, custom cursor behavior, and non-essential transitions.

## Arrival scene

`src/components/arrival/ArrivalScene.tsx` uses:

- the authentic `01_hero_exterior_day.jpg` as the factual property layer;
- a decorative alpha WebP foliage frame as foreground artwork;
- crop expansion, shallow scale, and bounded pointer drift;
- concise copy and a direct anchor to the property facts.

The decorative foreground contains no factual property representation and is omitted or simplified on constrained layouts.

## Room sequence

`src/components/rooms/RoomSequence.tsx` preserves one semantic room list while providing two presentations:

- desktop: sticky chapter progression, controlled crossfades, shallow crop changes, and an `01 / 05` counter;
- compact screens: native horizontal scroll-snap with visible room labels and descriptions.

All five room descriptions remain present in the document. Active changes are not announced on every scroll tick.

## Header and navigation

`SiteHeader.tsx` uses section-level `data-header-theme` attributes to select light or dark contrast. The full-screen menu supports:

- focus transfer into the menu;
- focus trapping;
- Escape-to-close;
- focus restoration;
- body scroll locking;
- current-page indication.

Essential navigation and form controls do not use magnetic movement.

## Gallery

The gallery retains category filtering, count updates, native `<dialog>`, keyboard navigation, swipe behavior, accessible alt text, and focus restoration. Its visual presentation now uses editorial metadata, restrained controls, SVG arrows, and the scoped `view` cursor on eligible desktop media targets.

## Images

- Untouched supplied originals live in `public/assets/images/original/`.
- Optimized WebP variants live in `public/assets/images/webp/`.
- Responsive `<picture>` markup selects an appropriate width.
- `public/assets/images/manifest.json` records dimensions and derivative paths.
- The optimized initial hero photograph is 300,922 bytes.
- The decorative botanical foreground is 148,510 bytes.
- Combined initial hero media is 449,432 bytes, within the 450 KB engineering target.

## Inquiry endpoint

The Next.js route handler at `POST /api/inquiries` retains:

- required name;
- at least one contact method;
- valid email when supplied;
- guest count from 1 to 10;
- check-out after check-in;
- privacy consent;
- honeypot rejection;
- 30 KB request cap;
- five attempts per ten minutes per IP in the running process.

A production deployment should add durable distributed rate limiting and an approved delivery service.

## Verification strategy

`npm run check` executes:

1. an offline TypeScript source check;
2. source and stylesheet integrity linting;
3. 26 Node-based test cases.

`npm run build:verify` creates a checksum manifest for critical implementation files. The standard `npm run build` remains the production Next.js build command and should be executed after dependencies are installed from a normal npm registry.

## Deployment

The production server can run on any host that supports Node.js 20 and persistent writable storage. On serverless or read-only platforms, replace NDJSON persistence with an approved database or webhook-only workflow.
