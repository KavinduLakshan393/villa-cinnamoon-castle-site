import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  kind?: "fade" | "clip" | "heading";
  delay?: number;
};

export function Reveal({ children, className = "", kind = "fade", delay = 0 }: Props) {
  const safeDelay = Math.max(0, Math.min(480, delay));
  return (
    <div
      className={`reveal ${className}`.trim()}
      data-reveal={kind}
      style={{ "--reveal-delay": `${safeDelay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
