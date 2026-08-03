"use client";

import { useEffect, type RefObject } from "react";
import { calculateScrollProgress } from "@/lib/motion";
import { useMotion } from "@/components/motion/MotionProvider";

type Options = {
  disabled?: boolean;
  cssVariable?: `--${string}`;
  onProgress?: (progress: number, element: HTMLElement) => void;
  rootMargin?: string;
};

export function useScrollProgress<T extends HTMLElement>(ref: RefObject<T | null>, options: Options = {}) {
  const { tier, documentVisible } = useMotion();
  const { disabled = false, cssVariable = "--scene-progress", onProgress, rootMargin = "200px 0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled || tier === "static") return;

    let active = !("IntersectionObserver" in window);
    let frame = 0;

    const render = () => {
      frame = 0;
      if (!active || document.visibilityState === "hidden") return;
      const rect = element.getBoundingClientRect();
      const progress = calculateScrollProgress(rect.top, rect.height, window.innerHeight);
      element.style.setProperty(cssVariable, progress.toFixed(4));
      onProgress?.(progress, element);
    };

    const requestRender = () => {
      if (!frame && active) frame = window.requestAnimationFrame(render);
    };

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
          active = entry.isIntersecting;
          if (active) requestRender();
          else if (frame) {
            window.cancelAnimationFrame(frame);
            frame = 0;
          }
        }, { rootMargin })
      : undefined;

    observer?.observe(element);
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    requestRender();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
    };
  }, [cssVariable, disabled, documentVisible, onProgress, ref, rootMargin, tier]);
}
