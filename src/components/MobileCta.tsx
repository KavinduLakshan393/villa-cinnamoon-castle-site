import Link from "next/link";

export function MobileCta() {
  return <div className="mobile-cta" aria-label="Quick inquiry"><span>Planning a stay?</span><Link className="button" href="/contact/">Check dates</Link></div>;
}
