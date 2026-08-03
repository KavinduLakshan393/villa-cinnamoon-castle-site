"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { MotionTier } from "@/lib/motion";

type MotionContextValue = {
  tier: MotionTier;
  reducedMotion: boolean;
  finePointer: boolean;
  documentVisible: boolean;
};

const MotionContext = createContext<MotionContextValue>({
  tier: "static",
  reducedMotion: true,
  finePointer: false,
  documentVisible: true
});

export function MotionProvider({ children, overrideTier }: { children: ReactNode; overrideTier?: MotionTier }) {
  const [state, setState] = useState<MotionContextValue>({
    tier: overrideTier ?? "static",
    reducedMotion: overrideTier === "static",
    finePointer: false,
    documentVisible: true
  });

  useEffect(() => {
    if (overrideTier) {
      setState({
        tier: overrideTier,
        reducedMotion: overrideTier === "static",
        finePointer: overrideTier === "full",
        documentVisible: document.visibilityState !== "hidden"
      });
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const wide = window.matchMedia("(min-width: 861px)");

    const update = () => {
      const reducedMotion = reduced.matches;
      const finePointer = !coarse.matches;
      const tier: MotionTier = reducedMotion ? "static" : finePointer && wide.matches ? "full" : "light";
      const documentVisible = document.visibilityState !== "hidden";
      setState({ tier, reducedMotion, finePointer, documentVisible });
      document.documentElement.dataset.motionTier = tier;
    };

    update();
    reduced.addEventListener?.("change", update);
    coarse.addEventListener?.("change", update);
    wide.addEventListener?.("change", update);
    document.addEventListener("visibilitychange", update);

    return () => {
      reduced.removeEventListener?.("change", update);
      coarse.removeEventListener?.("change", update);
      wide.removeEventListener?.("change", update);
      document.removeEventListener("visibilitychange", update);
      delete document.documentElement.dataset.motionTier;
    };
  }, [overrideTier]);

  const value = useMemo(() => state, [state]);
  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion() {
  return useContext(MotionContext);
}
