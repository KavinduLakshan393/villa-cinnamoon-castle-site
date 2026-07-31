# Implementation Notes

## Architecture

The site uses static, server-readable HTML and a dependency-free Node 20 server. This keeps core property facts indexable and accessible even when motion scripts do not run.

## Motion

`public/assets/js/main.js` applies low-amplitude transforms only to visible elements marked with `data-parallax`. It respects `prefers-reduced-motion`, never hijacks scrolling, and does not hide content.

## Images

- Untouched supplied originals live in `public/assets/images/original/`.
- Optimized WebP variants live in `public/assets/images/webp/`.
- Responsive `<picture>` markup selects an appropriate width.
- The social image uses the real exterior photograph inside a branded layout.
- `public/assets/images/manifest.json` records dimensions and derivative paths.

## Inquiry endpoint

`POST /api/inquiries` accepts JSON and enforces:

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

The Node server can run on any host that supports Node 20 and persistent writable storage. On serverless or read-only platforms, replace the NDJSON persistence with an approved database or webhook-only workflow.
