# QA Checklist

## Required commands

```bash
npm run check
npm run build:verify
npm run build
```

The first two commands are dependency-independent. `npm run build` requires installed Next.js, React, and TypeScript packages from a normal npm registry.

## Automated coverage

- [ ] Inquiry validation accepts valid input.
- [ ] Ten-guest capacity is enforced.
- [ ] Date order is validated.
- [ ] Contact method is required.
- [ ] Honeypot input is rejected.
- [ ] User input is normalized and length-limited.
- [ ] Motion progress clamps correctly.
- [ ] Scroll progress is reversible.
- [ ] Room index calculation selects all five chapters.
- [ ] All 21 approved photographs remain in the catalogue.
- [ ] Every image derivative exists.
- [ ] Homepage chapter order matches the implementation plan.
- [ ] Arrival uses high-priority authentic media and concise copy.
- [ ] Header focus trap, Escape handling, and section contrast exist.
- [ ] Gallery filtering, dialog controls, and focus restoration remain.
- [ ] Cursor is limited to explicit media targets.
- [ ] Reduced-motion CSS removes pinned scenes and cursor enhancement.
- [ ] Essential controls retain native cursor behavior.

## Viewport matrix

- [ ] 1440 × 900
- [ ] 1280 × 800
- [ ] 1024 × 768
- [ ] 768 × 1024
- [ ] 430 × 932
- [ ] 390 × 844
- [ ] 360 × 800
- [ ] 200% browser zoom

## Visual checkpoints

- [ ] Arrival beginning, midpoint, and completion
- [ ] Editorial fact rail
- [ ] Architecture composition
- [ ] Desktop room progression
- [ ] Compact room scroll-snap
- [ ] Shared-spaces reveal
- [ ] Amenities inventory
- [ ] Location disclaimer
- [ ] Evening transition
- [ ] Inquiry surface
- [ ] Menu open state
- [ ] Gallery lightbox
- [ ] Reduced-motion homepage

## Keyboard and focus

- [ ] Skip link reaches main content.
- [ ] Header controls show visible focus.
- [ ] Menu opens from keyboard.
- [ ] Focus moves into the menu.
- [ ] Tab and Shift+Tab remain trapped while open.
- [ ] Escape closes the menu.
- [ ] Focus returns to the menu button.
- [ ] Gallery filters are operable by keyboard.
- [ ] Lightbox arrows work with keyboard.
- [ ] Closing the lightbox restores focus.
- [ ] Inquiry fields and errors are reachable in logical order.

## Motion and interaction

- [ ] Native scrolling remains reversible.
- [ ] No essential content depends on animation.
- [ ] No offscreen section runs a continuous RAF loop.
- [ ] Reduced motion removes pinned gaps.
- [ ] Compact screens have no custom cursor or pointer drift.
- [ ] Essential buttons do not use magnetic movement.
- [ ] Significant motion ends before inquiry interaction.

## Performance

- [ ] Combined initial hero media is at or below 450 KB.
- [ ] Only the hero photograph is eager/high priority.
- [ ] Remaining chapter and gallery media load lazily.
- [ ] Decorative foreground has fixed dimensions to avoid layout shift.
- [ ] No Three.js/WebGL bundle is present.
- [ ] No global cursor loop runs while inactive.

## Accuracy

- [ ] Guest, bedroom, bathroom, and distance facts match the approved source.
- [ ] Bed inventory is not assigned to specific rooms without evidence.
- [ ] The map is explicitly approximate.
- [ ] No unverified rate, availability, review, travel-time, or safety claim is added.
- [ ] Decorative artwork is documented as non-factual.
