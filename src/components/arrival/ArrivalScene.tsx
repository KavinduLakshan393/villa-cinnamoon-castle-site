"use client";

import Link from "next/link";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { useCallback, useRef } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { ArrivalForeground } from "@/components/arrival/ArrivalForeground";
import { useMotionTier } from "@/hooks/useMotionTier";
import { usePointerDrift } from "@/hooks/usePointerDrift";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { smoothRange } from "@/lib/motion";
import type { PropertyImage } from "@/content/media";

export function ArrivalScene({ image }: { image: PropertyImage }) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const { tier } = useMotionTier();

  const renderProgress = useCallback((progress: number, element: HTMLElement) => {
    const approach = smoothRange(progress, 0.08, 0.64);
    const copyExit = smoothRange(progress, 0.4, 0.72);
    const foregroundProgress = smoothRange(progress, 0.12, 0.86);
    element.style.setProperty("--arrival-approach", approach.toFixed(4));
    element.style.setProperty("--arrival-frame-top", `${(7.5 * (1 - approach)).toFixed(3)}rem`);
    element.style.setProperty("--arrival-frame-side", `${(8 * (1 - approach)).toFixed(3)}vw`);
    element.style.setProperty("--arrival-frame-bottom", `${(5 * (1 - approach)).toFixed(3)}rem`);
    element.style.setProperty("--arrival-frame-left", `${(39 * (1 - approach)).toFixed(3)}vw`);
    element.style.setProperty("--arrival-image-scale", (1.035 + approach * 0.02).toFixed(4));
    element.style.setProperty("--arrival-copy-opacity", (1 - copyExit).toFixed(4));
    element.style.setProperty("--arrival-copy-y", `${(-72 * copyExit).toFixed(2)}px`);
    element.style.setProperty("--arrival-foreground-opacity", (0.38 + approach * 0.35).toFixed(4));
    element.style.setProperty("--arrival-foreground-y", `${(-28 * foregroundProgress).toFixed(2)}px`);
  }, []);

  useScrollProgress(sectionRef, { cssVariable: "--arrival-progress", onProgress: renderProgress });
  usePointerDrift(stageRef, { max: 8, xVariable: "--arrival-pointer-x", yVariable: "--arrival-pointer-y" });

  return (
    <section
      ref={sectionRef}
      className="arrival"
      aria-labelledby="villa-title"
      data-motion-tier={tier}
      data-header-theme="dark"
    >
      <div ref={stageRef} className="arrival__stage">
        <div className="arrival__ambient" aria-hidden="true" />
        <div className="arrival__property">
          <ResponsivePicture image={image} sizes="100vw" loading="eager" fetchPriority="high" />
        </div>
        <ArrivalForeground />
        <div className="container arrival__content">
          <p className="arrival__location">Hikkaduwa, Sri Lanka</p>
          <h1 className="display" id="villa-title">Villa Cinnamoon Castle</h1>
          <p className="arrival__statement">A private villa shaped by tropical greenery.</p>
          <AnimatedButton className="button arrival__cta" href="/contact/">Check dates <span aria-hidden="true">→</span></AnimatedButton>
        </div>
        <a className="arrival__cue" href="#property-facts">Scroll to arrive <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
