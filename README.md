# Villa Cinnamoon Castle Website

A complete, dependency-free flagship accommodation website built from the supplied Villa Cinnamoon Castle property facts, implementation plan, and 21 selected photographs.

## What is included

- Nine public routes: home, villa, rooms, gallery, location, contact, privacy, terms, and accessibility.
- Responsive editorial layouts designed for the portrait-heavy image archive.
- Responsive WebP derivatives plus untouched supplied originals.
- Lightweight 2.5D/parallax enhancement with a full reduced-motion fallback.
- Accessible gallery filters and a keyboard/swipe lightbox.
- Inquiry form with browser and server validation.
- Native Node server with no third-party runtime dependencies.
- Local inquiry persistence, rate limiting, a honeypot, security headers, and optional webhook forwarding.
- SEO metadata, social preview image, sitemap, robots file, and web manifest.
- Automated inquiry validation tests.

## Requirements

- Node.js 20 or newer.

## Run locally

```bash
npm start
```

Open `http://127.0.0.1:4173`.

For automatic restarts while editing:

```bash
npm run dev
```

## Validate

```bash
npm run check
npm test
```

## Inquiry delivery

Successful inquiries are written to:

```text
data/inquiries.ndjson
```

That file is excluded from Git and created with restrictive file permissions. To forward each valid inquiry to an approved automation, CRM, email gateway, or serverless workflow, set:

```bash
INQUIRY_WEBHOOK_URL=https://your-approved-endpoint.example/inquiries npm start
```

The webhook receives the normalized inquiry record as JSON. The website never claims a booking is confirmed.

## Production checklist

Before launch, the owner should:

1. Replace the reserved `.example` canonical domain in HTML, `robots.txt`, and `sitemap.xml`.
2. Confirm public contact details or keep the site form-only.
3. Configure the inquiry webhook and test host delivery.
4. Approve rates, policies, check-in/out times, map precision, and safety information.
5. Confirm publication rights for all supplied photographs.
6. Obtain legal review for the privacy notice and terms.
7. Test the deployed site with keyboard, screen reader, reduced motion, slow network, and real mobile devices.

## Project structure

```text
villa-cinnamoon-castle/
├── public/
│   ├── index.html
│   ├── the-villa/
│   ├── rooms/
│   ├── gallery/
│   ├── location/
│   ├── contact/
│   ├── privacy/
│   ├── terms/
│   ├── accessibility/
│   ├── assets/
│   │   ├── css/styles.css
│   │   ├── js/
│   │   └── images/
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── lib/inquiry.mjs
├── server.mjs
├── tests/inquiry.test.mjs
├── docs/
├── data/.gitkeep
├── .env.example
└── package.json
```

## Accuracy notes

The site deliberately does not claim that the property is beachfront, fully air-conditioned, equipped with a pool, highly rated, instantly bookable, or confirmed to have smoke and carbon-monoxide alarms. It also does not invent public phone numbers, email addresses, rates, exact coordinates, journey times, policies, or reviews.
