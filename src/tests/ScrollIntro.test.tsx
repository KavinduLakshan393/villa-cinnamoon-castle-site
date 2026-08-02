import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScrollIntro } from "@/components/ScrollIntro";
import type { PropertyImage } from "@/content/media";

const heroImage: PropertyImage = {
  name: "01_hero_exterior_day.jpg",
  category: "arrival",
  width: 960,
  height: 1280,
  original: "/assets/images/original/01_hero_exterior_day.jpg",
  variants: [
    { width: 480, height: 640, path: "/assets/images/webp/01_hero_exterior_day-480.webp" },
    { width: 720, height: 960, path: "/assets/images/webp/01_hero_exterior_day-720.webp" }
  ],
  alt: "Two-story white villa beneath mature tropical trees.",
  caption: "Villa Cinnamoon Castle exterior.",
  full: "/assets/images/webp/01_hero_exterior_day-720.webp"
};

function mockMotionPreference(matches: boolean) {
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn().mockReturnValue({
      matches,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn()
    })
  });
}

afterEach(cleanup);

describe("ScrollIntro", () => {
  it("progressively enhances the authentic arrival story", async () => {
    mockMotionPreference(false);
    const { container } = render(<ScrollIntro image={heroImage} />);

    expect(screen.getByRole("heading", { level: 1, name: "Villa Cinnamoon Castle" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Five bedrooms. Space for ten." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /check dates/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByAltText(heroImage.alt)).toHaveAttribute("fetchpriority", "high");

    await waitFor(() => {
      expect(container.querySelector(".scroll-intro")).toHaveAttribute("data-scroll-enhanced", "true");
    });
  });

  it("keeps the complete story in static reading order for reduced motion", async () => {
    mockMotionPreference(true);
    const { container } = render(<ScrollIntro image={heroImage} />);

    await waitFor(() => {
      expect(container.querySelector(".scroll-intro")).toHaveAttribute("data-scroll-enhanced", "false");
    });
    expect(screen.getByText("A private villa shaped by tropical greenery.")).toBeVisible();
    expect(screen.getByText(/private two-story villa/i)).toBeVisible();
  });
});
