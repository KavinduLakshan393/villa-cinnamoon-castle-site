"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import type { PropertyImage } from "@/content/media";

type Props = {
  image: PropertyImage;
};

const clamp = (value: number) => Math.max(0, Math.min(1, value));

function easedRange(progress: number, start: number, end: number) {
  const value = clamp((progress - start) / (end - start));
  return value * value * (3 - 2 * value);
}

export function ScrollIntro({ image }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const render = () => {
      animationFrame = 0;
      if (motionPreference.matches) return;

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / scrollDistance);
      const approach = easedRange(progress, 0.04, 0.68);
      const copyExit = easedRange(progress, 0.14, 0.52);
      const panelReveal = easedRange(progress, 0.68, 1);

      section.style.setProperty("--intro-progress", progress.toFixed(4));
      section.style.setProperty("--intro-frame-top", `${14 * (1 - approach)}%`);
      section.style.setProperty("--intro-frame-right", `${6 * (1 - approach)}%`);
      section.style.setProperty("--intro-frame-bottom", `${8 * (1 - approach)}%`);
      section.style.setProperty("--intro-frame-left", `${54 * (1 - approach)}%`);
      section.style.setProperty("--intro-radius", `${(8 - 7.3 * approach).toFixed(2)}rem`);
      section.style.setProperty("--intro-image-y", `${(-20 * approach).toFixed(2)}px`);
      section.style.setProperty("--intro-copy-y", `${(-88 * copyExit).toFixed(2)}px`);
      section.style.setProperty("--intro-copy-opacity", (1 - copyExit).toFixed(3));
      section.style.setProperty("--intro-panel-y", `${(104 * (1 - panelReveal)).toFixed(2)}%`);
      section.style.setProperty("--intro-panel-opacity", panelReveal.toFixed(3));
      section.style.setProperty("--intro-botanical-y", `${(-34 * approach + 22 * panelReveal).toFixed(2)}px`);
    };

    const requestRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    const updateMotionMode = () => {
      section.dataset.scrollEnhanced = motionPreference.matches ? "false" : "true";
      if (motionPreference.matches) {
        section.removeAttribute("style");
      } else {
        render();
      }
    };

    updateMotionMode();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    motionPreference.addEventListener?.("change", updateMotionMode);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      motionPreference.removeEventListener?.("change", updateMotionMode);
    };
  }, []);

  return (
    <section className="scroll-intro" ref={sectionRef} aria-labelledby="villa-title">
      <div className="scroll-intro__stage">
        <div className="scroll-intro__ambient" aria-hidden="true" />

        <div className="scroll-intro__photo">
          <ResponsivePicture
            image={image}
            sizes="(max-width: 620px) 100vw, (max-width: 1100px) 72vw, 70rem"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <picture className="scroll-intro__botanical">
          <source
            media="(min-width: 861px)"
            srcSet="/assets/images/generated/scroll-botanical-frame-final.webp"
            type="image/webp"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            alt=""
            width="960"
            height="549"
          />
        </picture>

        <div className="container scroll-intro__copy">
          <p className="hero-kicker">Hikkaduwa · Southern Sri Lanka</p>
          <h1 className="display" id="villa-title">Villa Cinnamoon Castle</h1>
          <p className="scroll-intro__statement">A private villa shaped by tropical greenery.</p>
          <p className="lede">A peaceful entire home for families and groups of up to ten, approximately 3.5 km from Hikkaduwa town and main beach areas.</p>
          <div className="button-row">
            <Link className="button" href="/contact/">Check dates <span aria-hidden="true">→</span></Link>
            <a className="button button--secondary" href="#story">Explore the villa</a>
          </div>
        </div>

        <div className="scroll-intro__chapter">
          <div className="container scroll-intro__chapter-inner">
            <div>
              <p className="eyebrow">The stay begins here</p>
              <h2>Five bedrooms. Space for ten.</h2>
            </div>
            <div className="scroll-intro__chapter-copy">
              <p>A private two-story villa with shared living spaces, a full kitchen, tropical garden and practical comforts for a group stay.</p>
              <a className="text-link" href="#facts">See the property facts <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>

        <a className="hero-scroll scroll-intro__cue" href="#facts">Scroll to arrive</a>
      </div>
    </section>
  );
}
