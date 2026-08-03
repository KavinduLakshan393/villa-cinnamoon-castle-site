import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { projectPath, read } from "./helpers.mjs";

const page = read("src/app/page.tsx");
const arrival = read("src/components/arrival/ArrivalScene.tsx");
const rooms = read("src/components/rooms/RoomSequence.tsx");
const header = read("src/components/SiteHeader.tsx");
const cursor = read("src/components/CustomCursor.tsx");
const gallery = read("src/components/Gallery.tsx");
const inquiry = read("src/components/InquiryForm.tsx");
const css = read("public/assets/css/styles.css");

test("homepage follows the approved narrative order", () => {
  const tokens = ["<ArrivalScene", "<EditorialFactRail", "<ArchitectureChapter", "<RoomSequence", "<SharedSpacesChapter", "<AmenitiesInventory", "location-editorial", "<EveningTransition", "inquiry-section"];
  let previous = -1;
  for (const token of tokens) {
    const index = page.indexOf(token);
    assert.ok(index > previous, `${token} should follow the previous chapter`);
    previous = index;
  }
});

test("arrival scene uses authentic priority media and concise copy", () => {
  assert.match(arrival, /fetchPriority="high"/);
  assert.match(arrival, /Villa Cinnamoon Castle/);
  assert.match(arrival, /A private villa shaped by tropical greenery\./);
  assert.match(arrival, /href="#property-facts"/);
  assert.doesNotMatch(arrival, /Five bedrooms\. Space for ten\./);
});

test("room sequence retains all content while progressively enhancing active chapters", () => {
  assert.match(rooms, /<ol className="rooms-story__list">/);
  assert.match(rooms, /roomIndexFromProgress/);
  assert.match(rooms, /aria-current=/);
  assert.match(rooms, /href="\/rooms\/"/);
  for (let number = 16; number <= 20; number += 1) assert.match(page, new RegExp(`getImage\\("${number}_`));
});

test("header provides focus trapping, Escape handling and section-aware contrast", () => {
  assert.match(header, /event\.key === "Escape"/);
  assert.match(header, /event\.key !== "Tab"/);
  assert.match(header, /\[data-header-theme\]/);
  assert.match(header, /aria-expanded=\{menuOpen\}/);
  assert.match(header, /document\.body\.classList\.toggle\("nav-open"/);
});

test("custom cursor is scoped to explicit media targets", () => {
  assert.match(cursor, /closest<HTMLElement>\("\[data-cursor\]"\)/);
  assert.match(cursor, /tier !== "full"/);
  assert.doesNotMatch(css, /html,\s*body,[^{]+cursor:\s*none/si);
  assert.match(css, /\[data-cursor-active="true"\]\s*\{\s*cursor:\s*none/s);
});

test("gallery preserves filters, dialog controls and focus restoration", () => {
  assert.match(gallery, /aria-pressed=\{filter === value\}/);
  assert.match(gallery, /<dialog/);
  assert.match(gallery, /ArrowLeft/);
  assert.match(gallery, /lastTrigger\.current\?\.focus/);
  assert.match(gallery, /data-cursor="view"/);
});

test("inquiry form retains accessible validation without magnetic controls", () => {
  assert.match(inquiry, /aria-invalid=\{invalid\("name"\)\}/);
  assert.match(inquiry, /role="status"/);
  assert.match(inquiry, /Send inquiry/);
  assert.doesNotMatch(inquiry, /Magnetic/);
});

test("design system removes retired and template-like homepage patterns", () => {
  assert.doesNotMatch(css, /border-radius:\s*99px/i);
  assert.doesNotMatch(css, /\.scroll-intro/);
  assert.match(css, /--surface-light:\s*#f5f2ea/);
  assert.match(css, /--motion-slow:\s*900ms/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.ok(!fs.existsSync(projectPath("src/components/ScrollIntro.tsx")));
});

test("all local alias imports resolve to source files", () => {
  const sourceFiles = [];
  const visit = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(absolute);
      else if (/\.(?:ts|tsx)$/.test(entry.name)) sourceFiles.push(absolute);
    }
  };
  visit(projectPath("src"));
  for (const file of sourceFiles) {
    const source = fs.readFileSync(file, "utf8");
    for (const match of source.matchAll(/from\s+["']@\/([^"']+)["']/g)) {
      const base = projectPath("src", match[1]);
      const exists = [base, `${base}.ts`, `${base}.tsx`, path.join(base, "index.ts"), path.join(base, "index.tsx")].some(fs.existsSync);
      assert.ok(exists, `${path.relative(projectPath("src"), file)} imports missing @/${match[1]}`);
    }
  }
});
