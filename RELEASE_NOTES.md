# Villa Cinnamoon Castle — Lusion-Inspired Implementation

## Release contents

This package contains the complete Next.js/React/TypeScript project, all approved property media and responsive derivatives, the implemented editorial/motion system, source traceability, QA screenshots, automated test transcripts, and release verification checksums.

## Validation status

- 26/26 included tests passed.
- Offline TypeScript verification passed.
- Source and stylesheet integrity lint passed.
- Checksum build verification passed.
- Initial hero media budget passed at 449,432 bytes.
- Static visual QA completed for desktop, mobile, reduced motion, and room progression.

The standard `npm run build` command remains configured for Next.js production output. It could not be executed in the packaging sandbox because project dependencies were not installed and the sandbox package mirror did not provide the required Next.js/React packages. Run `npm ci && npm run build` in a normal npm environment before deployment.

See `docs/QA_RESULTS.md` for the full verification record.
