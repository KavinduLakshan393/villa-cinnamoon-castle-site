import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CinematicHero, type CinematicHeroSlide } from "@/components/CinematicHero";
import type { PropertyImage } from "@/content/media";

function image(name: string): PropertyImage {
  return {
    name,
    category: "arrival",
    width: 960,
    height: 1280,
    original: `/assets/images/original/${name}`,
    variants: [{ width: 480, height: 640, path: `/assets/images/webp/${name}.webp` }],
    alt: `${name} alt text`,
    caption: `${name} caption`,
    full: `/assets/images/webp/${name}.webp`
  };
}

const slides: readonly CinematicHeroSlide[] = [
  { image: image("arrival.jpg"), kicker: "Arrival", title: "Arrival scene", copy: "Arrival copy" },
  { image: image("garden.jpg"), kicker: "Garden", title: "Garden scene", copy: "Garden copy" }
];

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

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("CinematicHero", () => {
  it("advances through authenticated property scenes and exposes manual controls", () => {
    vi.useFakeTimers();
    mockMotionPreference(false);
    render(<CinematicHero slides={slides} />);

    expect(screen.getByText("Arrival scene")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Show Arrival" })).toHaveAttribute("aria-pressed", "true");

    act(() => vi.advanceTimersByTime(8_000));

    expect(screen.getByText("Garden scene")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Show Garden" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Pause hero scenes" })).toBeInTheDocument();
  });

  it("does not autoplay when reduced motion is requested", async () => {
    vi.useFakeTimers();
    mockMotionPreference(true);
    render(<CinematicHero slides={slides} />);

    await act(async () => {
      await Promise.resolve();
    });
    expect(screen.queryByRole("button", { name: "Pause hero scenes" })).not.toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(16_000);
    });

    expect(screen.getByText("Arrival scene")).toBeInTheDocument();
  });
});
