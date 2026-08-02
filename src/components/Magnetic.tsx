"use client";

import { useRef, ReactElement, cloneElement, MouseEvent } from "react";

interface MagneticProps {
  children: ReactElement<any>;
  strength?: number;
}

export function Magnetic({ children, strength = 0.2 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Remove transition during hover for instant sticking
    ref.current.style.transition = "none";
    ref.current.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    
    if (children.props.onMouseMove) children.props.onMouseMove(e);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    // Restore transition on leave for snap-back
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    ref.current.style.transform = `translate3d(0px, 0px, 0)`;
    
    if (children.props.onMouseLeave) children.props.onMouseLeave(e);
  };

  return cloneElement(children, {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    "data-magnetic": "true",
    style: {
      ...children.props.style,
      willChange: "transform",
      display: children.props.style?.display || "inline-block" // Ensure it can be transformed
    }
  });
}
