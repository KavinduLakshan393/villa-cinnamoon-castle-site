"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useMotion } from "@/components/motion/MotionProvider";

const labels: Record<string, string> = { view: "View", drag: "Drag", explore: "Explore" };

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { tier, finePointer, documentVisible } = useMotion();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || tier !== "full" || !finePointer || !documentVisible) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frame = 0;
    let activeTarget: HTMLElement | null = null;

    const render = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      const unsettled = activeTarget && (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1);
      frame = unsettled ? window.requestAnimationFrame(render) : 0;
    };

    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]") ?? null;
      if (target !== activeTarget) {
        activeTarget?.removeAttribute("data-cursor-active");
        activeTarget = target;
        if (activeTarget) {
          activeTarget.setAttribute("data-cursor-active", "true");
          cursor.dataset.label = labels[activeTarget.dataset.cursor ?? ""] ?? "View";
          cursor.classList.add("is-active");
        } else {
          cursor.classList.remove("is-active");
        }
      }
      if (activeTarget) requestRender();
    };

    const deactivate = () => {
      activeTarget?.removeAttribute("data-cursor-active");
      activeTarget = null;
      cursor.classList.remove("is-active");
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", deactivate);
    document.documentElement.addEventListener("mouseleave", deactivate);
    return () => {
      deactivate();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", deactivate);
      document.documentElement.removeEventListener("mouseleave", deactivate);
    };
  }, [documentVisible, finePointer, pathname, tier]);

  return <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />;
}
