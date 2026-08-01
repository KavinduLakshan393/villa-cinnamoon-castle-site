import { describe, expect, it } from "vitest";
import { propertyImages } from "@/content/media";

describe("property media catalogue", () => {
  it("preserves all 21 approved photographs with accessible copy", () => {
    expect(propertyImages).toHaveLength(21);
    expect(new Set(propertyImages.map((image) => image.name).values()).size).toBe(21);
    propertyImages.forEach((image) => {
      expect(image.alt.length).toBeGreaterThan(10);
      expect(image.caption.length).toBeGreaterThan(3);
      expect(image.variants.length).toBeGreaterThan(0);
    });
  });
});
