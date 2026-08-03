import fs from "node:fs";
import { projectPath } from "./tooling.mjs";

const manifest = JSON.parse(fs.readFileSync(projectPath("public/assets/images/manifest.json"), "utf8"));
const image = (name) => {
  const item = manifest.find((entry) => entry.name === name);
  if (!item) throw new Error(`Unknown image ${name}`);
  return item.variants.at(-1)?.path ?? item.original;
};
const esc = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
const picture = (name, alt, className = "") => `<img class="${className}" src="${esc(image(name))}" alt="${esc(alt)}">`;
const rooms = [
  ["16_bedroom_1_master_high_resolution.jpg", "Bedroom 1", "Warm timber and natural light"],
  ["17_bedroom_2_air_conditioned.jpg", "Bedroom 2", "The air-conditioned bedroom"],
  ["18_bedroom_3_wide.jpg", "Bedroom 3", "A wide, private sleeping space"],
  ["19_bedroom_4_four_poster.jpg", "Bedroom 4", "Dark timber and calm tones"],
  ["20_bedroom_5_white_linen.jpg", "Bedroom 5", "White linen and soft daylight"]
];
const roomPanels = rooms.map(([name, label, description], index) => `
<li class="rooms-story__panel${index === 0 ? " is-active" : ""}">
  <div class="rooms-story__media">${picture(name, label)}</div>
  <div class="rooms-story__copy"><span class="rooms-story__number">${String(index + 1).padStart(2, "0")}</span><h3>${label}</h3><p>${description}</p></div>
</li>`).join("");

const html = `<!doctype html>
<html lang="en" class="js motion-ready" data-motion-tier="full">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Villa Cinnamoon QA Preview</title>
<link rel="stylesheet" href="/assets/css/styles.css">
<style>
  .qa-banner{position:fixed;z-index:2000;right:.5rem;bottom:.5rem;padding:.4rem .55rem;background:#fff;color:#111;font:600 10px/1.2 system-ui;border:1px solid #111;letter-spacing:.08em;text-transform:uppercase}.reveal{opacity:1!important;transform:none!important;clip-path:none!important}
</style>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header site-header--dark" data-site-header><div class="container header-inner">
<a class="brand" href="#main"><span class="brand-mark">VCC</span><span class="brand-text">Villa Cinnamoon Castle<small>Hikkaduwa, Sri Lanka</small></span></a>
<div class="header-actions"><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"><span class="menu-toggle__label">Menu</span><span class="menu-toggle__icon"><i></i><i></i></span></button><a class="header-quick-cta" href="#inquiry">Check dates</a></div>
</div></header>
<main id="main">
<section class="arrival" data-motion-tier="full" data-header-theme="dark"><div class="arrival__stage">
<div class="arrival__ambient"></div><div class="arrival__property">${picture("01_hero_exterior_day.jpg", "Two-story white villa framed by mature tropical trees")}</div>
<div class="arrival__foreground" aria-hidden="true"><img src="/assets/images/generated/scroll-botanical-frame-final.webp" alt=""></div>
<div class="container arrival__content"><p class="arrival__location">Hikkaduwa, Sri Lanka</p><h1 class="display">Villa Cinnamoon Castle</h1><p class="arrival__statement">A private villa shaped by tropical greenery.</p><a class="button arrival__cta" href="#inquiry">Check dates <span>→</span></a></div>
<a class="arrival__cue" href="#property-facts">Scroll to arrive <span>↓</span></a>
</div></section>
<section id="property-facts" class="fact-rail"><div class="container fact-rail__inner">
<a class="fact-rail__item" href="#rooms"><strong>10</strong><span>Guests</span></a><a class="fact-rail__item" href="#rooms"><strong>5</strong><span>Bedrooms</span></a><a class="fact-rail__item" href="#practical"><strong>2</strong><span>Bathrooms</span></a><a class="fact-rail__item" href="#location"><strong>3.5 km</strong><span>From town</span></a>
</div></section>
<section class="architecture section" id="villa" data-header-theme="light"><div class="container architecture__grid">
<div class="architecture__primary">${picture("03_garden_gate_reveal.jpg", "Villa seen through a rustic garden fence")}</div>
<div class="architecture__copy"><p class="eyebrow">The villa</p><h2>A quiet two-story home framed by tropical green.</h2><p class="lede">Set inland from Hikkaduwa’s busier beach area, the villa offers generous indoor spaces, a shaded approach and outdoor places to pause.</p><p class="architecture__facts">Entire home · Two-story layout · Tropical garden and covered outdoor areas</p><a class="text-link" href="#rooms">Explore the spaces →</a></div>
<div class="architecture__detail">${picture("07_balcony_tropical_view.jpg", "Upper balcony overlooking dense tropical plants")}</div>
</div></section>
<section class="rooms-chapter" id="rooms" data-header-theme="dark"><div class="container rooms-chapter__intro"><div><p class="eyebrow">The stay</p><h2>Five bedrooms for up to ten guests.</h2></div><p class="lede">Four Super King beds and one Queen bed. One bedroom has air conditioning; the remaining bedrooms use fans.</p></div>
<section class="rooms-story" data-motion-tier="full"><div class="rooms-story__sticky"><div class="rooms-story__counter"><span>01</span><span>/</span><span>05</span></div><ol class="rooms-story__list">${roomPanels}</ol><a class="rooms-story__link text-link" href="#rooms">Explore every room →</a></div></section></section>
<section class="shared-spaces" id="shared" data-header-theme="dark"><div class="shared-spaces__primary">${picture("12_upper_landing_high_resolution.jpg", "Upper landing with seating")}</div><div class="shared-spaces__contrast"></div><div class="shared-spaces__secondary">${picture("10_staircase_living_flow.jpg", "Staircase linking the two levels")}</div><div class="container shared-spaces__content"><span class="shared-spaces__label">Ground / Upper level</span><p class="eyebrow">Shared spaces</p><h2>Gather downstairs. Spread out upstairs.</h2><p class="lede">The lower floor connects living and dining spaces, while the upper landing adds seating and a dedicated work table beneath the pitched roof.</p></div></section>
<section class="amenities-inventory section" id="amenities" data-header-theme="light"><div class="container"><div class="amenities-inventory__intro"><div><p class="eyebrow">Practical comforts</p><h2>Everything essential, presented clearly.</h2></div><p class="lede">The property supports family stays, group holidays and remote work without overstating what is provided.</p></div><div class="amenities-inventory__layout"><div class="amenities-inventory__media">${picture("14_full_kitchen_wide.jpg", "Full kitchen")}</div><ol class="amenities-inventory__list"><li class="amenities-inventory__item"><span class="amenities-inventory__number">01</span><strong>Full kitchen</strong><span>Cooking essentials and appliances</span></li><li class="amenities-inventory__item"><span class="amenities-inventory__number">02</span><strong>High-speed Wi-Fi</strong><span>Browsing, work and study</span></li><li class="amenities-inventory__item"><span class="amenities-inventory__number">03</span><strong>Dedicated workspace</strong><span>Upper-level table and seating</span></li><li class="amenities-inventory__item"><span class="amenities-inventory__number">04</span><strong>Hot water</strong><span>Available in two full bathrooms</span></li><li class="amenities-inventory__item"><span class="amenities-inventory__number">05</span><strong>Washing machine</strong><span>Washer provided</span></li><li class="amenities-inventory__item"><span class="amenities-inventory__number">06</span><strong>Gated parking</strong><span>Free parking on the premises</span></li></ol></div></div></section>
<section class="location-editorial section" id="location" data-header-theme="light"><div class="container location-editorial__grid"><div class="location-editorial__copy"><p class="eyebrow">Near Hikkaduwa</p><h2>Approximately 3.5 km from town and main beach areas.</h2><p class="lede">The public map remains intentionally approximate until the owner approves an exact pin.</p><div class="button-row"><a class="button" href="#location">Explore the location</a><a class="button button--secondary" href="#inquiry">Ask a question</a></div></div><div class="approx-map location-editorial__map"><svg viewBox="0 0 700 520"><path d="M-40 470 C105 378 165 355 280 286 C385 224 430 144 520 55 C590 -14 655 -26 760 -38 L760 560 L-40 560Z" fill="#7d8d78"/><path d="M-30 530 C124 407 206 386 315 306 C420 228 465 129 557 38" fill="none" stroke="#f5f2ea" stroke-width="22"/><circle cx="565" cy="72" r="28" fill="#adc6d2"/><text x="84" y="450" font-family="system-ui" font-size="20" font-weight="700" fill="#10110f">Hikkaduwa area</text></svg><div class="map-label"><span>Approximate villa area</span></div><div class="map-key">Exact arrival instructions can be shared by the host after a stay is confirmed.</div></div></div></section>
<section class="section practical-section" id="practical" data-header-theme="light"><div class="container"><div class="section-heading"><div><p class="eyebrow">Practical information</p><h2>Clear details before you inquire.</h2></div><p class="lede">Trust is built here through authentic photographs and precise disclosures.</p></div><div class="practical"><details class="disclosure" open><summary>Cooling and bedrooms</summary><div class="disclosure-content">One bedroom has air conditioning. The remaining four bedrooms have fans.</div></details><details class="disclosure"><summary>Safety information</summary><div class="disclosure-content">Exterior security cameras are present.</div></details></div></div></section>
<section class="evening" data-header-theme="dark"><div class="evening__media">${picture("06_exterior_night_ambience.jpg", "Villa exterior lit warmly at night")}</div><div class="evening__shade"></div><div class="container evening__content"><p class="eyebrow">As evening settles</p><h2>A calm place to return to.</h2><p>The visual journey ends here. The inquiry experience below is intentionally still, clear and practical.</p></div></section>
<section class="inquiry-section section" id="inquiry" data-header-theme="dark"><div class="container inquiry-shell"><div class="inquiry-copy"><p class="eyebrow">Plan your stay</p><h2>Ask about dates, pricing or a longer stay.</h2><p class="lede">Share the basics and the host can reply with current availability and next steps.</p><p class="inquiry-note">Submitting an inquiry does not reserve the villa.</p></div><form class="form-card"><div class="form-grid"><div class="field field--full"><label for="name">Name *</label><input id="name"></div><div class="field"><label for="email">Email</label><input id="email" type="email"></div><div class="field"><label for="phone">Phone or messaging number</label><input id="phone"></div><div class="field"><label for="check-in">Check-in</label><input id="check-in" type="date"></div><div class="field"><label for="check-out">Check-out</label><input id="check-out" type="date"></div><div class="field"><label for="guests">Guests *</label><select id="guests"><option>Select</option><option>2</option></select></div><div class="field field--full"><label for="message">Message</label><textarea id="message"></textarea></div></div><div class="form-actions"><button class="button" type="button">Send inquiry →</button></div></form></div></section>
</main><div class="qa-banner">Static QA preview</div>
<script>
const menu=document.querySelector('.menu-toggle');menu?.addEventListener('click',()=>menu.setAttribute('aria-expanded',menu.getAttribute('aria-expanded')==='true'?'false':'true'));
</script>
</body></html>`;

const output = projectPath(".qa", "preview", "index.html");
fs.mkdirSync(projectPath(".qa", "preview"), { recursive: true });
fs.writeFileSync(output, html);
console.log(output);
