# QA Results

**Validation date:** 2026-08-02  
**Project:** Villa Cinnamoon Castle  
**Implementation:** Lusion-inspired editorial and motion refactor

## Automated result

### `npm run check`

**Result:** Passed

The command completed all three stages:

- offline TypeScript source verification;
- source and stylesheet integrity linting;
- 26 automated test cases.

### Test summary

| Suite | Cases | Result |
|---|---:|---|
| Inquiry validation and normalization | 6 | Passed |
| Motion mathematics and room progression | 4 | Passed |
| Media catalogue integrity | 3 | Passed |
| Implementation contracts | 9 | Passed |
| Accessibility and reduced-motion contracts | 4 | Passed |
| **Total** | **26** | **Passed** |

## Build verification

### `npm run build:verify`

**Result:** Passed

The verification script produced `dist/verification-manifest.json` with SHA-256 checksums for critical implementation files.

### `npm run build`

**Result in this sandbox:** Not executable

The command reached the standard Next.js script but the sandbox has no installed `next` binary:

```text
> next build
sh: 1: next: not found
```

The project retains the normal `next build` production command and a synchronized `package-lock.json`. A framework build must be rerun after `npm ci` in an environment with access to the npm packages listed in `package.json`. This limitation is environmental and is not represented as a passed production build.

## Media budget

| Asset | Bytes |
|---|---:|
| Optimized 960 px hero photograph | 300,922 |
| Decorative botanical foreground | 148,510 |
| **Combined initial hero media** | **449,432** |

**Target:** no more than 450 KB  
**Result:** Passed

## Static visual review

The implementation was reviewed through a generated, dependency-independent QA preview using the production stylesheet and real project media.

Reviewed captures:

- `docs/qa/screenshots/home-desktop.png`
- `docs/qa/screenshots/home-mobile.png`
- `docs/qa/screenshots/home-reduced-motion.png`
- `docs/qa/screenshots/rooms-desktop.png`

Verified items:

- desktop arrival hierarchy and media crop;
- compact-screen hero composition;
- reduced-motion static flow and compact CTA;
- desktop room counter position below the header;
- menu-icon separation from legacy CSS;
- stable editorial fact, architecture, amenities, evening, and inquiry rhythm.

## Source integrity

- All 21 approved property photographs remain catalogued.
- Every original and responsive derivative referenced by the catalogue exists.
- No synthetic room, facility, or property view was introduced.
- The decorative botanical artwork is isolated and documented as non-factual.
- No unverified contact details, rates, exact coordinates, or travel times were added.

## Final QA status

All executable test cases in the submitted project passed. TypeScript/source verification, stylesheet integrity checks, implementation checks, accessibility contracts, media integrity checks, motion calculations, and checksum build verification passed. The only unexecuted release gate is the dependency-backed Next.js production build, which requires a normal npm installation environment.
