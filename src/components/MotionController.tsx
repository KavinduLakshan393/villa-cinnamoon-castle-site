"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type ParallaxElement = HTMLElement & { dataset: DOMStringMap & { parallax?: string } };

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const parallaxItems = [...document.querySelectorAll<ParallaxElement>("[data-parallax]")];
    let frame = 0;

    const renderParallax = () => {
      frame = 0;
      if (reducedMotion.matches) return;
      const viewport = window.innerHeight;
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -150 || rect.top > viewport + 150) return;
        const strength = Number(item.dataset.parallax || 18);
        const centerOffset = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        const y = Math.max(-strength, Math.min(strength, -centerOffset * strength));
        const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
        item.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
        item.style.setProperty("--parallax-progress", progress.toFixed(3));
      });
    };
    const requestParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(renderParallax);
    };

    if (parallaxItems.length && !reducedMotion.matches) {
      renderParallax();
      window.addEventListener("scroll", requestParallax, { passive: true });
      window.addEventListener("resize", requestParallax, { passive: true });
    }

    const revealItems = [...document.querySelectorAll<HTMLElement>(".reveal")];
    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && !reducedMotion.matches) {
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
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
      revealObserver?.disconnect();
      ctaObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
