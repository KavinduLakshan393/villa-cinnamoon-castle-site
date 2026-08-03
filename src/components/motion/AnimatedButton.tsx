import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

// Helper to extract plain text for data-text if possible
function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node && node.props) {
    return extractText(node.props.children);
  }
  return "";
}

export function AnimatedButton({ children, className = "", href, type = "button", disabled, onClick }: Props) {
  const isLink = Boolean(href);
  const textContent = extractText(children);
  
  // Ensure the base button class is always present for foundational styling
  const combinedClassName = `button animated-button ${className.replace(/\bbutton\b/g, '')}`.replace(/\s+/g, ' ').trim();

  const content = (
    <>
      <span className="animated-button__border" />
      <span className="animated-button__ripple">
        <span />
      </span>
      <span className="animated-button__title">
        <span data-text={textContent}>{children}</span>
      </span>
    </>
  );

  if (isLink && href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
