import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { projectPath, read } from "./helpers.mjs";

const manifest = JSON.parse(read("public/assets/images/manifest.json"));
const mediaSource = read("src/content/media.ts");
const editorialNames = [...mediaSource.matchAll(/^\s*"(\d{2}_[^"]+\.jpg)":\s*\{/gm)].map((match) => match[1]);

test("media catalogue preserves all 21 approved photographs", () => {
  assert.equal(manifest.length, 21);
  assert.equal(new Set(manifest.map((image) => image.name)).size, 21);
  assert.equal(new Set(editorialNames).size, 21);
  assert.deepEqual(new Set(editorialNames), new Set(manifest.map((image) => image.name)));
});

test("every photograph has valid dimensions, variants and files", () => {
  for (const image of manifest) {
    assert.ok(image.width > 0 && image.height > 0, image.name);
    assert.ok(image.variants.length > 0, image.name);
    const paths = [image.original, ...image.variants.map((variant) => variant.path)];
    for (const publicPath of paths) assert.ok(fs.existsSync(projectPath("public", publicPath.replace(/^\//, ""))), `${image.name}: ${publicPath}`);
  }
});

test("shared-space gallery filter retains five photographs", () => {
  const sharedNames = ["09_living_dining_overview.jpg", "10_staircase_living_flow.jpg", "11_double_height_stair_detail.jpg", "12_upper_landing_high_resolution.jpg", "13_upper_workspace_lounge.jpg"];
  assert.equal(sharedNames.filter((name) => mediaSource.includes(`"${name}"`)).length, 5);
});
