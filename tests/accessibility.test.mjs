import test from "node:test";
import assert from "node:assert/strict";
import { read } from "./helpers.mjs";

const layout = read("src/app/layout.tsx");
const motion = read("src/components/MotionController.tsx");
const rooms = read("src/components/rooms/RoomSequence.tsx");
const css = read("public/assets/css/styles.css");

test("global shell exposes language, main skip link and stable landmarks", () => {
  assert.match(layout, /<html lang="en"/);
  assert.match(layout, /className="skip-link" href="#main"/);
  assert.match(layout, /<SiteHeader \/>/);
  assert.match(layout, /<SiteFooter \/>/);
});

test("generic reveals fail open when observers or motion are unavailable", () => {
  assert.match(motion, /tier !== "static" && "IntersectionObserver" in window/);
  assert.match(motion, /revealItems\.forEach\(\(item\) => item\.classList\.add\("is-visible"\)\)/);
  assert.match(css, /\.motion-ready \.reveal/);
});

test("reduced motion removes pinned scenes and custom cursor", () => {
  assert.match(css, /\.arrival \{ height: auto; min-height: auto; \}/);
  assert.match(css, /\.rooms-story__sticky \{ position: static;/);
  assert.match(css, /\.custom-cursor \{ display: none !important; \}/);
  assert.match(rooms, /disabled: tier === "static"/);
});

test("essential controls retain normal cursor and stable positioning", () => {
  assert.match(css, /html, body, a, button, input, textarea, select, details, summary, \.image-frame \{ cursor: auto !important; \}/);
  assert.doesNotMatch(css, /\.button[^}]*border-radius:\s*50%/s);
});
