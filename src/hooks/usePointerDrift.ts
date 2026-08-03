"use client";

import { useEffect, type RefObject } from "react";
import { clamp } from "@/lib/motion";
import { useMotion } from "@/components/motion/MotionProvider";

type Options = {
  max?: number;
  xVariable?: `--${string}`;
  yVariable?: `--${string}`;
};

export function usePointerDrift<T extends HTMLElement>(ref: RefObject<T | null>, options: Options = {}) {
  const { tier, finePointer, documentVisible } = useMotion();
  const { max = 8, xVariable = "--pointer-x", yVariable = "--pointer-y" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element || tier !== "full" || !finePointer || !documentVisible) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      element.style.setProperty(xVariable, `${currentX.toFixed(2)}px`);
      element.style.setProperty(yVariable, `${currentY.toFixed(2)}px`);
      const unsettled = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
      frame = unsettled ? window.requestAnimationFrame(render) : 0;
    };

    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / Math.max(1, rect.width), 0, 1) * 2 - 1;
      const y = clamp((event.clientY - rect.top) / Math.max(1, rect.height), 0, 1) * 2 - 1;
      targetX = x * max;
      targetY = y * max;
      requestRender();
    };

    const leave = () => {
      targetX = 0;
      targetY = 0;
      requestRender();
    };

    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", leave, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      element.style.removeProperty(xVariable);
      element.style.removeProperty(yVariable);
    };
  }, [documentVisible, finePointer, max, ref, tier, xVariable, yVariable]);
}
