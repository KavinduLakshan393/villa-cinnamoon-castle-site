"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delayOffset?: number;
  id?: string;
};

export function TextReveal({ text, as: Tag = "span", className = "", delayOffset = 0, id }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small delay to allow layout to settle before observing
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const words = text.split(" ");
  
  return (
    <Tag 
      ref={ref}
      className={`text-reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()} 
      aria-label={text} 
      id={id}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="line"
          aria-hidden="true"
          style={{
            overflow: "clip",
            verticalAlign: "top",
            margin: "-0.2em",
            display: "inline-block",
            marginRight: i === words.length - 1 ? "-0.2em" : "0.25em"
          }}
        >
          <span
            className="word"
            style={{
              padding: "0.2em",
              display: "inline-block",
              willChange: "transform",
              transitionDelay: `${delayOffset + i * 0.04}s`
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
