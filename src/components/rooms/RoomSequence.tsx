"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { useMotionTier } from "@/hooks/useMotionTier";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { roomIndexFromProgress } from "@/lib/motion";
import type { PropertyImage } from "@/content/media";

export type RoomSequenceItem = {
  image: PropertyImage;
  label: string;
  description: string;
};

export function RoomSequence({ rooms }: { rooms: readonly RoomSequenceItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { tier } = useMotionTier();

  const renderProgress = useCallback((progress: number, element: HTMLElement) => {
    const nextIndex = roomIndexFromProgress(progress, rooms.length);
    setActiveIndex((current) => current === nextIndex ? current : nextIndex);
    element.style.setProperty("--rooms-progress", progress.toFixed(4));
  }, [rooms.length]);

  useScrollProgress(sectionRef, { onProgress: renderProgress, disabled: tier === "static" });

  return (
    <section ref={sectionRef} className="rooms-story" data-motion-tier={tier} aria-label="Five photographed bedrooms">
      <div className="rooms-story__sticky">
        <div className="rooms-story__counter" aria-hidden="true">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(rooms.length).padStart(2, "0")}</span>
        </div>
        <ol className="rooms-story__list">
          {rooms.map((room, index) => (
            <li
              className={`rooms-story__panel${index === activeIndex ? " is-active" : ""}`}
              key={room.image.name}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <div className="rooms-story__media" data-cursor="explore">
                <ResponsivePicture image={room.image} sizes="(max-width: 860px) 82vw, 64vw" />
              </div>
              <div className="rooms-story__copy">
                <span className="rooms-story__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{room.label}</h3>
                <p>{room.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link className="rooms-story__link text-link" href="/rooms/">Explore every room <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
