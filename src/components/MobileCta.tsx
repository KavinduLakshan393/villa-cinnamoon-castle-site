import Link from "next/link";
import { AnimatedButton } from "@/components/motion/AnimatedButton";

export function MobileCta() {
  return <div className="mobile-cta" aria-label="Quick inquiry"><span>Planning a stay?</span><AnimatedButton className="button" href="/contact/">Check dates</AnimatedButton></div>;
}
