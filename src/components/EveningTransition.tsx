"use client";

import { useCallback, useRef } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { smoothRange } from "@/lib/motion";
import type { PropertyImage } from "@/content/media";

export function EveningTransition({ image }: { image: PropertyImage }) {
  const sectionRef = useRef<HTMLElement>(null);
  const renderProgress = useCallback((progress: number, element: HTMLElement) => {
    element.style.setProperty("--evening-y", `${(-12 * smoothRange(progress, 0, 1)).toFixed(2)}px`);
  }, []);
  useScrollProgress(sectionRef, { onProgress: renderProgress });

  return (
    <section ref={sectionRef} className="evening" data-header-theme="dark" aria-labelledby="evening-title">
      <div className="evening__media"><ResponsivePicture image={image} sizes="100vw" /></div>
      <div className="evening__shade" aria-hidden="true" />
      <div className="container evening__content">
        <p className="eyebrow">Evening at the villa</p>
        <h2 id="evening-title">Let the movement settle.</h2>
        <p>When you are ready, share your dates and questions. The host will reply with current availability, pricing and next steps.</p>
      </div>
    </section>
  );
}
