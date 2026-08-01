"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import type { PropertyImage } from "@/content/media";
import { ResponsivePicture } from "@/components/ResponsivePicture";

export type CinematicHeroSlide = {
  image: PropertyImage;
  kicker: string;
  title: string;
  copy: string;
};

type Props = {
  slides: readonly CinematicHeroSlide[];
};

const AUTOPLAY_INTERVAL = 8_000;
const CROSSFADE_DURATION = 900;

export function CinematicHero({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeIndexRef = useRef(0);
  const crossfadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showSlide = useCallback((requestedIndex: number) => {
    if (!slides.length) return;
    const nextIndex = (requestedIndex + slides.length) % slides.length;
    const currentIndex = activeIndexRef.current;
    if (nextIndex === currentIndex) return;

    if (crossfadeTimer.current) clearTimeout(crossfadeTimer.current);
    setPreviousIndex(currentIndex);
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    crossfadeTimer.current = setTimeout(() => setPreviousIndex(null), CROSSFADE_DURATION);
  }, [slides.length]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener?.("change", updatePreference);
    return () => preference.removeEventListener?.("change", updatePreference);
  }, []);

  useEffect(() => {
    if (slides.length < 2 || manuallyPaused || interactionPaused || reducedMotion) return;
    const timer = window.setInterval(() => showSlide(activeIndexRef.current + 1), AUTOPLAY_INTERVAL);
    return () => window.clearInterval(timer);
  }, [interactionPaused, manuallyPaused, reducedMotion, showSlide, slides.length]);

  useEffect(() => () => {
    if (crossfadeTimer.current) clearTimeout(crossfadeTimer.current);
  }, []);

  if (!slides.length) return null;
  const activeSlide = slides[activeIndex];
  const previousSlide = previousIndex === null ? null : slides[previousIndex];

  const resumeAfterFocus = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteractionPaused(false);
  };

  return (
    <section
      className="cinematic-hero"
      aria-labelledby="villa-title"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={resumeAfterFocus}
    >
      <div className="cinematic-hero__ambient" aria-hidden="true" data-parallax="8" />
      <div className="container cinematic-hero__layout">
        <div className="cinematic-hero__copy reveal is-visible">
          <p className="hero-kicker">Hikkaduwa · Southern Sri Lanka</p>
          <h1 className="display" id="villa-title">Villa Cinnamoon Castle</h1>
          <div className="cinematic-hero__chapter" key={activeSlide.title} aria-live="off">
            <p className="cinematic-hero__chapter-kicker">{activeSlide.kicker}</p>
            <p className="cinematic-hero__chapter-title">{activeSlide.title}</p>
            <p className="lede">{activeSlide.copy}</p>
          </div>
          <div className="button-row">
            <Link className="button" href="/contact/">Check dates <span aria-hidden="true">→</span></Link>
            <a className="button button--secondary" href="#story">Explore the villa</a>
          </div>
        </div>

        <div className="cinematic-hero__visual" data-parallax="20">
          <div className="cinematic-hero__outline" aria-hidden="true" />
          <div className="cinematic-hero__frame">
            {previousSlide ? (
              <div className="cinematic-hero__slide cinematic-hero__slide--leaving" aria-hidden="true">
                <ResponsivePicture image={previousSlide.image} sizes="(max-width: 860px) 90vw, 34rem" />
              </div>
            ) : null}
            <div className="cinematic-hero__slide cinematic-hero__slide--active" key={activeSlide.image.name}>
              <ResponsivePicture
                image={activeSlide.image}
                sizes="(max-width: 860px) 90vw, 34rem"
                loading={activeIndex === 0 ? "eager" : "lazy"}
                fetchPriority={activeIndex === 0 ? "high" : "auto"}
              />
            </div>
          </div>
          <aside className="hero-note" aria-label="Property capacity">
            <strong>10</strong>
            <span>guests across five bedrooms</span>
          </aside>
        </div>
      </div>

      <div className="container cinematic-hero__controls" aria-label="Hero scenes">
        <div className="cinematic-hero__dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              className="cinematic-hero__dot"
              aria-label={`Show ${slide.kicker}`}
              aria-pressed={index === activeIndex}
              onClick={() => showSlide(index)}
              key={slide.image.name}
            ><span>{String(index + 1).padStart(2, "0")}</span></button>
          ))}
        </div>
        {!reducedMotion ? (
          <button
            type="button"
            className="cinematic-hero__pause"
            aria-label={manuallyPaused ? "Resume hero scenes" : "Pause hero scenes"}
            aria-pressed={manuallyPaused}
            onClick={() => setManuallyPaused((paused) => !paused)}
          >{manuallyPaused ? "Play" : "Pause"}</button>
        ) : null}
      </div>
      <a className="hero-scroll" href="#facts">Scroll to discover</a>
    </section>
  );
}
