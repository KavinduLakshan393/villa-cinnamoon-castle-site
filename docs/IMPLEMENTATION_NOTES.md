# Implementation Notes

## Architecture

The site uses React 19, TypeScript, and the Next.js App Router. Core property routes are statically prerendered, while inquiry and health endpoints run on the Node.js server runtime. Property facts remain indexable and outside the interactive client layer.

## Motion

`src/components/MotionController.tsx` applies the reference site’s low-amplitude transforms only to visible elements marked with `data-parallax`. It respects `prefers-reduced-motion`, never hijacks scrolling, and leaves the document in its normal reading order.

The homepage adds a progressively enhanced cinematic hero, clipped image reveals, an editorial room sequence, and two-depth photographic chapters. Hero autoplay pauses during pointer or keyboard interaction and is disabled for reduced-motion users. Content remains visible when the motion controller does not initialize.

## Typography

Playfair Display Variable is used for editorial headings and Open Sans Variable is used for body copy, navigation, forms, and controls. Both fonts are packaged through Fontsource and served from the application bundle; the Latin variable files keep the initial font transfer within the documented budget.

## Images

- Untouched supplied originals live in `public/assets/images/original/`.
- Optimized WebP variants live in `public/assets/images/webp/`.
- Responsive `<picture>` markup selects an appropriate width.
- The social image uses the real exterior photograph inside a branded layout.
- `public/assets/images/manifest.json` records dimensions and derivative paths.

## Inquiry endpoint

The Next.js route handler at `POST /api/inquiries` accepts JSON and enforces:

- Required name.
- At least one contact method.
- Valid email when supplied.
- Guest count from 1 to 10.
- Check-out after check-in.
- Privacy consent.
- Honeypot rejection.
- 30 KB request cap.
- Five attempts per ten minutes per IP in the running process.

A production deployment should add durable distributed rate limiting and an approved delivery service.

## Deployment

The production server can run on any host that supports Node 20 and persistent writable storage. On serverless or read-only platforms, replace the NDJSON persistence with an approved database or webhook-only workflow.
