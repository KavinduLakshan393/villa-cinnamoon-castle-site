import Link from "next/link";
import { AnimatedButton } from "@/components/motion/AnimatedButton";

export default function NotFound() {
  return <main id="main"><section className="page-hero"><div className="container"><p className="eyebrow">404 · Page not found</p><h1 className="display">This path does not lead to the villa.</h1><p className="lede">Return to the property overview or use the main navigation to continue.</p><div className="button-row"><AnimatedButton className="button" href="/">Return home</AnimatedButton></div></div></section></main>;
}
