import test from "node:test";
import assert from "node:assert/strict";
import { loadStandaloneTs } from "./helpers.mjs";

const { clamp, smoothRange, calculateScrollProgress, roomIndexFromProgress } = await loadStandaloneTs("src/lib/motion.ts");

test("clamp constrains motion progress", () => {
  assert.equal(clamp(-1), 0);
  assert.equal(clamp(0.5), 0.5);
  assert.equal(clamp(2), 1);
});

test("smoothRange produces stable eased boundaries", () => {
  assert.equal(smoothRange(0.1, 0.2, 0.8), 0);
  assert.equal(smoothRange(0.8, 0.2, 0.8), 1);
  assert.ok(smoothRange(0.5, 0.2, 0.8) > 0.49 && smoothRange(0.5, 0.2, 0.8) < 0.51);
});

test("scroll progress is normalized and reversible", () => {
  assert.equal(calculateScrollProgress(0, 2000, 1000), 0);
  assert.equal(calculateScrollProgress(-500, 2000, 1000), 0.5);
  assert.equal(calculateScrollProgress(-1000, 2000, 1000), 1);
});

test("room progression selects all five chapters without overflow", () => {
  assert.deepEqual([0, 0.21, 0.41, 0.61, 0.81, 1].map((progress) => roomIndexFromProgress(progress, 5)), [0, 1, 2, 3, 4, 4]);
  assert.equal(roomIndexFromProgress(-1, 5), 0);
});
