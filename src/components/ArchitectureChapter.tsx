"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { smoothRange } from "@/lib/motion";
import type { PropertyImage } from "@/content/media";

export function ArchitectureChapter({ primary, detail }: { primary: PropertyImage; detail: PropertyImage }) {
  const sectionRef = useRef<HTMLElement>(null);
  const renderProgress = useCallback((progress: number, element: HTMLElement) => {
    element.style.setProperty("--architecture-reveal", smoothRange(progress, 0.02, 0.54).toFixed(4));
    element.style.setProperty("--architecture-detail-y", `${(18 - 36 * smoothRange(progress, 0.16, 0.86)).toFixed(2)}px`);
  }, []);
  useScrollProgress(sectionRef, { onProgress: renderProgress });

  return (
    <section ref={sectionRef} className="architecture section" id="story" data-header-theme="light" aria-labelledby="architecture-title">
      <div className="container architecture__grid">
        <Reveal kind="clip" className="architecture__primary">
          <ResponsivePicture image={primary} sizes="(max-width: 860px) 100vw, 38vw" />
        </Reveal>
        <div className="architecture__copy">
          <p className="eyebrow">The villa</p>
          <TextReveal text="Green, calm and within reach of town." as="h2" id="architecture-title" />
          <TextReveal text="Villa Cinnamoon Castle is a private two-story home in a quiet inland residential and nature setting. Tropical trees shape the arrival, balcony views and garden outlook." as="p" className="lede" delayOffset={0.2} />
          <p className="architecture__facts">Entire home · Two-story layout · Tropical garden and covered outdoor areas</p>
          <Link className="text-link" href="/the-villa/">Read the villa story <span aria-hidden="true">→</span></Link>
        </div>
        <Reveal kind="clip" delay={160} className="architecture__detail">
          <ResponsivePicture image={detail} sizes="(max-width: 860px) 48vw, 19vw" />
        </Reveal>
      </div>
    </section>
  );
}
