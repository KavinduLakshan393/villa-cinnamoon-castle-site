import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata("Accessibility | Villa Cinnamoon Castle", "Accessibility features and reduced-motion behavior for the Villa Cinnamoon Castle website.", "/accessibility/");

export default function AccessibilityPage() {
  return <main id="main"><PageHero breadcrumb="Accessibility" eyebrow="Accessibility statement" title="Designed for a dependable visit." lede="The cinematic layer is optional. Core property information, navigation, gallery controls and the inquiry form remain standard HTML." /><section className="section section--paper"><div className="container container--narrow"><div className="prose"><h2>Accessibility features</h2><ul><li>Skip-to-content link and semantic page landmarks.</li><li>Keyboard-operable navigation, gallery filters and lightbox.</li><li>Visible focus indicators.</li><li>Programmatic form labels, linked error messages and live status feedback.</li><li>Alternative text for meaningful property photographs.</li><li>Written location information that does not depend on the map graphic.</li><li>Native scrolling with no scroll hijacking.</li><li>Reduced-motion support through the system preference.</li></ul><h2>Reduced motion</h2><p>When reduced motion is requested, parallax transforms and large spatial transitions are disabled. Content remains in the same reading order with no pinned blank sections.</p><h2>Known limits</h2><p>The final production operator still needs to publish an approved contact method for accessibility assistance and complete testing with assistive technologies on the deployed environment.</p><h2>Feedback</h2><p>Until a public contact channel is approved, use the <Link href="/contact/">inquiry form</Link> and mention the accessibility support you need.</p></div></div></section></main>;
}
