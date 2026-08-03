"use client";

import { useCallback, useRef } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { TextReveal } from "@/components/motion/TextReveal";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { smoothRange } from "@/lib/motion";
import type { PropertyImage } from "@/content/media";

export function SharedSpacesChapter({ primary, secondary }: { primary: PropertyImage; secondary: PropertyImage }) {
  const sectionRef = useRef<HTMLElement>(null);
  const renderProgress = useCallback((progress: number, element: HTMLElement) => {
    const reveal = smoothRange(progress, 0.18, 0.72);
    element.style.setProperty("--shared-reveal", reveal.toFixed(4));
    element.style.setProperty("--shared-clip", `${(100 * (1 - reveal)).toFixed(2)}%`);
    element.style.setProperty("--shared-image-y", `${(-16 * smoothRange(progress, 0, 1)).toFixed(2)}px`);
  }, []);
  useScrollProgress(sectionRef, { onProgress: renderProgress });

  return (
    <section ref={sectionRef} className="shared-spaces" data-header-theme="dark" aria-labelledby="shared-title">
      <div className="shared-spaces__primary">
        <ResponsivePicture image={primary} sizes="100vw" />
      </div>
      <div className="shared-spaces__contrast" aria-hidden="true" />
      <div className="shared-spaces__secondary" aria-hidden="true">
        <ResponsivePicture image={secondary} sizes="(max-width: 860px) 64vw, 34vw" />
      </div>
      <div className="container shared-spaces__content">
        <p className="shared-spaces__label">Ground / Upper level</p>
        <p className="eyebrow">Space to gather</p>
        <TextReveal text="Living areas connected across two levels." as="h2" id="shared-title" />
        <TextReveal text="Dining, seating, a tall stair volume and an upper landing create shared spaces where a group can come together without crowding every moment into one room." as="p" className="lede" delayOffset={0.2} />
      </div>
    </section>
  );
}
