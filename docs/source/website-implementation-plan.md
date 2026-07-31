# Villa Cinnamoon Castle Website Implementation Plan

**Project:** Villa Cinnamoon Castle, Hikkaduwa  
**Document type:** Implementation-ready website plan  
**Recommended release:** Single-property flagship website  
**Primary experience:** Authentic photography with lightweight 2.5D/parallax storytelling  
**Document status:** Draft for design and development kickoff  
**Prepared:** 31 July 2026

---

## 1. Executive Summary

Villa Cinnamoon Castle should launch as a focused, high-trust website for one accommodation property rather than as a broad real-estate marketplace.

The website must help families, groups, and remote-work guests quickly understand:

- What the villa is.
- Where it is located.
- How many people it accommodates.
- What the bedrooms, bathrooms, shared spaces, kitchen, workspace, garden, and parking look like.
- Which amenities are confirmed.
- How to ask about dates, pricing, and availability.

The strongest creative direction is a **cinematic but restrained 2.5D experience made from authentic property photographs**. Real photography should carry the factual story. Parallax, depth, masking, slow zoom, and layered transitions should add atmosphere without changing or inventing the property.

The minimum viable product should prioritize:

1. Accurate property information.
2. A clear, fast inquiry journey.
3. Responsive layouts designed separately for desktop and mobile.
4. Strong image handling for the supplied portrait-heavy media set.
5. Accessibility and reduced-motion behavior.
6. Search-engine-readable HTML content.
7. Performance budgets that prevent the visual experience from becoming slow or fragile.
8. A reusable content structure that can support another villa later without turning the first release into a multi-property platform.

A real-time 3D model, AI-generated room footage, marketplace search, user accounts, saved-property lists, comparison tools, and online booking/payment are **not required for the first release**.

---

## 2. Project Source Register

This plan is built primarily from the supplied project materials.

| ID | Source | Main contribution |
|---|---|---|
| **S1** | `Villa Cinnamoon Castle - Property Overview(2).md` | Confirmed property facts, capacity, room configuration, amenities, location, safety notes, exclusions, and host name. |
| **S2** | `VIlla Cinnamon Castle Selected Images.zip` | Twenty-one selected photographs, image groupings, dimensions, sequence, recommended roles, and asset-quality constraints. |
| **S3** | `Luxury Real Estate Website Plan.txt` | Recommendation to use authentic photography, lightweight 2.5D/parallax, selective real video, and minimal synthetic imagery. |
| **S4** | Supplied 3D-parallax implementation considerations | Progressive enhancement, mobile alternatives, accessibility, SEO, normal scrolling, performance tiers, graceful failure, and maintainable content architecture. |
| **S5** | Supplied high-end real-estate website blueprint | Luxury art direction, stable conversion UI, page structures, motion principles, CMS/data modeling, analytics, and phased delivery. |

### 2.1 Traceability convention

Important decisions in this document include source tags such as **[S1]** or **[S2, S3]**. These tags show which project materials informed the decision.

### 2.2 Brand-name normalization

Use **Villa Cinnamoon Castle** everywhere in user-facing copy. The image archive filename contains “Cinnamon,” but the property overview and photographed sign use “Cinnamoon.” Treat the archive spelling as a file-label inconsistency, not the brand name. **[S1, S2]**

---

## 3. Confirmed Property Facts

The following facts can be published after a final owner review.

| Topic | Confirmed information |
|---|---|
| Property | Entire home |
| Location | Hikkaduwa, Southern Province, Sri Lanka |
| Proximity | Approximately 3.5 km from Hikkaduwa town and main beach areas |
| Setting | Quiet inland residential/nature setting with tropical greenery |
| Capacity | Up to 10 guests |
| Bedrooms | 5 |
| Beds | 5 total: 4 Super King beds and 1 Queen bed |
| Cooling | 1 bedroom with air conditioning; remaining bedrooms with fans |
| Bathrooms | 2 full bathrooms |
| Hot water | Available |
| Kitchen | Full kitchen with cooking essentials and appliances |
| Work facilities | High-speed Wi-Fi and a dedicated workspace |
| Living facilities | TV, spacious indoor living areas, balcony, and porch |
| Laundry | Washing machine; no clothes dryer |
| Parking | Free gated parking on the premises |
| Exterior | Garden, tropical trees, green lawn |
| Host | Dampalla Gamage Devindu |
| Listing status | New listing; no reviews yet |
| Exterior security | Exterior security cameras are present |
| Smoke alarm | Not confirmed in the source material |
| Carbon monoxide alarm | Not confirmed in the source material |
| Central heating | Not included or required for the tropical climate |

**Source:** [S1]

---

## 4. Accuracy and Trust Guardrails

Every page, visual treatment, and campaign asset must follow these rules.

### 4.1 Claims that must not be made

Do not describe the property as:

- Beachfront.
- On the beach.
- Fully air-conditioned.
- A property with five bathrooms.
- A property with a pool.
- A hotel or staffed resort.
- An instant-booking property unless a booking system is later confirmed.
- A highly rated property while it remains a new listing without reviews.
- A property with smoke or carbon-monoxide alarms unless the host verifies them.

### 4.2 Visuals that must not be fabricated

Do not generate or composite:

- A swimming pool.
- Different furniture.
- Additional bedrooms or bathrooms.
- Artificial sea views from the property.
- Larger rooms than the photographs show.
- Renovations that have not been completed.
- People presented as actual guests.
- Fake reviews or testimonial portraits.

Decorative motion may be generated only when it cannot be mistaken for a factual representation of the villa. Examples include abstract map transitions, subtle grain, light texture, or non-specific foliage particles. **[S3]**

### 4.3 Safety wording

Use careful language for unconfirmed safety items:

> “Exterior security cameras are present. Please contact the host for the latest details about smoke and carbon-monoxide alarms.”

Do not place ambiguous alarm information in a promotional headline. Present it in a practical information or policies section.

---

## 5. Product Vision

Create a calm, premium digital experience that feels like arriving at the property through its garden, entering its shared spaces, moving upstairs, seeing the rooms, and then settling into a simple inquiry flow.

The experience should feel:

- Tropical.
- Private.
- Spacious.
- Honest.
- Warm rather than flashy.
- Cinematic without becoming theatrical.
- Easy to understand on the first visit.

### 5.1 Core product principle

> Build a complete, fast accommodation website first. Add parallax as progressive enhancement.

The site must remain fully usable if animation is disabled, JavaScript partially fails, the visitor uses a low-powered phone, or the browser does not support advanced graphics. **[S4, S5]**

---

## 6. Project Goals

### 6.1 Primary goals

1. Generate qualified inquiries about availability and pricing.
2. Communicate the villa’s suitability for families and groups of up to ten.
3. Make the five-bedroom layout and practical amenities easy to understand.
4. Establish trust through authentic imagery and precise claims.
5. Emphasize the quiet green setting while explaining that Hikkaduwa town and beach areas are approximately 3.5 km away.
6. Provide a high-quality mobile experience.
7. Create a reusable foundation for future property content.

### 6.2 Secondary goals

- Encourage direct calls or messaging where the host approves those channels.
- Support social sharing with a strong preview image and concise property summary.
- Provide a destination-oriented entry point for organic search.
- Measure which property sections and calls to action lead to inquiries.
- Allow the host or administrator to update contact details, practical information, and selected content without rebuilding the site.

### 6.3 Non-goals for the first release

- A marketplace with many listings.
- User accounts.
- Property comparison.
- Saved-property collections.
- Complex search filters.
- Live pricing engine.
- Online payment.
- Automated check-in.
- Full digital twin.
- Real-time architectural 3D.
- AI-generated property walkthrough.
- Custom native mobile application.

---

## 7. Target Audiences

### 7.1 Families and extended families

**Needs**

- Capacity and bed configuration.
- Number of bathrooms.
- Kitchen and laundry information.
- Parking.
- A clear sense of shared space.
- Practical information about the distance to town and beach.

**Primary journey**

Landing page → property summary → bedrooms → kitchen/amenities → location → inquiry.

### 7.2 Groups of friends

**Needs**

- Ten-guest capacity.
- Distinct bedrooms.
- Shared spaces.
- Parking.
- Location and access.
- Date and price inquiry.

**Primary journey**

Social link → gallery → quick facts → location → contact or inquiry.

### 7.3 Remote workers or workation guests

**Needs**

- Wi-Fi.
- Dedicated workspace.
- Quiet setting.
- Length-of-stay inquiry.
- Kitchen and laundry facilities.

**Primary journey**

Search result → workspace section → room and amenity details → long-stay inquiry.

### 7.4 Travel planner or group organizer

**Needs**

- A link that can be shared.
- Clear factual summary.
- Gallery.
- Guest count and bed layout.
- Contact details.
- A confirmation response after inquiry.

### 7.5 Host or content administrator

**Needs**

- A simple way to update:
  - Contact channels.
  - Inquiry recipient.
  - Hero copy.
  - Availability note.
  - Rates or “price on request.”
  - Policies.
  - Selected images.
  - SEO fields.
  - Location notes.

---

## 8. Primary User Journeys

### Journey A — Check whether the villa fits a group

1. Visitor sees the name, location, and “up to 10 guests.”
2. Visitor opens “At a glance.”
3. Visitor confirms 5 bedrooms, 5 beds, and 2 bathrooms.
4. Visitor reviews bedroom images and cooling details.
5. Visitor submits dates, guest count, and contact details.

### Journey B — Understand the atmosphere

1. Visitor arrives through the exterior hero.
2. Scroll reveals the gate, garden, porch, and interior.
3. Visitor sees shared areas, balcony greenery, workspace, and bedrooms.
4. Visitor opens the full gallery.
5. Visitor reaches the inquiry panel without losing context.

### Journey C — Verify practical facilities

1. Visitor goes directly to “Amenities.”
2. Visitor confirms kitchen, Wi-Fi, workspace, washing machine, hot water, TV, and gated parking.
3. Visitor reads the practical and safety notes.
4. Visitor asks a specific question.

### Journey D — Mobile inquiry from a social link

1. Visitor opens a deep link on a phone.
2. Static or lightweight hero loads quickly.
3. A fixed bottom action exposes “Check dates.”
4. A bottom sheet collects minimum information.
5. Visitor sees a clear confirmation and expected response channel.

---

## 9. Information Architecture

The first release should use a small, deliberate route structure.

```text
/
├── /the-villa
├── /rooms
├── /gallery
├── /location
├── /contact
├── /privacy
├── /terms
└── /accessibility
```

### 9.1 Route responsibilities

| Route | Purpose |
|---|---|
| `/` | Brand statement, core property story, main inquiry conversion path |
| `/the-villa` | Detailed description, shared spaces, amenities, practical information |
| `/rooms` | Five-bedroom presentation, bed configuration, cooling, bathrooms |
| `/gallery` | Complete image gallery with category filters |
| `/location` | Approximate location, distance to Hikkaduwa, local context, access notes |
| `/contact` | Standalone inquiry form and approved contact channels |
| `/privacy` | Privacy notice for inquiry and analytics data |
| `/terms` | Website terms and factual-listing disclaimer |
| `/accessibility` | Accessibility statement and contact route for assistance |

### 9.2 Why not build a property-search section now?

The available project content describes one property. Building filters, result grids, map/list synchronization, comparisons, and saved listings would add significant complexity without serving the current inventory. The data model should be reusable, but the interface should remain focused. **[S1, S5]**

---

## 10. Homepage Structure

The homepage should work as a complete narrative and conversion page.

### 10.1 Header

**Desktop**

- Wordmark or text logo.
- The Villa.
- Rooms.
- Gallery.
- Location.
- “Check dates” primary action.

**Mobile**

- Compact wordmark.
- Menu button.
- Persistent bottom action: “Check dates.”

**Behavior**

- Transparent over the hero only when contrast is safe.
- Becomes a stable solid header after the hero.
- Never disappears for a long sequence.
- Keyboard focus remains visible.
- No hover-only navigation.

### 10.2 Hero — “Arrival”

**Core content**

- Villa Cinnamoon Castle.
- Hikkaduwa, Sri Lanka.
- “A peaceful private villa for families and groups of up to 10.”
- Primary action: “Check dates.”
- Secondary action: “Explore the villa.”

**Desktop visual treatment**

The recommended opening image is portrait-oriented and modest in resolution. Do not stretch it as a 4K full-bleed background. Use a full-height editorial hero with:

- Text in a stable left column.
- `01_hero_exterior_day.jpg` in a tall architectural frame.
- Soft ambient background derived from neutral color and blurred foliage, not invented scenery.
- A masked transition to `03_garden_gate_reveal.jpg`.

**Mobile visual treatment**

- The hero image may fill most of the viewport because its portrait orientation is appropriate.
- Place text in a controlled contrast panel rather than directly over complex foliage.
- Keep the first call to action visible without requiring a scroll.

### 10.3 Quick facts

Display as accessible HTML, not canvas text:

- Up to 10 guests.
- 5 bedrooms.
- 5 beds.
- 2 bathrooms.
- 3.5 km from Hikkaduwa town.
- Gated parking.
- Wi-Fi and workspace.

Each item should link to the relevant section.

### 10.4 Story chapter — “A quieter side of Hikkaduwa”

Use:

- `03_garden_gate_reveal.jpg`
- `07_balcony_tropical_view.jpg`
- `08_green_garden_outlook.jpg`

Copy should emphasize the green inland setting and access to town without calling the villa beachfront.

### 10.5 Story chapter — “Space to gather”

Use:

- `09_living_dining_overview.jpg`
- `10_staircase_living_flow.jpg`
- `11_double_height_stair_detail.jpg`
- `12_upper_landing_high_resolution.jpg`

Content:

- Two-story layout.
- Shared living and dining areas.
- Balcony and upper landing.
- Space for families or groups.

### 10.6 Story chapter — “Five rooms for up to ten guests”

Use:

- `16_bedroom_1_master_high_resolution.jpg`
- `17_bedroom_2_air_conditioned.jpg`
- `18_bedroom_3_wide.jpg`
- `19_bedroom_4_four_poster.jpg`
- `20_bedroom_5_white_linen.jpg`

Content:

- Five bedrooms.
- Four Super King beds.
- One Queen bed.
- One air-conditioned bedroom.
- Fans in the remaining bedrooms.
- Two full bathrooms with hot water.

Do not infer the exact bed type for an individual photograph unless the host maps each image to the bed inventory.

### 10.7 Story chapter — “Stay, cook, and work”

Use:

- `13_upper_workspace_lounge.jpg`
- `14_full_kitchen_wide.jpg`
- `15_kitchen_laundry_appliances.jpg`

Content:

- Dedicated workspace.
- High-speed Wi-Fi.
- Full kitchen.
- Washing machine.
- Dining area.

### 10.8 Practical amenities

Use a calm icon-and-text layout:

- Wi-Fi.
- Workspace.
- Full kitchen.
- TV.
- Hot water.
- Washing machine.
- Furnished balcony and porch.
- Garden.
- Gated parking.

Avoid using icons without text labels.

### 10.9 Location

Content:

- Hikkaduwa, Southern Province.
- Approximately 3.5 km from Hikkaduwa town and main beach areas.
- Quiet inland setting.
- Approximate map unless the owner approves the exact pin.

Use `02_property_sign_arrival.jpg` as a visual bridge into the location section.

### 10.10 Evening close

Use `06_exterior_night_ambience.jpg` for a slow transition from exploration to inquiry.

Motion should settle completely before the form.

### 10.11 Inquiry section

Headline example:

> Plan your stay at Villa Cinnamoon Castle

Minimum fields:

- Name.
- Email.
- Phone or preferred contact channel.
- Check-in date.
- Check-out date.
- Number of guests.
- Message.

Optional first-step field:

- Inquiry type:
  - Check availability.
  - Ask about pricing.
  - Long-stay inquiry.
  - General question.

The form must not imply confirmed availability. The completion message should say that the inquiry has been received and explain the expected reply route.

### 10.12 Footer

- Property name.
- Hikkaduwa, Sri Lanka.
- Approved phone, email, and messaging links.
- Navigation.
- Privacy.
- Terms.
- Accessibility.
- Copyright.
- Social links only when active and approved.

---

## 11. Page-Level Requirements

### 11.1 The Villa page

Include:

1. Property introduction.
2. Shared-space gallery.
3. Kitchen and dining.
4. Workspace.
5. Exterior, garden, porch, balcony, and parking.
6. Amenities list.
7. Practical information.
8. Safety and exclusions.
9. Inquiry call to action.

### 11.2 Rooms page

Include:

1. Accommodation summary.
2. Five-room card grid or horizontal sequence.
3. Bed configuration.
4. Cooling disclosure.
5. Bathroom information.
6. Full room gallery.
7. Inquiry call to action.

Room cards should use neutral labels such as “Bedroom 1” until the host approves names.

### 11.3 Gallery page

Category filters:

- Arrival and exterior.
- Tropical setting.
- Shared spaces.
- Kitchen and amenities.
- Bedrooms and bathroom.

Requirements:

- Native aspect ratios.
- No forced landscape stretch.
- Full-screen lightbox.
- Keyboard controls.
- Swipe controls on touch.
- Image count.
- Descriptive captions.
- Close button always visible.
- No automatic slideshow.
- Deep-link support for an image where practical.

### 11.4 Location page

Include:

- Approximate map.
- 3.5 km relationship to Hikkaduwa town and beach areas.
- Written access context.
- Approved transport or landmark information when provided.
- A note that exact arrival instructions are shared with confirmed guests, if that is the host’s policy.

Do not invent travel times.

### 11.5 Contact page

Include:

- Short property summary.
- Inquiry form.
- Approved direct-contact options.
- Clear privacy note.
- Error, loading, success, and retry states.
- A non-JavaScript fallback where the selected form service allows it.

---

## 12. Asset Inventory and Placement Plan

The archive contains 21 selected photographs.

### 12.1 Asset-quality findings

- Most source images are 720–960 pixels wide.
- Most images are portrait-oriented.
- Two images are substantially higher resolution:
  - `12_upper_landing_high_resolution.jpg`
  - `16_bedroom_1_master_high_resolution.jpg`
- Landscape images are available for parking, porch, balcony, kitchen, and one bedroom.
- There is no supplied drone footage, 360-degree panorama, floor plan, or architectural model.
- There is one bathroom photograph.
- There is no dedicated wide exterior image suitable for unrestricted large-desktop cropping.
- The existing set is sufficient for a premium editorial layout, but not for a full digital twin or a room-to-room 360 tour.

### 12.2 Detailed media map

| # | Asset | Primary use | Treatment | Mobile behavior |
|---:|---|---|---|---|
| 1 | `01_hero_exterior_day.jpg` | Opening hero | Tall framed image, slow push, limited crop | Near-full viewport portrait |
| 2 | `02_property_sign_arrival.jpg` | Location transition | Sign-focused crop, subtle depth | Static image with caption |
| 3 | `03_garden_gate_reveal.jpg` | Arrival reveal | Foreground mask from fence/tree; depth layers | Reduced transform or static |
| 4 | `04_gated_parking.jpg` | Parking amenity | Wide content image | Full-width card |
| 5 | `05_front_porch_entry.jpg` | Entry architecture | Section divider or wide reveal | Full-width card |
| 6 | `06_exterior_night_ambience.jpg` | Evening close | Slow low-amplitude zoom | Static or short fade |
| 7 | `07_balcony_tropical_view.jpg` | Indoor-to-outdoor bridge | Wide masked reveal | Full-width landscape |
| 8 | `08_green_garden_outlook.jpg` | Nature interlude | Slow vertical pan within bounds | Static portrait |
| 9 | `09_living_dining_overview.jpg` | Shared-space opener | Editorial portrait panel | Swipe gallery item |
| 10 | `10_staircase_living_flow.jpg` | Vertical movement cue | Small directional parallax | Static if reduced motion |
| 11 | `11_double_height_stair_detail.jpg` | Architectural depth | Gentle tilt/scale; no spinning | Static with crop control |
| 12 | `12_upper_landing_high_resolution.jpg` | Premium interior feature | Large full-width scene | Responsive high-quality image |
| 13 | `13_upper_workspace_lounge.jpg` | Workspace feature | Portrait card with facts | Swipe gallery item |
| 14 | `14_full_kitchen_wide.jpg` | Kitchen hero | Wide editorial image | Full-width landscape |
| 15 | `15_kitchen_laundry_appliances.jpg` | Appliance detail | Supporting card | Portrait card |
| 16 | `16_bedroom_1_master_high_resolution.jpg` | Primary room feature | Large room scene | Responsive high-quality image |
| 17 | `17_bedroom_2_air_conditioned.jpg` | AC disclosure | Show visible AC with factual label | Portrait room card |
| 18 | `18_bedroom_3_wide.jpg` | Room variety | Wide card | Full-width landscape |
| 19 | `19_bedroom_4_four_poster.jpg` | Room variety | Portrait card | Swipe gallery item |
| 20 | `20_bedroom_5_white_linen.jpg` | Room variety | Portrait card | Swipe gallery item |
| 21 | `21_bathroom_hot_water_shower.jpg` | Bathroom and hot water | Practical detail card | Portrait card |

**Source:** [S2]

### 12.3 Required media-processing pipeline

For each image:

1. Preserve the untouched original.
2. Record source filename and selected filename.
3. Correct rotation through metadata normalization.
4. Export responsive widths appropriate to the source:
   - 480 px.
   - 720 px.
   - 960 px.
   - 1280 px only when the source supports it.
   - Larger derivatives only for the two high-resolution images.
5. Produce AVIF and WebP variants plus a safe fallback.
6. Generate a low-quality placeholder.
7. Preserve natural aspect ratio.
8. Set focal coordinates in the content system.
9. Add a human-written alt description.
10. Store a factual caption separately from alt text.
11. Avoid aggressive sharpening and artificial detail enhancement.
12. Strip unnecessary metadata from public derivatives while retaining attribution records internally.

### 12.4 Suggested alt-text direction

Alt text should describe visible content without marketing language.

Examples:

- “Two-story white villa framed by mature tropical trees.”
- “Gated driveway and covered parking area beside the villa.”
- “Dining area and staircase in the villa’s shared living space.”
- “Upper-floor workspace with a long table and seating.”
- “Bedroom with an air-conditioning unit near the vaulted ceiling.”
- “Bathroom shower with a wall-mounted hot-water unit.”

Do not include “luxury,” “best,” “spacious,” or bed sizes unless those details are visually certain and relevant.

---

## 13. Content Plan

### 13.1 Recommended positioning statement

> A peaceful private villa for families and groups near Hikkaduwa, with five bedrooms, home-style amenities, a dedicated workspace, and a quiet tropical setting.

### 13.2 Core message hierarchy

1. Private villa near Hikkaduwa.
2. Up to 10 guests.
3. Five bedrooms.
4. Quiet tropical setting.
5. Kitchen, Wi-Fi, workspace, hot water, washing machine, and gated parking.
6. Approximately 3.5 km from Hikkaduwa town and main beach areas.
7. Inquiry for dates and pricing.

### 13.3 Copy principles

- Prefer precise facts over generic luxury language.
- Keep hero copy short.
- Use longer explanatory copy in stable sections.
- Do not place important qualifications only in tooltips.
- Use “near Hikkaduwa” rather than “in central Hikkaduwa.”
- Use “main beach areas are approximately 3.5 km away” rather than implying walkability.
- Explain that only one bedroom has air conditioning.
- Treat “high-speed Wi-Fi” as a host-provided claim; add measured speed only after a verified test.
- Avoid “perfect,” “best,” and “unforgettable” unless supported by reviews or brand voice approval.

### 13.4 Content still required from the owner

- Approved booking or inquiry email.
- Approved phone and messaging number.
- Response-time expectation.
- Pricing presentation.
- Availability source.
- Check-in and check-out times.
- Minimum stay.
- Cancellation policy.
- Children policy.
- Pet policy.
- Smoking policy.
- Events or parties policy.
- Visitor policy.
- Quiet hours.
- Exact address and map-pin privacy decision.
- Accessibility information.
- Transport and airport-transfer information.
- Wi-Fi speed test.
- Confirmation of smoke alarm.
- Confirmation of carbon-monoxide alarm.
- Camera locations and disclosure wording.
- Photo rights approval.
- Host profile copy and approved photograph, if desired.

No missing field should be filled with an assumption.

---

## 14. Visual Design System

### 14.1 Art direction

The supplied photography suggests a visual system based on:

- Warm ivory.
- Deep charcoal.
- Muted cinnamon or terracotta.
- Tropical green.
- Soft stone.
- Warm evening light.

### 14.2 Recommended color roles

| Token | Role |
|---|---|
| `--surface-primary` | Warm ivory page background |
| `--surface-dark` | Deep charcoal or near-black evening section |
| `--text-primary` | High-contrast charcoal |
| `--text-on-dark` | Soft off-white |
| `--accent-primary` | Muted cinnamon/terracotta for primary actions |
| `--accent-secondary` | Tropical green for subtle highlights |
| `--border-subtle` | Warm gray |
| `--status-success` | Accessible green used only for status |
| `--status-error` | Accessible red used only for validation |

Final values must pass contrast testing in the actual UI.

### 14.3 Typography

Use:

- One editorial serif for major titles.
- One clear sans-serif for navigation, body copy, facts, forms, and controls.

Requirements:

- Host fonts locally or use a privacy-compatible delivery method.
- Limit font families and weights.
- Use a system-font fallback stack.
- Avoid thin body text.
- Keep body measure readable.
- Never place long paragraphs over images.

### 14.4 Layout principles

- Generous vertical rhythm.
- Editorial asymmetry on desktop.
- Simple single-column flow on mobile.
- Image frames that respect portrait assets.
- Stable two-dimensional UI over or beside motion scenes.
- Strong separation between storytelling sections and transactional forms.
- Maximum content width for factual copy.
- Full-width scenes only when source resolution and orientation support them.

### 14.5 Component inventory

- Header.
- Mobile navigation drawer.
- Hero.
- Quick-facts bar.
- Editorial image-and-copy section.
- Parallax image layer.
- Room card.
- Amenity list.
- Gallery grid.
- Lightbox.
- Location panel.
- Approximate map.
- Practical-information accordion.
- Safety notice.
- Sticky inquiry card.
- Mobile bottom action.
- Inquiry form.
- Success message.
- Error alert.
- Footer.
- Skip link.
- Reduced-motion adaptation.

---

## 15. Motion and 2.5D System

### 15.1 Motion objective

Motion should clarify progression from arrival to interior to rooms to inquiry. It should not exist only as decoration.

### 15.2 Recommended techniques

Use:

- CSS transforms.
- Image masks.
- Low-amplitude scale.
- Layered foreground and background movement.
- Opacity transitions.
- Section pinning only for short, deliberate sequences.
- Scroll progress with damping.
- Optional depth maps for one or two hero scenes.

Avoid in the MVP:

- Real-time 3D models.
- Continuous WebGL render loops.
- Cursor-controlled camera movement.
- Large rotations.
- Scroll hijacking.
- Automatic audio.
- Long intro sequences.
- Motion that prevents reverse scrolling.
- Motion-dependent content.

### 15.3 Motion tokens

Project starting values:

| Token | Starting range |
|---|---|
| Micro-interaction duration | 120–220 ms |
| Section transition duration | 400–800 ms |
| Maximum foreground travel | 24–48 px |
| Maximum background travel | 8–24 px |
| Image scale | 1.00–1.05 |
| Text reveal travel | 8–20 px |
| Pinned sequence length | No more than approximately one viewport on mobile and two on desktop |
| Scroll smoothing | Damped, interruptible, never locked |

These are design limits, not mandatory values for every component.

### 15.4 Homepage motion storyboard

#### Scene 1 — Arrival

- Hero text is stable.
- Exterior image has a slow push from scale 1.00 to no more than 1.03.
- Tree and foliage masks move slightly faster than the building.
- The primary call to action remains clickable throughout.

#### Scene 2 — Gate reveal

- `03_garden_gate_reveal.jpg` enters through a mask based on the tree and fence.
- The foreground moves slightly more than the villa.
- No artificial background replacement.

#### Scene 3 — Porch and interior

- `05_front_porch_entry.jpg` resolves into `09_living_dining_overview.jpg`.
- The transition uses a doorway-shaped mask or a simple crossfade.
- Text moves into a stable content column.

#### Scene 4 — Vertical space

- `10_staircase_living_flow.jpg` and `11_double_height_stair_detail.jpg` use a gentle upward progression.
- Avoid rotating the architecture.
- The sequence ends on `12_upper_landing_high_resolution.jpg`.

#### Scene 5 — Rooms

- Bedroom cards move through a standard horizontal carousel or vertical editorial stack.
- Do not create a false continuous walkthrough between rooms.

#### Scene 6 — Evening and inquiry

- `06_exterior_night_ambience.jpg` fades into a dark surface.
- All movement stops.
- Inquiry content appears in a stable form layout.

### 15.5 Reduced-motion behavior

When the user requests reduced motion:

- Disable parallax.
- Disable large scale changes.
- Disable pinned camera sequences.
- Use direct section changes or short opacity transitions.
- Do not autoplay background video.
- Keep all content in the same reading order.
- Preserve every action and link.

### 15.6 Mobile motion behavior

- Prefer static images and simple reveals.
- Do not use hover.
- Reduce simultaneous layers.
- Avoid long pinned sections.
- Preserve native scroll momentum.
- Keep the inquiry action within thumb reach.
- Do not load any advanced scene before the main content becomes usable.

---

## 16. Technical Architecture

### 16.1 Recommended stack

- Server-rendered React framework using an app-router architecture.
- TypeScript.
- Semantic HTML.
- Modern CSS with design tokens.
- A focused animation library for the few scroll-driven scenes.
- Server-side inquiry endpoint.
- Typed content layer or headless CMS.
- Managed media storage and CDN.
- Transactional email service.
- Privacy-aware analytics.
- Automated tests and continuous deployment.

A practical implementation can use Next.js and TypeScript, as proposed in the project blueprint. Do not include React Three Fiber or Three.js in the first bundle unless a later proof of concept demonstrates a unique need. **[S4, S5]**

### 16.2 Rendering strategy

- Server-render all core property text.
- Generate static property and editorial routes where possible.
- Keep inquiry submission server-side.
- Load the gallery client code only when needed.
- Load motion code only on routes and sections that use it.
- Lazy-load the map after user intent or when near the viewport.
- Keep all essential facts outside canvas or WebGL.

### 16.3 Recommended project structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── the-villa/
│   │   └── page.tsx
│   ├── rooms/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   ├── location/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy/
│   ├── terms/
│   ├── accessibility/
│   └── api/
│       └── inquiries/
│           └── route.ts
├── components/
│   ├── layout/
│   ├── hero/
│   ├── story/
│   ├── rooms/
│   ├── amenities/
│   ├── gallery/
│   ├── location/
│   ├── inquiry/
│   └── accessibility/
├── content/
│   ├── property.ts
│   ├── rooms.ts
│   ├── amenities.ts
│   ├── media.ts
│   └── policies.ts
├── lib/
│   ├── analytics/
│   ├── email/
│   ├── forms/
│   ├── media/
│   ├── security/
│   └── validation/
├── styles/
│   ├── tokens.css
│   └── globals.css
└── tests/
    ├── unit/
    ├── integration/
    └── e2e/
```

### 16.4 Content architecture decision

For the first release, choose between:

#### Option A — Typed local content

Best when:

- One person controls changes.
- Property facts do not change often.
- The developer can handle releases.
- The fastest launch is the priority.

#### Option B — Headless CMS

Best when:

- The host needs direct editing.
- Rates, availability notes, policies, or images change frequently.
- More properties are likely.
- Editorial location content is planned.

**Recommendation:** implement a typed content model from day one and connect it to a headless CMS if the owner confirms a non-developer editing requirement. Do not add a CMS merely to store one static page.

---

## 17. Content Data Model

### 17.1 Property record

```ts
type Property = {
  id: string;
  slug: string;
  name: string;
  propertyType: "entire-home";
  status: "active" | "unavailable" | "draft";
  summary: string;
  description: string;
  location: {
    locality: string;
    region: string;
    country: string;
    distanceToTownKm: number;
    exactCoordinates?: {
      latitude: number;
      longitude: number;
    };
    publicMapPrecision: "exact" | "approximate";
  };
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  bedConfiguration: Array<{
    type: "super-king" | "queen";
    quantity: number;
  }>;
  cooling: {
    airConditionedBedrooms: number;
    otherBedrooms: "fans";
  };
  amenities: string[];
  exclusions: string[];
  safety: {
    exteriorCameras: boolean;
    smokeAlarm: "confirmed" | "not-confirmed";
    carbonMonoxideAlarm: "confirmed" | "not-confirmed";
  };
  host: {
    name: string;
    displayProfile: boolean;
  };
  media: MediaAsset[];
  inquiry: {
    mode: "inquiry-only" | "booking";
    priceDisplay: "on-request" | "from-price" | "hidden";
  };
  seo: {
    title: string;
    description: string;
    socialImageId: string;
  };
};
```

### 17.2 Media record

```ts
type MediaAsset = {
  id: string;
  sourceFilename: string;
  selectedFilename: string;
  category:
    | "arrival-exterior"
    | "tropical-setting"
    | "shared-spaces"
    | "kitchen-amenities"
    | "bedrooms-bath";
  width: number;
  height: number;
  alt: string;
  caption?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
  recommendedRole: string;
  priority: boolean;
  rightsApproved: boolean;
};
```

### 17.3 Inquiry record

```ts
type Inquiry = {
  id: string;
  createdAt: string;
  propertyId: string;
  name: string;
  email?: string;
  phone?: string;
  preferredContact?: "email" | "phone" | "messaging";
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  inquiryType:
    | "availability"
    | "pricing"
    | "long-stay"
    | "general";
  message?: string;
  sourcePage: string;
  campaign?: string;
  consentAccepted: boolean;
  status: "new" | "acknowledged" | "closed";
};
```

### 17.4 Source-of-truth labels

Each editable field should be marked internally as:

- Confirmed from source.
- Owner confirmed.
- Pending confirmation.
- Derived presentation copy.

This prevents future editorial edits from turning assumptions into facts.

---

## 18. Inquiry System

### 18.1 MVP behavior

1. Validate fields in the browser for convenience.
2. Revalidate all fields on the server.
3. Reject malformed dates and guest counts above ten.
4. Apply rate limiting.
5. Use a honeypot or equivalent low-friction spam defense.
6. Store or forward the inquiry through an approved service.
7. Send a host notification.
8. Send a simple acknowledgment to the guest when an email address is provided.
9. Log delivery failures.
10. Display a success state that does not claim availability is confirmed.

### 18.2 Validation rules

- Name: required.
- At least one contact method: required.
- Email: validate only when supplied.
- Phone: normalize and validate conservatively.
- Check-out: must be after check-in.
- Guests: integer from 1 to 10.
- Message: length limited.
- Consent: required where legally necessary.
- Never include sensitive payment information in the form.

### 18.3 Success message example

> Thank you. Your inquiry has been sent to the Villa Cinnamoon Castle host. Your dates are not confirmed until the host replies.

### 18.4 Failure behavior

- Preserve entered values.
- Explain the error without exposing server details.
- Offer an approved alternative contact route.
- Provide a retry action.
- Log an error identifier for support.

---

## 19. Location and Map Strategy

### 19.1 Public map behavior

Use an approximate map by default.

Reasons:

- The source provides proximity, not a verified coordinate.
- Exact address exposure may create privacy or security concerns.
- Arrival instructions can be shared after confirmation if the owner prefers.

### 19.2 Map content

- Hikkaduwa label.
- Approximate villa area.
- Written “approximately 3.5 km from Hikkaduwa town and main beach areas.”
- A non-map text alternative.
- No unverified travel-time estimate.

### 19.3 Future enhancement

After coordinates and privacy rules are approved:

- Add exact or approximate pin.
- Add selected nearby places.
- Add verified distance or travel-time data.
- Keep location details editable.

---

## 20. SEO and Social Sharing

### 20.1 Indexable content

Every route should include:

- Unique title.
- Unique description.
- One clear page heading.
- Canonical URL.
- Semantic property facts.
- Descriptive image metadata.
- Internal links.
- Share image.
- Structured lodging or vacation-rental data where applicable.

### 20.2 Recommended keyword themes

Use naturally, not repetitively:

- Villa in Hikkaduwa for 10 guests.
- Five-bedroom villa near Hikkaduwa.
- Family villa in Southern Sri Lanka.
- Group accommodation near Hikkaduwa.
- Villa with workspace and kitchen near Hikkaduwa.

Do not target “beachfront villa” unless the property changes.

### 20.3 Homepage metadata draft

**Title**

> Villa Cinnamoon Castle | Five-Bedroom Stay Near Hikkaduwa

**Description**

> Explore Villa Cinnamoon Castle, a peaceful five-bedroom private home for up to 10 guests approximately 3.5 km from Hikkaduwa town, with a kitchen, Wi-Fi, workspace, garden, and gated parking.

### 20.4 Social image

Use a carefully composed derivative of `01_hero_exterior_day.jpg` or `03_garden_gate_reveal.jpg`. Because both are portrait assets, build a branded social card with the original photograph in a frame rather than cropping away the building.

---

## 21. Accessibility Requirements

Target an AA-level accessible experience.

### 21.1 Required behavior

- Skip-to-content link.
- Logical heading hierarchy.
- Landmarks for header, navigation, main, form, and footer.
- Full keyboard navigation.
- Visible focus indicators.
- Text labels for every control.
- Form errors linked to the relevant field.
- Error summary for failed submissions.
- Sufficient color contrast.
- Meaningful alt text.
- Empty alt text for purely decorative derivatives.
- Captions or text descriptions for any future video.
- No automatic audio.
- No content available only through hover.
- Reduced-motion support.
- Lightbox focus trapping and focus return.
- Accessible close buttons.
- Non-map location alternative.
- Contact route for accessibility assistance.

### 21.2 Motion accessibility acceptance test

With reduced motion enabled:

- No element should make a large spatial movement.
- Reading order must remain unchanged.
- The page must not contain blank pinned gaps.
- The inquiry form must be immediately reachable.
- Gallery controls must behave normally.

---

## 22. Performance Plan

### 22.1 Performance principles

- HTML and core styling first.
- Hero media next.
- Motion enhancement after interactivity.
- Gallery images on demand.
- Map on intent.
- No 3D engine in the MVP bundle.
- Pause all off-screen animation work.
- Use responsive image dimensions.
- Avoid layout shifts by reserving image space.

### 22.2 Project performance budgets

These are internal release budgets to be tested on a mid-range mobile profile.

| Area | Budget |
|---|---:|
| Initial compressed JavaScript | Aim for 170 KB or less before optional gallery/map chunks |
| Initial hero image transfer | Aim for 300 KB or less on mobile |
| Initial font transfer | Aim for 120 KB or less |
| Layout shift | No visible image or form jumps |
| Main-thread animation work | No continuous off-screen work |
| Gallery | Load only thumbnails initially; full image on open |
| Map | Not part of the critical initial route |
| Motion | Maintain smooth native scrolling; degrade when device capability is low |

### 22.3 Capability tiers

#### Full

- Desktop or capable device.
- Layered hero.
- Short parallax scenes.
- High-quality images within resolution limits.

#### Lightweight

- Reduced layer count.
- CSS transforms.
- No depth-map processing.
- Shorter transitions.

#### Basic

- Static images.
- Standard vertical flow.
- No pinned sequences.
- Complete content and inquiry functionality.

Capability detection must never hide content.

### 22.4 Image-loading priorities

1. Hero visual.
2. First quick-facts content.
3. First story image near the fold.
4. Remaining content images as they approach the viewport.
5. Gallery full-resolution assets only after interaction.

---

## 23. Security and Privacy

### 23.1 Inquiry endpoint

- Server-side validation.
- Rate limiting.
- Spam defense.
- Request-size limit.
- No secrets in client code.
- Secure logging without storing unnecessary message content.
- Error responses that do not expose stack traces.
- Dependency and vulnerability checks in CI.

### 23.2 Privacy

The privacy notice must explain:

- What inquiry data is collected.
- Why it is collected.
- Who receives it.
- How long it is retained.
- Which analytics or anti-spam services are used.
- How a user can request deletion or correction.
- Whether data is transferred to third-party providers.

### 23.3 Analytics

Do not send:

- Full inquiry messages.
- Email addresses.
- Phone numbers.
- Exact dates tied to a known person.

Use anonymous or pseudonymous event data where possible.

---

## 24. Analytics and Measurement Plan

### 24.1 Primary conversion events

| Event | Trigger |
|---|---|
| `inquiry_cta_click` | User opens the inquiry experience |
| `inquiry_start` | User begins entering information |
| `inquiry_submit` | Valid form submission reaches the server |
| `inquiry_success` | Server confirms successful processing |
| `contact_phone_click` | Approved phone link clicked |
| `contact_message_click` | Approved messaging link clicked |
| `contact_email_click` | Approved email link clicked |

### 24.2 Engagement events

- `hero_explore_click`
- `quick_fact_click`
- `gallery_open`
- `gallery_image_view`
- `gallery_category_change`
- `room_view`
- `amenity_expand`
- `location_map_open`
- `reduced_motion_active`
- `form_error`
- `inquiry_failure`

### 24.3 Context fields

- Route.
- Device class.
- Referrer category.
- Campaign identifiers.
- CTA placement.
- Motion tier.
- Gallery category.
- Error type without personal data.

### 24.4 Initial success measures

Track:

- Inquiry completion rate.
- Inquiry failures.
- CTA-to-form-start rate.
- Form-start-to-success rate.
- Mobile versus desktop conversion.
- Gallery engagement before inquiry.
- Most-viewed room and amenity sections.
- Performance by device tier.
- Abandonment during animated sections.

A motion effect that lowers inquiry completion or increases early exits should be simplified or removed.

---

## 25. Testing Strategy

### 25.1 Functional testing

- All navigation links.
- Anchor links.
- Mobile menu.
- Gallery filters.
- Lightbox open, next, previous, and close.
- Inquiry validation.
- Successful inquiry.
- Failed inquiry.
- Duplicate submission prevention.
- Direct-contact links.
- Map fallback.
- Reduced-motion mode.
- JavaScript failure fallback where feasible.

### 25.2 Content testing

- Property name spelling.
- Guest count.
- Bedroom count.
- Bed configuration.
- Bathroom count.
- AC wording.
- Distance wording.
- Amenities.
- Exclusions.
- Safety wording.
- Host name.
- No fabricated reviews.
- No pool or beachfront claims.

### 25.3 Responsive testing

At minimum:

- Small Android phone.
- Mid-range Android phone.
- Current and older iPhone profiles.
- Tablet portrait and landscape.
- Low-powered laptop.
- Standard desktop.
- Large desktop.

### 25.4 Input testing

- Touch.
- Mouse.
- Keyboard only.
- Screen-reader spot checks.
- Zoom to 200%.
- Reduced motion.
- High contrast where supported.
- Slow network.
- Disabled images.
- Failed third-party map.
- Failed email service.

### 25.5 Visual regression

Capture stable screenshots for:

- Homepage hero.
- Quick facts.
- Each main story chapter.
- Rooms grid.
- Gallery.
- Inquiry form.
- Form errors.
- Success state.
- Mobile navigation.
- Reduced-motion layout.

---

## 26. Browser and Failure Strategy

### 26.1 Graceful fallback

If motion code fails:

- Static images remain visible.
- Text remains in normal document flow.
- Navigation works.
- Forms work.
- No blank fixed-height scene remains.

If the map fails:

- Written location details remain.
- Inquiry still works.

If an image fails:

- Alt text and reserved layout remain.
- No critical fact disappears.

If the inquiry service fails:

- Values remain.
- The visitor receives an actionable error.
- An approved direct-contact method is shown.

---

## 27. Delivery Plan

A realistic implementation can be completed in approximately six to eight weeks by a small team, depending on owner response times, content approvals, and the selected inquiry/CMS services.

### Phase 0 — Confirmation and setup

**Estimated duration:** 2–3 working days

Tasks:

- Confirm project scope.
- Confirm brand spelling.
- Resolve all owner questions.
- Approve contact channels.
- Approve exact versus approximate map.
- Confirm image rights.
- Select hosting, form delivery, analytics, and content-editing approach.
- Establish repository, environments, and issue tracker.

**Exit criteria**

- No blocking content decision remains unknown.
- All external services have owners.
- The source-of-truth property sheet is approved.

### Phase 1 — UX and content architecture

**Estimated duration:** 4–6 working days

Tasks:

- Finalize sitemap.
- Create wireframes.
- Define desktop and mobile story flow.
- Write first-pass copy.
- Define form flow.
- Map all 21 images.
- Define reduced-motion variants.
- Review factual claims.

**Exit criteria**

- Every route has a purpose and content list.
- Every image has a planned role.
- Inquiry fields are approved.
- No user journey depends on animation.

### Phase 2 — Visual system and motion prototype

**Estimated duration:** 5–7 working days

Tasks:

- Establish color, typography, spacing, and components.
- Build responsive hero designs.
- Prototype gate reveal and interior transition.
- Test portrait-image treatment on wide screens.
- Prototype reduced-motion mode.
- Validate contrast and focus states.

**Exit criteria**

- Owner approves art direction.
- Motion works on a mid-range phone and desktop.
- Hero does not require artificial property imagery.
- The first meaningful content loads without motion code.

### Phase 3 — Core development

**Estimated duration:** 8–12 working days

Tasks:

- Build route structure.
- Implement header and footer.
- Build homepage sections.
- Build The Villa and Rooms pages.
- Build gallery and lightbox.
- Build Location and Contact pages.
- Implement content model.
- Implement responsive images.
- Add SEO metadata.
- Add legal placeholders for review.

**Exit criteria**

- Complete site works without advanced animation.
- Content is server-rendered.
- Mobile layout is complete.
- All source facts are represented accurately.

### Phase 4 — Inquiry, analytics, and hardening

**Estimated duration:** 4–6 working days

Tasks:

- Build server inquiry endpoint.
- Add validation and spam controls.
- Configure notification and acknowledgment.
- Add analytics events.
- Add privacy controls.
- Add security headers.
- Add error monitoring.
- Test service failures.

**Exit criteria**

- Inquiry succeeds end to end.
- Failure states are usable.
- No personal data enters analytics.
- Host receives a test inquiry.

### Phase 5 — Motion integration and optimization

**Estimated duration:** 4–6 working days

Tasks:

- Add approved hero and story motion.
- Add capability tiers.
- Add reduced-motion behavior.
- Code-split optional features.
- Optimize media derivatives.
- Pause off-screen work.
- Verify native scrolling.

**Exit criteria**

- Motion does not block content.
- Basic tier remains complete.
- No continuous off-screen animation.
- Mobile scroll remains responsive.

### Phase 6 — QA, content approval, and launch

**Estimated duration:** 5–7 working days

Tasks:

- Cross-browser and device testing.
- Accessibility review.
- Content and claim audit.
- Form delivery test.
- Analytics test.
- SEO checks.
- Redirect and error-page setup.
- Backup and rollback plan.
- Owner training.
- Soft launch.
- Post-launch monitoring.

**Exit criteria**

- Release checklist signed.
- No critical defects.
- Owner approves production content.
- Inquiry and direct-contact routes are verified.
- Rollback procedure is documented.

---

## 28. Prioritized Backlog

### P0 — Required for launch

- Approved property content.
- Responsive header and navigation.
- Homepage.
- The Villa page.
- Rooms page.
- Gallery.
- Location page.
- Contact page.
- Inquiry form.
- Approved contact links.
- Responsive image pipeline.
- Accessibility fundamentals.
- Reduced-motion mode.
- SEO metadata.
- Privacy and terms.
- Analytics for conversion.
- Error monitoring.
- Production deployment.
- Factual-claim review.

### P1 — Strong post-MVP enhancements

- Owner-editable CMS.
- Availability-status field.
- Verified rates display.
- Local area guide.
- Additional wide exterior photography.
- Professional host profile.
- Real short-form walkthrough video.
- Verified Wi-Fi speed.
- Shareable inquiry summary.
- Multi-language content.
- Better map landmarks.
- Seasonal content.

### P2 — Evaluate only after evidence

- 360-degree tour.
- Floor plan.
- Depth-map hero.
- Drone arrival video.
- Direct booking.
- Payment.
- CRM integration.
- Additional villas.
- Property search.
- Account-based saved stays.
- Real-time 3D model.

---

## 29. Implementation Ticket Outline

### Foundation

- `VC-001` Initialize repository, environments, linting, formatting, and CI.
- `VC-002` Create design tokens and global styles.
- `VC-003` Implement base layout, header, footer, and skip link.
- `VC-004` Implement typed content model.
- `VC-005` Configure image derivative and metadata workflow.

### Homepage

- `VC-010` Build desktop and mobile hero.
- `VC-011` Build quick-facts section.
- `VC-012` Build tropical-setting chapter.
- `VC-013` Build shared-spaces chapter.
- `VC-014` Build rooms preview.
- `VC-015` Build kitchen/workspace chapter.
- `VC-016` Build amenities section.
- `VC-017` Build location preview.
- `VC-018` Build inquiry close.

### Secondary routes

- `VC-020` Build The Villa page.
- `VC-021` Build Rooms page.
- `VC-022` Build Gallery filters.
- `VC-023` Build accessible lightbox.
- `VC-024` Build Location page and text fallback.
- `VC-025` Build Contact page.
- `VC-026` Build legal and accessibility routes.

### Inquiry and services

- `VC-030` Define inquiry schema.
- `VC-031` Build inquiry form.
- `VC-032` Build server validation.
- `VC-033` Add spam protection and rate limiting.
- `VC-034` Configure host notification.
- `VC-035` Configure guest acknowledgment.
- `VC-036` Add error and retry handling.

### Motion

- `VC-040` Implement hero motion.
- `VC-041` Implement gate reveal.
- `VC-042` Implement interior transition.
- `VC-043` Implement capability tiers.
- `VC-044` Implement reduced-motion variants.
- `VC-045` Pause off-screen animation.

### Quality

- `VC-050` Add metadata and structured property data.
- `VC-051` Add analytics events.
- `VC-052` Add privacy-safe event validation.
- `VC-053` Add unit and integration tests.
- `VC-054` Add end-to-end inquiry tests.
- `VC-055` Add accessibility checks.
- `VC-056` Add visual-regression coverage.
- `VC-057` Complete performance audit.
- `VC-058` Complete factual-claim audit.
- `VC-059` Complete launch checklist.

---

## 30. Acceptance Criteria

### 30.1 Content

- The property name is consistently “Villa Cinnamoon Castle.”
- The website states a capacity of up to ten.
- The website states five bedrooms, five beds, and two bathrooms.
- The bed configuration is four Super King beds and one Queen bed.
- The website clearly states that one bedroom has AC and the remaining rooms have fans.
- The location is described as approximately 3.5 km from Hikkaduwa town and main beach areas.
- No unsupported pool, beachfront, review, rating, or safety claim appears.
- Exterior cameras are disclosed in practical information.
- Unknown alarm information is not presented as confirmed.

### 30.2 Interaction

- Every primary action is reachable with keyboard and touch.
- The page scrolls normally in both directions.
- No animation prevents an immediate inquiry.
- The mobile bottom action does not cover important content.
- Gallery controls work without hover.
- The inquiry form preserves values after a recoverable error.

### 30.3 Accessibility

- Reduced-motion mode contains no large movement.
- Focus states are visible.
- Form controls have programmatic labels.
- Error messages are associated with fields.
- Lightbox focus is contained and returned correctly.
- All meaningful images have reviewed alt text.
- Location information is available without the map.

### 30.4 Performance

- Core content appears before optional gallery and map code.
- No WebGL engine ships in the MVP.
- Below-fold images are lazy-loaded.
- Image dimensions are reserved.
- Off-screen motion work stops.
- The mobile hero uses an appropriately sized derivative.
- The site remains usable on a slow connection.

### 30.5 Inquiry

- Guest count cannot exceed ten.
- Check-out cannot precede or equal check-in.
- At least one contact method is required.
- The server validates all fields.
- Spam controls are active.
- The host receives the submission.
- The visitor sees a clear acknowledgment.
- No message claims that dates are booked or confirmed.

---

## 31. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Portrait-heavy, modest-resolution imagery | Weak wide-screen hero or visible upscaling | Use editorial framed layouts, responsive crops, and full-bleed only where source quality permits |
| No reviews | Reduced social proof | Emphasize authentic images, precise facts, host identity, clear contact, and transparent policies |
| Missing rates and availability source | Confusing conversion path | Use inquiry-only language until approved data exists |
| Motion harms performance | Higher abandonment | Progressive enhancement, small motion budget, no WebGL in MVP |
| Motion causes discomfort | Accessibility failure | Strong reduced-motion mode and low-amplitude transforms |
| One AC room is misunderstood | Guest dissatisfaction | Repeat the cooling disclosure in summary, rooms, and practical information |
| Exact location is exposed | Privacy concern | Use approximate map until owner approval |
| Safety fields are ambiguous | Trust or legal concern | Publish only verified status and invite questions |
| Inquiry email fails | Lost lead | Delivery monitoring, retry state, and approved alternative contact |
| Image rights are unclear | Launch or legal risk | Obtain written publication approval before production |
| Scope expands into a marketplace | Delayed launch | Keep multi-property functions outside MVP and preserve only reusable data structures |
| “Cinnamon” versus “Cinnamoon” spelling | Brand inconsistency | Lock brand spelling in content schema and QA checklist |

---

## 32. Owner Decision Checklist

The following decisions are required before final implementation.

### Brand and contact

- [ ] Confirm “Villa Cinnamoon Castle” spelling.
- [ ] Approve host display name.
- [ ] Approve public email.
- [ ] Approve public phone.
- [ ] Approve messaging channel.
- [ ] Approve response-time statement.

### Booking and policies

- [ ] Confirm inquiry-only versus direct booking.
- [ ] Confirm rates or “price on request.”
- [ ] Confirm minimum stay.
- [ ] Confirm check-in and check-out.
- [ ] Confirm cancellation terms.
- [ ] Confirm children, pets, smoking, parties, and visitor rules.
- [ ] Confirm deposit or payment process, if applicable.

### Location

- [ ] Approve exact or approximate pin.
- [ ] Approve written arrival description.
- [ ] Approve transport and landmark claims.
- [ ] Confirm whether exact directions are sent only after booking.

### Safety and accessibility

- [ ] Confirm smoke alarm status.
- [ ] Confirm carbon-monoxide alarm status.
- [ ] Confirm camera locations and wording.
- [ ] Provide accessibility details.
- [ ] Confirm emergency-contact wording.

### Media

- [ ] Confirm ownership and publication rights for all 21 images.
- [ ] Approve crops and color corrections.
- [ ] Approve image captions.
- [ ] Decide whether to commission wide exterior photographs.
- [ ] Decide whether to commission real video, drone, floor plan, or 360 media later.

### Operations

- [ ] Select inquiry recipient.
- [ ] Select content editing method.
- [ ] Select analytics and consent approach.
- [ ] Approve data-retention policy.
- [ ] Approve launch domain and hosting account ownership.

---

## 33. Definition of Done

The website is ready to launch when:

1. All published facts match the approved property record.
2. All 21 supplied photographs have documented roles, rights, alt text, and optimized derivatives.
3. Core routes work with and without advanced motion.
4. The inquiry flow succeeds from production and failure alerts are configured.
5. The host has received and replied to a production test inquiry.
6. Desktop, tablet, and mobile layouts are approved.
7. Keyboard, focus, forms, gallery, and reduced-motion behavior have been reviewed.
8. No unsupported amenity or location claim appears.
9. Privacy, terms, accessibility, and camera disclosures are approved.
10. Analytics records conversion events without personal inquiry data.
11. Performance budgets are met or exceptions are documented.
12. Backups, rollback, ownership, and administrator handoff are complete.
13. The owner has approved the final production site in writing.

---

## 34. Recommended Immediate Next Actions

1. Approve this single-property MVP scope.
2. Complete the owner decision checklist.
3. Confirm the public contact and inquiry workflow.
4. Approve an approximate-map approach.
5. Review the five-bedroom image-to-room mapping.
6. Create desktop and mobile hero prototypes using the actual supplied image dimensions.
7. Produce the complete copy deck.
8. Begin Phase 0 setup only after the source-of-truth property facts are signed off.

---

## 35. Final Recommendation

Build Villa Cinnamoon Castle as a **photography-led, inquiry-focused flagship accommodation site**.

Use authentic images for approximately 70–80% of the visual experience, lightweight depth and parallax for approximately 10–20%, and reserve real video or 360 content for a later phase only when genuine property media is available. Avoid synthetic room or amenity representation.

The implementation should be intentionally dual-layered:

- An emotional layer that communicates arrival, greenery, architecture, and atmosphere.
- A dependable interface layer that communicates capacity, rooms, amenities, location, practical details, and inquiry actions.

The first layer attracts attention. The second earns trust and converts it.

---

## Appendix A — Source-to-Decision Matrix

| Decision | Source basis |
|---|---|
| Single-property MVP | One confirmed property record and one dedicated image set [S1, S2] |
| Up to 10 guests | Property overview [S1] |
| Five bedrooms, five beds, two bathrooms | Property overview [S1] |
| Four Super King beds and one Queen bed | Property overview [S1] |
| One AC bedroom; fans elsewhere | Property overview [S1] |
| Approx. 3.5 km from Hikkaduwa town and beach areas | Property overview [S1] |
| Inquiry-focused conversion | No confirmed booking, price, or availability integration in the source set [S1] |
| Real photography as primary visual medium | 2.5D recommendation and selected media archive [S2, S3] |
| No AI-generated property footage | Accuracy and credibility guidance [S3] |
| No real-time 3D in MVP | Performance, maintenance, and progressive-enhancement guidance [S3, S4] |
| Stable navigation and forms | Usability guidance [S4, S5] |
| Reduced-motion and basic tiers | Accessibility and capability guidance [S4, S5] |
| Server-rendered property facts | SEO and accessibility guidance [S4, S5] |
| Approximate map by default | Source provides proximity but no approved exact coordinate [S1] |
| Portrait-aware editorial layouts | Actual image dimensions and archive guidance [S2] |
| No reviews or testimonials at launch | New listing with no reviews [S1] |
| Safety wording requires caution | Alarm status is unconfirmed [S1] |

---

## Appendix B — Launch Copy Fact Sheet

Use this condensed sheet during editorial review.

```yaml
property_name: Villa Cinnamoon Castle
property_type: Entire home
location:
  locality: Hikkaduwa
  region: Southern Province
  country: Sri Lanka
  distance_to_hikkaduwa_town_km: 3.5
setting: Quiet inland residential/nature setting
capacity:
  guests: 10
  bedrooms: 5
  beds: 5
  bathrooms: 2
beds:
  super_king: 4
  queen: 1
cooling:
  air_conditioned_bedrooms: 1
  remaining_bedrooms: Fans
amenities:
  - High-speed Wi-Fi
  - Dedicated workspace
  - Full kitchen
  - Dining area
  - TV
  - Washing machine
  - Hot water
  - Furnished balcony
  - Outdoor porch
  - Garden
  - Free gated parking
exclusions:
  - Clothes dryer
  - Central heating
safety:
  exterior_security_cameras: Present
  smoke_alarm: Not confirmed
  carbon_monoxide_alarm: Not confirmed
host: Dampalla Gamage Devindu
listing_status: New listing
reviews: None yet
```

---

## Appendix C — Proposed Homepage Content Outline

```text
HEADER
  Villa Cinnamoon Castle
  The Villa | Rooms | Gallery | Location | Check dates

HERO
  Villa Cinnamoon Castle
  Hikkaduwa, Sri Lanka
  A peaceful private villa for families and groups of up to 10.
  [Check dates] [Explore the villa]

QUICK FACTS
  10 guests | 5 bedrooms | 5 beds | 2 bathrooms
  3.5 km from Hikkaduwa town | Wi-Fi and workspace | Gated parking

SETTING
  A quieter side of Hikkaduwa
  Tropical greenery and a calm inland setting within reach of town and beach areas.

SHARED SPACES
  Room to gather
  Two-story living, dining, balcony, porch, and upper-floor spaces.

ROOMS
  Five bedrooms for up to ten guests
  4 Super King beds | 1 Queen bed
  1 AC bedroom | Fans in the remaining bedrooms
  2 bathrooms with hot water

WORK AND KITCHEN
  Settle in for more than a night
  Dedicated workspace, high-speed Wi-Fi, full kitchen, and washing machine.

AMENITIES
  Kitchen | Wi-Fi | Workspace | TV | Hot water
  Washing machine | Garden | Balcony | Porch | Gated parking

LOCATION
  Near Hikkaduwa
  Approximately 3.5 km from Hikkaduwa town and main beach areas.

PRACTICAL INFORMATION
  Exterior security cameras are present.
  Ask the host for current smoke and carbon-monoxide alarm information.
  Washer available; no clothes dryer.

INQUIRY
  Plan your stay
  Name | Contact | Dates | Guests | Message
  [Send inquiry]

FOOTER
  Contact | Privacy | Terms | Accessibility
```
