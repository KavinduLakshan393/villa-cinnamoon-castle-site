# Villa Cinnamoon Castle  
## Lusion-Inspired Website Implementation Plan

**Document status:** Implementation-ready  
**Project:** Villa Cinnamoon Castle, Hikkaduwa  
**Platform:** Next.js App Router, React, TypeScript  
**Source baseline:** Current project archive and the approved design audit  
**Design direction:** Adopt Lusion’s method—integrated visual storytelling, motion, and development—without copying Lusion’s visual identity

---

## 1. Executive summary

The current Villa Cinnamoon Castle website already has a suitable technical foundation:

- Server-rendered, indexable property content
- Authentic property photography
- Native scrolling
- Lightweight 2.5D motion
- Responsive image derivatives
- Reduced-motion handling
- Accessible gallery and inquiry workflows
- A clear page narrative from arrival to inquiry

The next implementation should not replace this foundation. It should refine the site into a more coherent spatial and editorial experience.

The central change is to stop treating motion as a repeated decorative effect and instead give each major chapter a distinct narrative purpose:

1. **Arrival:** establish place and atmosphere through layered depth.
2. **Facts:** transition quickly into trustworthy property information.
3. **Architecture:** show the villa as a composed editorial story.
4. **Rooms:** guide users through one room at a time on desktop.
5. **Shared spaces:** express the relationship between the villa’s two levels.
6. **Amenities:** present practical information as a precise inventory.
7. **Evening:** close the visual journey.
8. **Inquiry:** resolve all movement into a calm conversion experience.

The implementation should remain photography-led and should not introduce synthetic rooms, inaccurate facilities, heavy WebGL, scroll hijacking, or animation-dependent content.

---

## 2. Objectives

### 2.1 Primary objectives

- Create a coherent visual and interaction system that feels designed specifically for Villa Cinnamoon Castle.
- Make the homepage feel spatial and cinematic without reducing trust or usability.
- Replace template-like grids, pills, rounded cards, and generic icons with a restrained editorial system.
- Make motion communicate arrival, depth, spatial relationships, and interactive affordance.
- Keep all property facts, navigation, gallery controls, and inquiry functions accessible without motion.
- Preserve performance on mid-range mobile devices.
- Keep the project maintainable with small, focused React components and reusable motion utilities.

### 2.2 Secondary objectives

- Correct inconsistencies between the documented and implemented typography systems.
- Improve component ownership and reduce global DOM-query-driven behavior.
- Add test coverage for motion tiers, room progression, cursor scope, and header state.
- Establish measurable performance, accessibility, and visual-quality gates.
- Make future property content updates possible without redesigning each section.

### 2.3 Non-goals

The following are explicitly outside this implementation:

- Copying Lusion’s colors, 3D scenes, cursor style, typography, or portfolio layouts
- Adding Three.js or React Three Fiber for decorative effects
- Building a digital twin of the villa
- Generating synthetic property imagery or room footage
- Adding unverified prices, exact coordinates, availability, ratings, policies, or travel times
- Replacing native scroll with a scroll-jacking library
- Rebuilding the inquiry backend unless required by a separate production-integration task
- Redesigning every secondary route before the homepage system is validated

---

## 3. Guiding principles

### 3.1 The property determines the interaction system

Every major effect must derive from a real aspect of the villa:

- Tropical foliage creates foreground depth.
- The exterior establishes arrival.
- The two-story layout supports vertical movement.
- Five bedrooms support chapter-based progression.
- Shared living areas support connected spatial transitions.
- The night exterior supports a visual conclusion.
- The inquiry form becomes the stable destination.

### 3.2 Authenticity before spectacle

Property photographs must remain truthful representations. Decorative foreground foliage, masks, and ambient treatments may frame the imagery, but they must not:

- Add structures
- Add amenities
- Change room dimensions
- Replace furniture
- Alter exterior architecture
- Suggest a pool or beachfront access
- Create false views

### 3.3 Progressive enhancement

The complete content and inquiry journey must remain functional when:

- JavaScript is delayed or unavailable
- Motion is reduced
- The device is touch-only
- The browser cannot sustain smooth animation
- A decorative asset fails to load

### 3.4 Native document behavior

Users must be able to:

- Scroll normally in both directions
- Use keyboard navigation
- Follow anchor links
- Use browser back and forward controls
- Select and copy text
- Reach the inquiry form without completing an animation
- Read all content in logical DOM order

### 3.5 Stable functional interface

Navigation, facts, gallery controls, form controls, and inquiry actions must live in stable HTML layers. Motion should enhance media and chapter transitions, not control essential functionality.

### 3.6 Motion with a defined purpose

Every movement must support at least one of these roles:

1. **Depth**
2. **Arrival**
3. **Transition between spaces**
4. **Interactive affordance**

Animations that do not meet one of these roles should be removed.

---

## 4. Existing architecture to preserve

### 4.1 Core stack

Retain:

- Next.js App Router
- React
- TypeScript
- Server-rendered route content
- Existing inquiry API and validation
- Existing media catalogue
- Responsive `<picture>` component
- Existing route structure
- Vitest and Testing Library

### 4.2 Existing components to preserve and evolve

| Component | Decision |
|---|---|
| `ResponsivePicture.tsx` | Preserve; extend only if AVIF or priority behavior is added |
| `InquiryForm.tsx` | Preserve functionality; restyle and remove magnetic submit behavior |
| `Gallery.tsx` | Preserve filtering, dialog, keyboard, swipe, and focus restoration |
| `SiteHeader.tsx` | Refactor visual and state behavior |
| `ScrollIntro.tsx` | Replace internal structure with explicit arrival layers |
| `RoomSequence.tsx` | Split into desktop and mobile presentations |
| `MotionController.tsx` | Reduce responsibilities and migrate to hooks/utilities |
| `CustomCursor.tsx` | Scope to explicit media targets |
| `Magnetic.tsx` | Limit use or remove from essential controls |
| `MobileCta.tsx` | Preserve; restyle within the new visual system |

### 4.3 Existing factual guardrails

Continue to publish only confirmed details:

- Up to 10 guests
- Five bedrooms
- Five beds
- Two bathrooms
- Approximately 3.5 km from Hikkaduwa town and main beach areas
- One air-conditioned bedroom
- Fans in remaining bedrooms
- Full kitchen
- High-speed Wi-Fi
- Dedicated workspace
- Hot water
- Washing machine
- Garden, balcony, porch, and gated parking

Do not add unresolved owner inputs.

---

## 5. Target information architecture and homepage sequence

The homepage should use this final sequence:

1. **Arrival scene**
2. **Primary property facts**
3. **The villa / architecture**
4. **Five-bedroom chapter sequence**
5. **Shared spaces across two levels**
6. **Practical comforts and amenities**
7. **Approximate Hikkaduwa location**
8. **Evening transition**
9. **Inquiry**
10. **Footer**

The sequence should alternate visual density:

- Immersive
- Informational
- Editorial
- Immersive
- Immersive
- Informational
- Informational
- Immersive
- Functional

This avoids repeating the same image-left/text-right pattern.

---

## 6. Proposed code organization

### 6.1 New files

```text
src/
├── components/
│   ├── arrival/
│   │   ├── ArrivalScene.tsx
│   │   ├── ArrivalFacts.tsx
│   │   └── ArrivalForeground.tsx
│   ├── rooms/
│   │   ├── RoomSequence.tsx
│   │   ├── RoomSequenceDesktop.tsx
│   │   └── RoomSequenceMobile.tsx
│   ├── motion/
│   │   ├── MotionProvider.tsx
│   │   ├── MotionRoot.tsx
│   │   └── Reveal.tsx
│   ├── AmenitiesInventory.tsx
│   ├── ArchitectureChapter.tsx
│   ├── SharedSpacesChapter.tsx
│   ├── EveningTransition.tsx
│   └── EditorialFactRail.tsx
├── hooks/
│   ├── useInView.ts
│   ├── useMotionTier.ts
│   ├── usePointerDrift.ts
│   ├── useRafLoop.ts
│   ├── useScrollProgress.ts
│   └── useVisibilityState.ts
├── lib/
│   ├── motion.ts
│   └── clamp.ts
└── content/
    ├── home.ts
    └── media.ts
```

This structure is a recommendation, not a requirement to create excessive abstraction. A file should be introduced only when it has clear ownership.

### 6.2 Responsibilities

#### `MotionProvider.tsx`

Provides a single shared motion tier:

```ts
type MotionTier = "full" | "light" | "static";
```

It should expose:

- `tier`
- `reducedMotion`
- `finePointer`
- `documentVisible`
- optional manual override for testing

It must not perform section-specific transforms.

#### `useScrollProgress.ts`

Responsibilities:

- Observe one section through a ref
- Calculate normalized progress from `0` to `1`
- Use `requestAnimationFrame`
- Pause when offscreen or document is hidden
- Respect the selected motion tier
- Avoid React state updates for every animation frame
- Write progress to a CSS custom property or invoke a supplied renderer

Suggested API:

```ts
const { sectionRef } = useScrollProgress({
  cssVariable: "--scene-progress",
  start: "top top",
  end: "bottom bottom",
  disabled: tier === "static"
});
```

A simpler callback-based API is also acceptable.

#### `usePointerDrift.ts`

Responsibilities:

- Run only on fine-pointer devices
- Activate only when the target is in view
- Clamp output to the defined maximum
- Smooth output with damping
- Reset to zero on pointer leave
- Disable under reduced motion
- Write `--pointer-x` and `--pointer-y`

#### `useMotionTier.ts`

Decision logic:

- `static` when `prefers-reduced-motion: reduce`
- `light` for coarse pointer, narrow viewport, or intentionally constrained mode
- `full` for capable desktop/fine-pointer mode

Do not use user-agent sniffing.

#### `MotionRoot.tsx`

Own the shared RAF scheduler only if multiple active scenes need one scheduler. Do not create a complex animation engine. The minimum viable implementation is preferred.

---

## 7. Design-system implementation

This phase must be completed before rebuilding major sections.

### 7.1 Typography decision

The current documentation claims Playfair Display and Open Sans, while the application loads Inter Variable and aliases `--serif` to `--sans`.

Choose one system and make the code and documentation agree.

### Recommended system

Use Inter Variable for both display and body styles, with clearly separated tokens.

```css
:root {
  --font-display: "Inter Variable", Inter, sans-serif;
  --font-body: "Inter Variable", Inter, sans-serif;
}
```

Display style:

```css
.type-display {
  font-family: var(--font-display);
  font-size: clamp(4.25rem, 9.5vw, 9.25rem);
  font-weight: 620;
  letter-spacing: -0.075em;
  line-height: 0.87;
}
```

Section heading:

```css
.type-heading {
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 5.5vw, 5.25rem);
  font-weight: 560;
  letter-spacing: -0.06em;
  line-height: 0.94;
}
```

Body style:

```css
.type-body {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.25vw, 1.18rem);
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.55;
}
```

Utility labels:

```css
.type-label {
  font-size: 0.68rem;
  font-weight: 650;
  letter-spacing: 0.16em;
  line-height: 1.2;
  text-transform: uppercase;
}
```

### 7.2 Color system

Reduce the visual system to three principal surfaces and controlled accents.

```css
:root {
  --surface-light: #f5f2ea;
  --surface-white: #ffffff;
  --surface-dark: #10110f;

  --text-primary: #11110f;
  --text-muted: #67665f;
  --text-on-dark: #f5f2ea;
  --text-on-dark-muted: rgba(245, 242, 234, 0.72);

  --accent-cinnamon: #9a5036;
  --accent-cinnamon-dark: #713624;
  --accent-green: #7d8d78;

  --rule-light: rgba(17, 17, 15, 0.18);
  --rule-dark: rgba(245, 242, 234, 0.2);
}
```

Required changes:

- Remove the purple-grey editorial panel.
- Reduce use of sand-colored section bands.
- Use cinnamon primarily for actions, active states, and focused emphasis.
- Use tropical green as a restrained secondary accent.
- Avoid decorative gradients unless they support image readability.

### 7.3 Geometry

Use two clear radius categories:

```css
--radius-control: 0.2rem;
--radius-media: 0;
```

Rules:

- Major photographs: square or nearly square corners
- Buttons: rectangular or minimally rounded
- Form inputs: modest radius for usability
- No fully rounded pill buttons
- No circular amenity icon containers
- No rounded gallery cards unless needed on mobile

### 7.4 Spacing

Create a consistent spacing scale:

```css
--space-1: 0.375rem;
--space-2: 0.75rem;
--space-3: 1.25rem;
--space-4: 2rem;
--space-5: 3.25rem;
--space-6: 5rem;
--space-7: 7.5rem;
--space-8: 10rem;
```

Use wide vertical gaps to create luxury and rhythm. Avoid adding cards merely to fill empty space.

### 7.5 Buttons and links

Primary button:

- Cinnamon background
- Rectangular shape
- Strong visible focus state
- No magnetic transform
- Maximum hover movement: 1–2 px
- Immediate active feedback

Secondary button:

- Transparent background
- One-pixel rule
- No pill shape
- Clear inverse version on dark surfaces

Text links:

- Underline or animated rule
- No decorative arrow movement larger than 4 px
- Maintain visible focus

### 7.6 Acceptance criteria

- Documentation and code name the same fonts.
- No `--serif: var(--sans)` compatibility alias remains unless explicitly documented.
- No `border-radius: 99px` remains on primary controls.
- No purple-grey surface remains.
- Major homepage sections use only the approved surface tokens.
- All text and controls meet WCAG AA contrast requirements.
- Focus states are visible on light and dark surfaces.

---

## 8. Motion system implementation

### 8.1 Motion tokens

Add tokens to the global stylesheet:

```css
:root {
  --motion-fast: 200ms;
  --motion-medium: 520ms;
  --motion-slow: 900ms;

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);

  --parallax-small: 12px;
  --parallax-medium: 24px;
  --parallax-large: 36px;

  --pointer-drift-small: 4px;
  --pointer-drift-large: 8px;
}
```

### 8.2 Motion limits

| Behavior | Full | Light | Static |
|---|---:|---:|---:|
| Ordinary parallax | 24–36 px | 8–16 px | 0 |
| Pointer drift | 4–8 px | 0 | 0 |
| Image scale | up to 1.055 | up to 1.02 | 1 |
| Sticky chapter scenes | Allowed | Limited | Disabled |
| Character/word reveal | Select headings only | Simple fade | None |
| Cursor enhancement | Scoped | Disabled | Disabled |
| Crossfade | Allowed | Allowed | Immediate/static |

### 8.3 Replace broad DOM querying

`MotionController.tsx` currently queries all `[data-parallax]` and `.reveal` elements after navigation.

Migration plan:

1. Introduce `MotionProvider`.
2. Move arrival motion into `ArrivalScene`.
3. Move room sequence motion into `RoomSequenceDesktop`.
4. Move shared-space motion into `SharedSpacesChapter`.
5. Keep a small generic `Reveal` component for non-critical section entry.
6. Remove global `SplitType` behavior from multi-element containers.
7. Retire `MotionController.tsx` when no global behavior remains.

### 8.4 Text reveal policy

Use SplitType only when all conditions are true:

- The element is a heading.
- The heading is short.
- The effect improves chapter pacing.
- The static text remains visible before enhancement.
- Reduced motion bypasses splitting.
- Cleanup restores the original DOM.

Do not split:

- Paragraphs
- Lists
- Form text
- Navigation
- Multiple heading and paragraph nodes inside one container

### 8.5 RAF lifecycle

Every RAF loop must stop when:

- The component unmounts
- The document becomes hidden
- The section is outside its activation range
- Motion switches to static
- Pointer interaction is idle, where applicable

### 8.6 Acceptance criteria

- No animation loop runs continuously for an offscreen section.
- Reduced-motion mode contains no pinned scrolling regions.
- Essential content is visible without IntersectionObserver.
- Every transform has a documented maximum.
- No animation blocks navigation or form interaction.
- Reversing scroll reverses the visual progression without state errors.

---

## 9. Phase A — baseline and safety checks

**Effort:** Small  
**Dependencies:** None

### 9.1 Create a clean baseline

Before visual changes:

- Run `npm run check`.
- Run `npm run build`.
- Record existing failures separately from new failures.
- Capture baseline screenshots at:
  - 1440 × 900
  - 1280 × 800
  - 768 × 1024
  - 390 × 844
- Capture reduced-motion screenshots.
- Record current Lighthouse or equivalent measurements.
- Record initial JavaScript, CSS, font, and hero image transfer sizes.

### 9.2 Establish feature checkpoints

Use small integration checkpoints:

1. `design-system`
2. `motion-foundation`
3. `arrival-scene`
4. `room-sequence`
5. `homepage-chapters`
6. `navigation-gallery`
7. `accessibility-performance`
8. `release`

Each checkpoint must be buildable and testable.

### 9.3 Protect the inquiry journey

Before animation work, add a smoke test that verifies:

- Homepage contains a visible “Check dates” action.
- Contact route renders.
- Inquiry form can be focused and submitted.
- Validation errors remain accessible.
- Mobile CTA hides at the inquiry section.

### 9.4 Acceptance criteria

- Baseline evidence is stored in `docs/qa/baseline/`.
- Existing tests pass or known failures are documented.
- The inquiry path has a regression test.
- No design work starts without a reproducible baseline.

---

## 10. Phase B — design-system refactor

**Effort:** Medium  
**Dependencies:** Phase A

### 10.1 Files

Primary:

- `public/assets/css/styles.css`
- `src/app/layout.tsx`
- `docs/IMPLEMENTATION_NOTES.md`
- `README.md`

Optional:

- Split the CSS into:
  - `tokens.css`
  - `base.css`
  - `components.css`
  - `pages/home.css`

Only split if it improves maintainability without disrupting the current build.

### 10.2 Tasks

- Replace legacy variables with approved design tokens.
- Correct typography documentation.
- Update heading weights, tracking, and line heights.
- Replace pill buttons.
- Remove unsupported surface colors.
- Standardize rules and borders.
- Standardize media and control radii.
- Update form controls without changing behavior.
- Add dark-surface focus styles.
- Ensure print styles remain readable.

### 10.3 Risk

A global token change can unintentionally affect secondary pages.

### 10.4 Mitigation

- Capture each public route after the token change.
- Add page-level compatibility styles only where needed.
- Do not complete homepage redesign and global token migration in one unreviewable commit.

### 10.5 Acceptance criteria

- Homepage and secondary routes render without layout breakage.
- Buttons, headings, labels, and forms use the new tokens.
- Documentation matches implementation.
- No unintended overflow appears at supported viewport sizes.

---

## 11. Phase C — motion foundation

**Effort:** Medium  
**Dependencies:** Phase B

### 11.1 Files

Create:

- `src/components/motion/MotionProvider.tsx`
- `src/hooks/useMotionTier.ts`
- `src/hooks/useScrollProgress.ts`
- `src/hooks/usePointerDrift.ts`
- `src/hooks/useVisibilityState.ts`
- `src/lib/motion.ts`

Modify:

- `src/app/layout.tsx`
- `src/components/MotionController.tsx`

### 11.2 Motion-tier logic

Recommended decision order:

1. `prefers-reduced-motion: reduce` → `static`
2. coarse pointer or viewport below desktop threshold → `light`
3. fine pointer and desktop viewport → `full`

Do not downgrade solely because of browser brand or user-agent.

### 11.3 Hook behavior

`useScrollProgress` must:

- Use a ref
- Avoid React state per frame
- Clamp values
- Support custom start/end ranges
- Stop updates offscreen
- Reset safely after resize

`usePointerDrift` must:

- Normalize pointer coordinates from `-1` to `1`
- Clamp maximum output
- Smooth the target values
- Return to zero after leave
- Disable outside `full` tier

### 11.4 Generic reveal behavior

Replace broad `.reveal` handling with a component or hook:

```tsx
<Reveal kind="clip" delay={120}>
  ...
</Reveal>
```

Supported types:

- `fade`
- `clip`
- `heading`

Avoid adding more types until a real section requires them.

### 11.5 Tests

Add:

- `useMotionTier.test.ts`
- `useScrollProgress.test.ts`
- `Reveal.test.tsx`

Test:

- reduced-motion selection
- coarse-pointer selection
- cleanup of listeners
- content visibility when IntersectionObserver is unavailable
- no enhancement when static

### 11.6 Acceptance criteria

- New scenes can consume one shared motion tier.
- No hook leaks scroll, resize, media-query, or visibility listeners.
- Static mode renders the same content in logical order.
- Existing pages still function while migration is incomplete.

---

## 12. Phase D — arrival scene

**Effort:** Large  
**Dependencies:** Phases B and C  
**Priority:** Highest visual priority

### 12.1 Component change

Replace the internal implementation of `ScrollIntro.tsx` with `ArrivalScene.tsx`, or rename the existing component after migration.

Suggested DOM:

```tsx
<section
  ref={sectionRef}
  className="arrival"
  aria-labelledby="villa-title"
  data-motion-tier={tier}
>
  <div className="arrival__stage">
    <div className="arrival__ambient" aria-hidden="true" />

    <div className="arrival__property">
      <ResponsivePicture ... />
    </div>

    <ArrivalForeground />

    <div className="arrival__content">
      <p className="arrival__location">Hikkaduwa, Sri Lanka</p>
      <h1 id="villa-title">Villa Cinnamoon Castle</h1>
      <p>A private villa shaped by tropical greenery.</p>
      <Link href="/contact/">Check dates</Link>
    </div>

    <a className="arrival__cue" href="#property-facts">
      Scroll to arrive
    </a>
  </div>
</section>
```

### 12.2 Copy

Use only:

- `Villa Cinnamoon Castle`
- `Hikkaduwa, Sri Lanka`
- `A private villa shaped by tropical greenery.`
- `Check dates`
- `Scroll to arrive`

Move guest capacity and distance to the fact rail.

### 12.3 Visual layers

#### Background

- Use a restrained ambient surface or blurred extension derived from the hero colors.
- Do not fabricate additional property content.
- Avoid a visible decorative gradient that washes the photograph.

#### Property layer

- Use `01_hero_exterior_day.jpg`.
- Keep object positioning fixed and approved at each breakpoint.
- Use scale and crop expansion only.
- Do not rotate or skew the building.
- Maintain a stable focal point around the villa facade.

#### Foreground

- Use the existing botanical alpha WebP if its quality is sufficient.
- Re-export if edge contamination or compression artifacts are visible.
- Limit foreground movement to 8 px pointer drift and 24–36 px scroll drift.
- Hide or simplify below the desktop breakpoint.
- Mark decorative imagery with empty alt text.

### 12.4 Timeline

Target section height:

- Full tier: `190–210svh`
- Light tier: `140–165svh`
- Static tier: natural document height

Progress mapping:

| Progress | Behavior |
|---:|---|
| `0.00–0.25` | Content remains stable; minor foreground drift |
| `0.25–0.65` | Property image expands toward viewport |
| `0.45–0.70` | Title and supporting copy move out gently |
| `0.70–1.00` | Visual resolves toward the fact rail |
| `1.00` | Native document flow continues |

The fact rail should not be absolutely hidden inside the hero. It must remain a separate document section after the arrival.

### 12.5 CSS variables

```css
--arrival-progress
--arrival-approach
--arrival-copy-exit
--arrival-pointer-x
--arrival-pointer-y
--arrival-foreground-y
```

Do not expose numerous pixel-specific inset variables. Derive the final transforms in CSS from a smaller semantic set.

### 12.6 Responsive behavior

#### Desktop

- Sticky stage
- Layered foreground
- Pointer drift
- Full crop expansion
- Visible scroll cue

#### Tablet

- Shorter stage
- No pointer drift
- Reduced foreground
- Smaller image scale
- Copy remains readable without overlap

#### Mobile

Preferred implementation:

- Full-bleed static or lightly scaling hero
- No decorative foreground layer
- No pinned long sequence
- Clear title and CTA
- Facts immediately available after the first viewport

#### Reduced motion

- Static image
- Content below or over a stable image with sufficient contrast
- No sticky stage
- No large mask or scale animation
- Facts follow directly

### 12.7 Testing

Update `ScrollIntro.test.tsx` or replace with `ArrivalScene.test.tsx`.

Test:

- H1, location, statement, and CTA exist.
- Hero image has high fetch priority.
- Static mode contains all content.
- Motion tier is exposed correctly.
- Decorative foreground is not required for meaning.
- CTA points to `/contact/`.
- Anchor points to the fact rail.
- No “five bedrooms” chapter remains inside the hero.

### 12.8 Acceptance criteria

- The scene feels spatial without altering property truth.
- The title is readable at all supported widths.
- The first property fact is reachable quickly on mobile.
- Reversing scroll reverses the scene smoothly.
- No layout shift occurs when the botanical asset loads.
- The hero does not exceed the initial media budget.
- Reduced-motion users see no pinned gap.

---

## 13. Phase E — editorial fact rail

**Effort:** Small  
**Dependencies:** Phase D

### 13.1 Replace current facts grid

Replace:

- 10 Guests
- 5 Bedrooms
- 5 Beds
- 2 Bathrooms
- 3.5 km
- Wi-Fi Workspace
- Gated Parking

With four primary facts:

- 10 Guests
- 5 Bedrooms
- 2 Bathrooms
- 3.5 km from town

Move beds to the room chapter. Move Wi-Fi, workspace, and parking to amenities.

### 13.2 Suggested markup

```tsx
<section id="property-facts" className="fact-rail" aria-label="Property overview">
  <div className="container fact-rail__inner">
    {facts.map((fact) => (
      <Link className="fact-rail__item" href={fact.href} key={fact.label}>
        <strong>{fact.value}</strong>
        <span>{fact.label}</span>
      </Link>
    ))}
  </div>
</section>
```

### 13.3 Visual behavior

- Full-width top and bottom rules
- Large values
- Small uppercase labels
- No card backgrounds
- No hover fill
- A subtle rule or arrow response on hover
- Four equal columns on desktop
- Two columns on tablet
- One or two columns on mobile, based on fit

### 13.4 Acceptance criteria

- Facts remain links to relevant routes.
- No primary fact is hidden inside animation.
- Labels fit without clipping.
- The rail visually connects the arrival to the architecture chapter.

---

## 14. Phase F — architecture chapter

**Effort:** Medium  
**Dependencies:** Phases B and C

### 14.1 Create `ArchitectureChapter.tsx`

Use:

- `03_garden_gate_reveal.jpg` as primary media
- `07_balcony_tropical_view.jpg` as secondary detail

### 14.2 Layout

Desktop:

- Large portrait image occupies approximately 34–40% width.
- Heading begins in open page space and may overlap the image boundary.
- Supporting copy sits in a narrower text measure.
- Secondary balcony image becomes a small detail that moves independently.
- No colored panel behind the text.

Mobile:

- Heading first
- Primary image
- Supporting copy
- Secondary image
- Link

### 14.3 Content changes

Remove:

- `Entire home`
- `Tropical garden`
- `Covered porch`

as pills.

Replace with one text line:

> Entire home · Two-story layout · Tropical garden and covered outdoor areas

Only include wording supported by the property source.

### 14.4 Motion

- Primary image: mask reveal
- Secondary image: 12–18 px counter-movement
- Heading: simple fade or line reveal
- No simultaneous large-scale movement

### 14.5 Acceptance criteria

- No purple panel remains.
- The heading and media form one composition.
- The primary image remains the focal point.
- Copy remains readable at zoom levels up to 200%.
- Static mode preserves the intended order.

---

## 15. Phase G — room chapter sequence

**Effort:** Large  
**Dependencies:** Phases B and C  
**Priority:** Second-highest visual priority

### 15.1 Split the component

```tsx
export function RoomSequence({ rooms }: Props) {
  return (
    <>
      <RoomSequenceDesktop rooms={rooms} />
      <RoomSequenceMobile rooms={rooms} />
    </>
  );
}
```

Use CSS to display the appropriate version. Avoid rendering duplicate accessible content to screen readers.

Recommended strategies:

- Render shared semantic text once and use media-query presentation carefully, or
- Mark one presentation `aria-hidden` only when the other is active through a client-aware approach, or
- Prefer one semantic structure styled differently when feasible.

Do not leave two full navigable copies in the accessibility tree.

### 15.2 Desktop structure

```tsx
<section ref={sectionRef} className="rooms-story">
  <div className="rooms-story__sticky">
    <div className="rooms-story__media">
      {rooms.map(...)}
    </div>

    <div className="rooms-story__content">
      <p className="rooms-story__counter">01 / 05</p>
      <div className="rooms-story__descriptions">...</div>
      <Link href="/rooms/">Explore every room</Link>
    </div>
  </div>
</section>
```

### 15.3 Desktop behavior

- Sticky region approximately `500–600svh`, subject to prototype validation.
- One room active at a time.
- Active room is determined by normalized section progress.
- Images crossfade.
- Each image uses a shallow `1.00–1.03` scale or crop shift.
- Text changes at the same chapter threshold.
- Counter updates from `01 / 05` to `05 / 05`.
- Scroll remains native and reversible.
- Clicking the room-stage link opens `/rooms/`.

### 15.4 Active index calculation

```ts
const activeIndex = Math.min(
  rooms.length - 1,
  Math.floor(progress * rooms.length)
);
```

Add a small hysteresis or buffered transition only if testing reveals flicker near boundaries. Do not introduce complex state unless needed.

### 15.5 Image loading

- First bedroom image may load before the section enters view.
- Remaining room images should load lazily.
- Consider preloading the next room only.
- Do not eagerly load all five room images on initial page load.

### 15.6 Mobile behavior

- Horizontal scroll-snap gallery
- Visible next-card preview
- Native touch scrolling
- Each card contains room number, label, and description
- No sticky multi-screen sequence
- No hover-dependent content
- Provide a clear “Explore every room” link after the carousel

### 15.7 Content

Add bed configuration information near the chapter introduction:

> Four Super King beds and one Queen bed. One bedroom has air conditioning; the remaining bedrooms use fans.

Do not imply which specific room has a bed size unless verified by the source.

### 15.8 Accessibility

- Active changes must not generate excessive live-region announcements.
- All room names and descriptions remain in the DOM.
- Keyboard users can reach the room route without stepping through five fake controls.
- Mobile carousel may use list semantics.
- No content depends on opacity alone for accessibility.

### 15.9 Tests

Add:

- `RoomSequenceDesktop.test.tsx`
- `RoomSequenceMobile.test.tsx`

Test:

- all five room labels are present
- counter starts correctly
- progress selects expected active index
- reduced motion uses a static list or simplified presentation
- mobile structure supports native horizontal navigation
- route link exists

### 15.10 Acceptance criteria

- Desktop feels like a guided chapter, not five cards.
- Mobile remains fast and touch-native.
- No duplicate interactive content appears in the accessibility tree.
- All five images and descriptions remain reachable.
- The first room transition does not cause layout shift.
- Scrolling backward restores previous room states.

---

## 16. Phase H — shared spaces chapter

**Effort:** Medium  
**Dependencies:** Phases B and C

### 16.1 Create `SharedSpacesChapter.tsx`

Use:

- `12_upper_landing_high_resolution.jpg` as the main scene
- `10_staircase_living_flow.jpg` as the secondary transition image

### 16.2 Design concept

The motion must express connection between levels.

Suggested implementation:

- Main landing image remains full-bleed.
- A vertical crop reveals the staircase image from below or from one side.
- A small label reads `GROUND / UPPER LEVEL`.
- Copy sits in a controlled area with a local contrast treatment.
- The dark shade is reduced and localized.

### 16.3 Remove

- Three stat pills
- Thick floating image border
- Heavy full-width gradient overlay
- Generic identical parallax on both images

### 16.4 Motion mapping

- Main image: maximum 16 px movement
- Secondary image crop: 0–100% reveal through a narrow progress range
- Copy: simple fade/translate of no more than 16 px
- Label: fixed or minimally animated

### 16.5 Contrast

Use one of these methods, in order of preference:

1. Place copy over naturally quiet image space.
2. Use a narrow local gradient behind the copy.
3. Use a translucent solid panel only if required.

Do not darken the entire image more than necessary.

### 16.6 Acceptance criteria

- The relationship between two levels is visually understandable.
- Copy passes contrast checks.
- The secondary image feels integrated, not framed as a card.
- Static mode presents both images and text clearly.

---

## 17. Phase I — amenities inventory

**Effort:** Medium  
**Dependencies:** Phase B

### 17.1 Create `AmenitiesInventory.tsx`

Replace the six-card amenity grid with numbered rows.

Data shape:

```ts
type AmenityItem = {
  number: string;
  title: string;
  description: string;
  href?: string;
  image?: PropertyImage;
};
```

### 17.2 Content

```text
01  FULL KITCHEN             Cooking essentials and appliances
02  HIGH-SPEED WI-FI         Browsing, work and study
03  DEDICATED WORKSPACE      Upper-level table and seating
04  HOT WATER                Available in two full bathrooms
05  WASHING MACHINE          Washer provided
06  GATED PARKING            Free parking on the premises
```

### 17.3 Layout

Desktop:

- Number column
- Amenity title column
- Description column
- Optional small image preview area
- Full-width rule between rows

Mobile:

- Number and title on first line
- Description below
- No hover-only preview

### 17.4 Interaction

Initial release:

- Rows reveal once with extending rules.
- Optional hover image is deferred unless it materially improves the section.

Do not add custom icons merely to decorate each row.

### 17.5 Acceptance criteria

- All six amenities are readable without interaction.
- Unicode icons are removed.
- The section feels like an inventory, not a dashboard.
- Rules and typography use shared tokens.

---

## 18. Phase J — location, evening, and inquiry

**Effort:** Medium  
**Dependencies:** Phase B

### 18.1 Location section

Retain the approximate location graphic and verified wording.

Refine:

- Remove card-like rounded container.
- Use an open split layout.
- Keep the approximate map clearly labeled.
- Preserve the disclaimer that the exact pin is not yet approved.
- Keep “Explore the location” and “Ask a question” actions.

Do not add unverified travel times.

### 18.2 Evening transition

Create `EveningTransition.tsx` using `06_exterior_night_ambience.jpg`.

Behavior:

- Full-width image
- Shallow image movement in full tier
- A restrained closing statement
- No additional decorative cards
- Transition visually from dark image to the inquiry surface

### 18.3 Inquiry section

After the evening transition:

- Stop all significant background motion.
- Use a stable dark or light surface.
- Keep the inquiry copy and form fully visible.
- Preserve sticky copy on desktop only if it does not interfere with zoom.
- Remove `Magnetic` from the submit button.
- Keep validation, consent, status, and API behavior unchanged.
- Ensure the mobile CTA hides when the inquiry section enters view.

### 18.4 Form styling

- Rectangular primary submit button
- Clear field rules and labels
- Strong focus states
- No animated placeholders
- No motion during errors
- Status messages remain visible and accessible
- Keep native date inputs unless a separate booking integration requires a calendar component

### 18.5 Acceptance criteria

- All significant motion ends before the user begins form interaction.
- Inquiry validation behavior is unchanged.
- Error and success messages remain announced.
- The mobile CTA does not cover form controls.
- The map remains explicitly approximate.

---

## 19. Phase K — site header and navigation

**Effort:** Medium  
**Dependencies:** Phase B

### 19.1 Target header

Desktop:

- Wordmark left
- `Menu` and `Check dates` right
- Minimal chrome
- Transparent over the arrival scene
- Solid once content requires contrast

Mobile:

- Wordmark left
- Menu control right
- Persistent or easily accessible `Check dates` action
- Full-screen menu for secondary routes

### 19.2 Header state

Replace only-scroll-position logic with section-aware contrast state.

Recommended approach:

- Add `data-header-theme="light|dark"` to major sections.
- Observe the section crossing the header line.
- Set header theme based on the current section.
- Fall back to scroll position only when no themed section is detected.

### 19.3 Navigation menu

The full-screen menu should include:

- The Villa
- Rooms
- Gallery
- Location
- Contact / Check dates

Requirements:

- Focus moves into the menu when opened.
- Focus is trapped while open.
- Escape closes it.
- Focus returns to the menu button.
- Body scroll is locked.
- Current page is identified.
- Menu remains usable under reduced motion.

### 19.4 Magnetic behavior

Remove `Magnetic` from:

- Menu button
- Check dates link
- Form submit
- Any mobile control
- Any essential navigation action

Magnetic movement may remain only for optional editorial links after usability testing, with a maximum displacement of 4 px.

### 19.5 Acceptance criteria

- Header text remains legible over every homepage section.
- Menu is fully keyboard accessible.
- Essential controls do not move away from the pointer.
- CTA remains available throughout the property story.
- Header does not flicker when crossing section boundaries.

---

## 20. Phase L — custom cursor

**Effort:** Small to medium  
**Dependencies:** Motion foundation

### 20.1 Scope

The custom cursor should activate only for explicit media experiences.

Supported attributes:

```html
data-cursor="view"
data-cursor="drag"
data-cursor="explore"
```

Examples:

- Gallery item: `view`
- Room carousel on desktop: `explore`
- Draggable mobile-like media rail on supported desktop interactions: `drag`

### 20.2 Do not activate on

- Navigation
- Buttons
- Form controls
- Ordinary text links
- Consent checkbox
- Menu control
- Mobile CTA

### 20.3 Cursor lifecycle

Disable when:

- `prefers-reduced-motion` is active
- pointer is coarse
- window loses focus
- document is hidden
- pointer leaves the viewport
- no eligible cursor target is active

Pause the RAF loop while inactive.

### 20.4 Visual states

Use text or a restrained circle, not both if readability suffers.

Recommended:

- 56–72 px circle
- Small uppercase action label
- High contrast
- No extreme scale jump
- Opacity transition under 200 ms

### 20.5 Native cursor

Do not set `cursor: none` globally. Hide the native cursor only while an eligible media target is active and the enhanced cursor is visible.

### 20.6 Tests

Add:

- cursor does not initialize on coarse pointer
- cursor does not initialize in reduced motion
- ordinary buttons do not trigger enhanced state
- `data-cursor="view"` triggers the expected label
- cleanup cancels RAF and listeners

### 20.7 Acceptance criteria

- No continuous cursor loop runs when inactive.
- Forms retain normal native cursor behavior.
- Cursor enhancement never obscures content.
- The site remains fully usable without it.

---

## 21. Phase M — gallery refinement

**Effort:** Medium  
**Dependencies:** Design system and cursor scope

### 21.1 Preserve functionality

Do not regress:

- Category filtering
- Item count
- Dialog behavior
- Close on backdrop
- Left/right keyboard controls
- Swipe navigation
- Focus return
- Accessible image alt text

### 21.2 Visual changes

- Use a larger irregular editorial rhythm.
- Show fewer images at once.
- Remove rounded card treatment.
- Add image number and category metadata.
- Use `data-cursor="view"` on gallery triggers.
- Keep captions visible through a predictable metadata treatment rather than hidden floating cards.
- Use full-viewport image presentation in the lightbox.
- Replace Unicode navigation glyphs with accessible SVG icons.

### 21.3 Filter controls

- Replace pill-like filters with text tabs or underlined controls.
- Maintain `aria-pressed`.
- Keep a visible selected state.
- Ensure controls wrap cleanly on mobile.

### 21.4 Lightbox

- Preserve native `<dialog>`.
- Add proper SVG controls.
- Keep image count and caption.
- Avoid heavy zoom animation.
- Add reduced-motion behavior.
- Confirm focus handling in Safari and Chromium.

### 21.5 Acceptance criteria

- Existing gallery test still passes.
- New metadata remains readable on touch devices.
- No captions rely only on hover.
- Lightbox controls meet minimum target size.
- Images are not stretched or cropped inaccurately.

---

## 22. Phase N — responsive behavior

**Effort:** Medium  
**Dependencies:** All section implementations

### 22.1 Breakpoint strategy

Use content-driven breakpoints rather than device names.

Suggested:

- Compact: `< 620px`
- Medium: `620–860px`
- Large: `861–1199px`
- Wide: `>= 1200px`

### 22.2 Mobile principles

- No long pinned scenes
- No hover-only content
- No custom cursor
- No magnetic interactions
- Reduced number of simultaneous visual layers
- Thumb-reachable inquiry action
- Normal vertical scrolling
- Native horizontal scroll-snap only where useful
- First key facts visible soon after the hero

### 22.3 Tablet principles

- Use light motion tier
- Simplify overlapping editorial compositions
- Avoid narrow text columns beside dominant media
- Keep header controls clear in portrait orientation

### 22.4 Wide-screen principles

- Cap content width
- Prevent headings from becoming excessively wide
- Maintain intended crop and focal point
- Avoid excessive empty margins around portrait photographs

### 22.5 Orientation changes

All sticky and progress scenes must recalculate after:

- resize
- orientation change
- font load
- image layout completion where required

### 22.6 Acceptance criteria

- No horizontal page overflow.
- No clipped heading or CTA.
- Room sequence behaves correctly in portrait and landscape.
- Mobile users can reach the inquiry form without excessive scrolling.
- Layout remains functional at 200% browser zoom.

---

## 23. Phase O — accessibility

**Effort:** Medium  
**Dependencies:** All interactive sections

### 23.1 Required checks

- Semantic heading order
- Landmark structure
- Skip link
- Visible focus
- Keyboard navigation
- Menu focus management
- Dialog focus management
- Form labels and errors
- Reduced motion
- Contrast
- Zoom and reflow
- Touch target size
- Image alt text
- Decorative image handling

### 23.2 Reduced-motion route

For `prefers-reduced-motion: reduce`:

- Arrival becomes static.
- Room sequence becomes a normal list or simple carousel.
- Shared-space crop reveal is removed.
- Generic reveal animations are removed.
- Custom cursor is disabled.
- Magnetic behavior is disabled.
- Smooth scrolling should not be forced.

### 23.3 JavaScript failure

With client JavaScript unavailable:

- Page content remains visible.
- Navigation routes remain available.
- Facts remain readable.
- Gallery thumbnails remain visible, even if lightbox filtering is unavailable.
- Contact page and form markup remain present.
- No section is left opacity-zero.

### 23.4 Screen-reader considerations

- Avoid announcing active room changes on every scroll tick.
- Do not put decorative counters in heading text.
- Keep carousel/list labels clear.
- Mark decorative foreground foliage as ignored.
- Keep approximate map description in accessible text.
- Preserve inquiry live status behavior.

### 23.5 Acceptance criteria

- WCAG 2.2 AA checks pass for implemented pages.
- All major workflows are keyboard-operable.
- Reduced-motion content order matches the normal narrative.
- No duplicate interactive room content is exposed.
- All focus states remain visible against current section backgrounds.

---

## 24. Phase P — performance and media

**Effort:** Medium  
**Dependencies:** New visuals finalized

### 24.1 Initial budgets

Target budgets for the homepage:

| Asset category | Target |
|---|---:|
| Combined initial hero media | ≤ 450 KB |
| Initial font transfer | ≤ 160 KB |
| Initial route JavaScript | Keep at or below current baseline where practical |
| Decorative foreground asset | ≤ 120–150 KB |
| Largest above-fold image | ≤ 320 KB |
| Layout shift | Near zero |
| Long-running offscreen RAF loops | 0 |

These are engineering targets, not reasons to visibly degrade critical photography.

### 24.2 Image formats

Evaluate:

- AVIF for photographic variants
- WebP fallback
- Existing original fallback

Extend `PropertyImage` only if the asset pipeline can reliably generate and record both formats.

Suggested data:

```ts
type ImageVariant = {
  width: number;
  height: number;
  webp: string;
  avif?: string;
};
```

Do not add format complexity if build and hosting support are not dependable.

### 24.3 Loading priorities

Eager/high priority:

- Hero property image only

Potential early preload:

- First room image when the room section approaches

Lazy:

- Remaining room images
- Secondary architecture images
- Shared-space secondary image
- Gallery images
- Night image below the fold

### 24.4 Decorative asset preparation

Review the botanical overlay for:

- Alpha-edge quality
- Color contamination
- Resolution at target display size
- Compression artifacts
- Unnecessary transparent canvas area

Re-export rather than using CSS blur to hide poor edges.

### 24.5 Runtime

- Pause all offscreen RAF work.
- Avoid React setState per frame.
- Prefer CSS transforms and opacity.
- Avoid animating layout properties such as width, height, top, and left per frame.
- Use `will-change` only while an animation is active.
- Remove `will-change` after interaction where practical.
- Do not load a 3D engine.

### 24.6 Performance tests

Measure:

- Mobile emulation
- Mid-range Android hardware where available
- Slow network
- CPU throttling
- Page visibility changes
- Repeated navigation between routes
- Back-forward cache behavior

### 24.7 Acceptance criteria

- Initial hero budget is met or a documented visual-quality exception is approved.
- No offscreen section consumes continuous animation frames.
- Hero and first text render without layout shift.
- Mobile scroll remains responsive.
- Decorative motion does not raise device temperature noticeably during normal use.

---

## 25. Phase Q — testing strategy

**Effort:** Medium  
**Dependencies:** Ongoing throughout implementation

### 25.1 Unit tests

Add coverage for:

- Motion-tier selection
- Progress clamping
- Active room calculation
- Cursor target selection
- Header theme calculation
- Image catalogue integrity

### 25.2 Component tests

Test:

- Arrival static and enhanced modes
- Fact rail links
- Room desktop and mobile presentations
- Header menu focus behavior
- Gallery filtering and dialog navigation
- Inquiry form validation
- Mobile CTA visibility

### 25.3 Integration tests

Recommended browser-level flows:

1. Open homepage and reach the fact rail.
2. Navigate from header to Rooms.
3. Open and close menu with keyboard.
4. Open gallery image, use arrows, close, and restore focus.
5. Submit empty inquiry and inspect errors.
6. Submit valid mocked inquiry.
7. Enable reduced motion and inspect all chapters.
8. Resize from desktop to mobile and verify no stale sticky state.

### 25.4 Visual regression views

Capture:

- Arrival at beginning, midpoint, and end
- Fact rail
- Architecture composition
- Each room chapter
- Shared-space crop state
- Amenities inventory
- Evening transition
- Inquiry
- Menu open
- Gallery lightbox
- Mobile room carousel
- Reduced-motion homepage

### 25.5 Required viewport matrix

- 1440 × 900
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844
- 360 × 800

Also test browser zoom at 200%.

### 25.6 Acceptance criteria

- `npm run check` passes.
- `npm run build` passes.
- No new console errors.
- All primary browser flows pass.
- Visual snapshots are reviewed rather than accepted automatically.
- Tests include reduced-motion behavior.

---

## 26. Phase R — documentation

**Effort:** Small  
**Dependencies:** Implementation complete

Update:

- `README.md`
- `docs/IMPLEMENTATION_NOTES.md`
- `docs/SOURCE_TRACEABILITY.md`
- `docs/image-selection-manifest.csv`
- Add `docs/MOTION_SYSTEM.md`
- Add `docs/QA_CHECKLIST.md`

### 26.1 `MOTION_SYSTEM.md`

Document:

- Motion tiers
- Token values
- Approved effects
- Maximum movement
- Scene ownership
- Reduced-motion behavior
- RAF lifecycle
- How to add a new scene

### 26.2 `QA_CHECKLIST.md`

Document:

- Supported viewport matrix
- Browser matrix
- Keyboard flows
- Reduced-motion checks
- Performance budgets
- Visual review checkpoints
- Inquiry regression steps

### 26.3 Traceability

Record:

- Which source photograph is used in each homepage chapter
- Which claims are displayed
- Which decorative assets are synthetic and non-factual
- Any owner input still unresolved

### 26.4 Acceptance criteria

- Documentation accurately describes the final implementation.
- No obsolete font or component claims remain.
- A new developer can identify where each motion behavior is owned.
- Decorative assets are clearly distinguished from property imagery.

---

## 27. Detailed task backlog

### Epic 1 — Foundation

- [ ] Record baseline screenshots and metrics.
- [ ] Confirm all existing tests and build status.
- [ ] Add homepage-to-inquiry smoke test.
- [ ] Create design tokens.
- [ ] Correct typography documentation.
- [ ] Replace pill control geometry.
- [ ] Verify secondary routes after token migration.

### Epic 2 — Motion architecture

- [ ] Add `MotionProvider`.
- [ ] Add `useMotionTier`.
- [ ] Add `useScrollProgress`.
- [ ] Add `usePointerDrift`.
- [ ] Add visibility-based RAF pausing.
- [ ] Add generic `Reveal`.
- [ ] Migrate scenes from global `MotionController`.
- [ ] Remove SplitType from multi-node containers.
- [ ] Retire `MotionController` after migration.

### Epic 3 — Arrival

- [ ] Create new arrival DOM structure.
- [ ] Reduce hero copy.
- [ ] Implement property image crop expansion.
- [ ] Implement foreground foliage layer.
- [ ] Implement pointer drift for full tier.
- [ ] Add mobile static/light variant.
- [ ] Add reduced-motion static variant.
- [ ] Tune section height.
- [ ] Update arrival tests.
- [ ] Verify media budget.

### Epic 4 — Facts and architecture

- [ ] Replace seven-item facts grid with four-item rail.
- [ ] Move secondary facts into later chapters.
- [ ] Remove colored architecture panel.
- [ ] Integrate gate and balcony images.
- [ ] Replace stat pills with one factual text line.
- [ ] Implement mask reveal.
- [ ] Verify mobile reading order.

### Epic 5 — Rooms

- [ ] Define room data in `content/home.ts`.
- [ ] Create desktop room sequence.
- [ ] Create mobile room sequence.
- [ ] Implement active index calculation.
- [ ] Implement crossfade and crop behavior.
- [ ] Add counter.
- [ ] Add lazy/preload logic.
- [ ] Avoid duplicate accessible controls.
- [ ] Add room tests.
- [ ] Verify reverse scrolling.

### Epic 6 — Shared spaces and amenities

- [ ] Create shared-space chapter.
- [ ] Implement two-level crop reveal.
- [ ] Remove floating framed card treatment.
- [ ] Add architectural level label.
- [ ] Create numbered amenity inventory.
- [ ] Remove Unicode amenity icons.
- [ ] Add responsive row layout.
- [ ] Verify contrast.

### Epic 7 — Final chapters

- [ ] Refine location layout.
- [ ] Preserve approximate-map disclaimer.
- [ ] Create evening transition.
- [ ] Stop significant motion before inquiry.
- [ ] Restyle inquiry form.
- [ ] Remove magnetic submit behavior.
- [ ] Verify mobile CTA behavior.

### Epic 8 — Navigation and gallery

- [ ] Redesign header composition.
- [ ] Add section-aware contrast theme.
- [ ] Implement accessible full-screen menu.
- [ ] Remove magnetic behavior from essential controls.
- [ ] Scope custom cursor.
- [ ] Pause cursor RAF while inactive.
- [ ] Refine gallery layout.
- [ ] Replace Unicode lightbox arrows with SVG.
- [ ] Preserve gallery behavior and tests.

### Epic 9 — Quality

- [ ] Complete accessibility audit.
- [ ] Complete reduced-motion audit.
- [ ] Complete mobile and tablet review.
- [ ] Complete performance profiling.
- [ ] Optimize hero and decorative assets.
- [ ] Run browser integration flows.
- [ ] Capture visual regression evidence.
- [ ] Update documentation.
- [ ] Complete final definition-of-done review.

---

## 28. Dependency map

```text
Baseline
   ↓
Design system
   ↓
Motion foundation
   ├── Arrival scene
   ├── Architecture chapter
   ├── Room sequence
   ├── Shared spaces
   └── Cursor scope

Design system
   ├── Fact rail
   ├── Amenities inventory
   ├── Location
   ├── Inquiry styling
   ├── Header
   └── Gallery

All homepage chapters
   ↓
Responsive + accessibility + performance
   ↓
Testing + documentation + release
```

The arrival scene and room sequence should not be developed simultaneously by separate implementations unless the motion utilities and visual tokens are already stable.

---

## 29. Risk register

### Risk 1 — Over-animation

**Description:** Too many simultaneous transforms could make the site feel like a demo rather than a property experience.

**Mitigation:**

- Enforce motion limits.
- Give each chapter one primary motion idea.
- Review static screenshots before adding movement.
- Remove effects that do not improve spatial understanding.

### Risk 2 — Mobile performance

**Description:** Desktop cinematic techniques may perform poorly on mid-range phones.

**Mitigation:**

- Separate full and light tiers.
- Avoid pinned scenes on mobile.
- Remove foreground layers on compact screens.
- Pause RAF work.
- Test real devices.

### Risk 3 — Duplicate room content

**Description:** Separate desktop and mobile components may expose duplicate content to assistive technology.

**Mitigation:**

- Prefer shared semantics.
- Explicitly test the accessibility tree.
- Avoid rendering two navigable copies.
- Use CSS presentation changes where practical.

### Risk 4 — Header contrast instability

**Description:** A transparent header may become unreadable over changing images.

**Mitigation:**

- Use section-aware themes.
- Apply a controlled solid header when contrast is uncertain.
- Test every transition point.

### Risk 5 — Asset bloat

**Description:** Layered hero media could exceed the intended budget.

**Mitigation:**

- Re-export foreground artwork.
- Remove transparent padding.
- Use responsive variants.
- Load only one factual hero image eagerly.
- Validate visual quality after compression.

### Risk 6 — Global CSS regressions

**Description:** Token and typography changes could break secondary routes.

**Mitigation:**

- Implement tokens first.
- Capture all routes.
- Use route-specific fixes only where necessary.
- Keep commits small.

### Risk 7 — Motion architecture becomes over-engineered

**Description:** Building a custom animation framework could create unnecessary complexity.

**Mitigation:**

- Use small hooks.
- Avoid a scene graph.
- Keep values in CSS variables.
- Introduce shared scheduling only when profiling proves a need.

### Risk 8 — Accuracy drift

**Description:** New editorial copy may imply unsupported amenities or room details.

**Mitigation:**

- Keep source traceability.
- Review all copy against confirmed property records.
- Avoid room-specific bed claims without evidence.
- Keep unresolved owner inputs omitted.

---

## 30. Review gates

### Gate 1 — Design-system approval

Review:

- Typography
- Palette
- Button geometry
- Rules
- Form styling
- Secondary-route impact

No major scene implementation proceeds until this is accepted.

### Gate 2 — Arrival prototype

Review:

- First viewport
- Scroll timeline
- Mobile variant
- Reduced-motion variant
- Hero crop
- Foliage quality
- Performance

This prototype establishes the visual quality bar.

### Gate 3 — Room sequence prototype

Review:

- Desktop progression
- Reverse scrolling
- Mobile carousel
- Loading behavior
- Accessibility tree
- Copy accuracy

### Gate 4 — Full homepage composition

Review:

- Section rhythm
- Motion variety
- CTA visibility
- Content density
- Transition into inquiry

### Gate 5 — Production readiness

Review:

- Browser QA
- Accessibility
- Performance
- Tests
- Documentation
- Inquiry workflow
- Source accuracy

---

## 31. Definition of done

The implementation is complete only when all of the following are true.

### Visual system

- [ ] The homepage uses one coherent typography, color, geometry, and spacing system.
- [ ] Purple-grey panels, amenity icon cards, and pill-based primary controls are removed.
- [ ] Section layouts vary intentionally without feeling unrelated.
- [ ] Authentic property photography remains the dominant visual material.

### Arrival

- [ ] The hero is a layered spatial scene on capable desktops.
- [ ] The villa image is not distorted or altered.
- [ ] Mobile and reduced-motion variants are clear and efficient.
- [ ] Primary facts follow promptly after the hero.
- [ ] Initial media remains within the approved budget or has an approved exception.

### Motion

- [ ] Motion tiers are implemented.
- [ ] No offscreen RAF loops run continuously.
- [ ] Native scrolling is preserved.
- [ ] Motion is reversible.
- [ ] Static mode contains the complete narrative.
- [ ] Every significant effect has a documented purpose.

### Rooms

- [ ] Desktop uses a chapter-based room sequence.
- [ ] Mobile uses native horizontal scroll-snap or a simple list.
- [ ] All five room descriptions remain accessible.
- [ ] No duplicate navigable copy is exposed.
- [ ] Reverse scrolling works.

### Information and conversion

- [ ] Facts and amenities remain trustworthy and readable.
- [ ] Exact map coordinates and unverified times remain omitted.
- [ ] Inquiry actions remain visible.
- [ ] The form behavior and validation are unchanged.
- [ ] Significant motion stops before form interaction.

### Accessibility

- [ ] Keyboard workflows pass.
- [ ] Focus management passes.
- [ ] Reduced-motion behavior passes.
- [ ] Contrast passes WCAG AA.
- [ ] Reflow works at 200% zoom.
- [ ] Touch targets are sufficient.
- [ ] Dialog and menu behavior are accessible.

### Quality and maintenance

- [ ] `npm run check` passes.
- [ ] `npm run build` passes.
- [ ] Browser flows pass.
- [ ] Visual review evidence exists for required viewports.
- [ ] Documentation matches the implementation.
- [ ] Source traceability is updated.
- [ ] No new unverified property claim is introduced.

---

## 32. Recommended implementation sequence

Execute in this order:

1. Baseline and regression protection
2. Design-system refactor
3. Motion-tier foundation
4. Arrival scene prototype
5. Editorial fact rail
6. Architecture chapter
7. Desktop and mobile room sequence
8. Shared-spaces chapter
9. Amenities inventory
10. Location and evening transition
11. Inquiry styling
12. Header and menu
13. Custom cursor scope
14. Gallery refinement
15. Responsive and accessibility audit
16. Performance optimization
17. Browser testing
18. Documentation and release review

The arrival and room experiences should receive the most design and QA attention. They create the property’s distinct identity. The remaining chapters should support them with restraint rather than competing for attention.

---

## 33. Final implementation principle

The finished site should not appear to be a Lusion template applied to a villa.

It should demonstrate the same deeper discipline:

- The visual idea comes from the subject.
- Design and development are planned together.
- Motion supports the narrative.
- The experience remains technically seamless.
- The interface stays understandable.
- Rich media never replaces truthful information.
- Conversion remains stable and accessible.

For Villa Cinnamoon Castle, that means tropical depth, a slow sense of arrival, clear vertical architecture, a guided room journey, practical information, and a calm final inquiry experience.

---

## References

- Current Villa Cinnamoon Castle project archive
- Approved design audit: “Recommended direction: adopt Lusion’s method, not its appearance”
- Property source and traceability documents included in the project
- Lusion studio reference: <https://lusion.co/>
