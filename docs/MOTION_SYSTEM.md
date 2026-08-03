# Motion System

## Purpose

Motion is used only for:

1. depth;
2. arrival;
3. transition between spaces;
4. interactive affordance.

The implementation does not use scroll hijacking, forced smooth scrolling, a 3D engine, or animation-dependent content.

## Tiers

| Tier | Typical environment | Behavior |
|---|---|---|
| `full` | Wide viewport, fine pointer, normal motion preference | Sticky storytelling, shallow parallax, bounded pointer drift, scoped cursor |
| `light` | Compact/coarse-pointer environment | Reduced movement, no pointer drift, simplified chapter behavior |
| `static` | `prefers-reduced-motion: reduce` | Natural document flow, no pinned scenes, no custom cursor, no non-essential reveal |

`useMotionTier.ts` resolves the tier from media queries and user preference. User-agent sniffing is not used.

## Shared tokens

The global stylesheet defines:

- `--motion-fast: 200ms`
- `--motion-medium: 520ms`
- `--motion-slow: 900ms`
- `--ease-out-expo`
- `--ease-standard`
- parallax and pointer-drift limits

## Scene ownership

| Scene | Owner | Primary motion idea |
|---|---|---|
| Arrival | `ArrivalScene.tsx` | Frame expansion and shallow tropical depth |
| Architecture | `ArchitectureChapter.tsx` | Image-mask reveal and small counter-movement |
| Rooms | `RoomSequence.tsx` | One-room-at-a-time chapter progression |
| Shared spaces | `SharedSpacesChapter.tsx` | Vertical reveal expressing two connected levels |
| Evening | `EveningTransition.tsx` | Restrained final visual transition |
| Generic sections | `MotionController.tsx` | Optional one-time reveal only |

## Hooks

### `useScrollProgress`

- observes one section through a ref;
- calculates normalized progress from `0` to `1`;
- clamps all output;
- avoids React state updates for every frame;
- pauses when offscreen or the document is hidden;
- disables scene animation in the static tier;
- writes a semantic CSS custom property and/or invokes a section renderer.

### `usePointerDrift`

- runs only in the full tier;
- normalizes pointer coordinates;
- clamps movement to the configured maximum;
- damps movement and returns to zero after leave;
- pauses when inactive or hidden.

### `useMotionTier`

- returns the provider-controlled tier;
- makes reduced-motion behavior available to components;
- supports deterministic test behavior through the provider.

## Limits

| Behavior | Full | Light | Static |
|---|---:|---:|---:|
| Ordinary parallax | 24–36 px maximum | 8–16 px maximum | 0 |
| Pointer drift | 4–8 px maximum | 0 | 0 |
| Image scale | up to approximately 1.055 | up to approximately 1.02 | 1 |
| Sticky scenes | Allowed | Limited | Disabled |
| Custom cursor | Explicit media targets only | Disabled | Disabled |

## RAF lifecycle

Every animation loop must stop when:

- its component unmounts;
- the section is outside its activation range;
- the document becomes hidden;
- the tier changes to `static`;
- the interaction becomes inactive where applicable.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- the arrival scene becomes a normal-height static composition;
- the room story becomes a non-pinned presentation;
- shared-space and evening transforms are removed;
- generic reveals are immediately visible;
- the custom cursor is disabled;
- native browser scrolling remains unchanged.

## Adding a new scene

1. Confirm the movement serves one of the four approved purposes.
2. Keep all meaningful content visible in static HTML.
3. Use a scene-local ref and `useScrollProgress` rather than global querying.
4. Define a small semantic set of CSS variables.
5. Document maximum movement.
6. Provide compact and reduced-motion behavior.
7. Add tests for content visibility, cleanup, and tier behavior.
