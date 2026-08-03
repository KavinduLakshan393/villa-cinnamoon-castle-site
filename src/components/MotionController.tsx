"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMotion } from "@/components/motion/MotionProvider";

export function MotionController() {
  const pathname = usePathname();
  const { tier } = useMotion();

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const revealItems = [...document.querySelectorAll<HTMLElement>(".reveal")];
    let revealObserver: IntersectionObserver | undefined;

    if (tier !== "static" && "IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      revealItems.forEach((item) => revealObserver?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const mobileCta = document.querySelector<HTMLElement>(".mobile-cta");
    const inquirySection = document.querySelector<HTMLElement>("#inquiry");
    let ctaObserver: IntersectionObserver | undefined;
    if (mobileCta && inquirySection && "IntersectionObserver" in window) {
      ctaObserver = new IntersectionObserver(([entry]) => { mobileCta.hidden = entry.isIntersecting; }, { threshold: 0.08 });
      ctaObserver.observe(inquirySection);
    }

    return () => {
      revealObserver?.disconnect();
      ctaObserver?.disconnect();
    };
  }, [pathname, tier]);

  return null;
}
