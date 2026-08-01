import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { getImage } from "@/content/media";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata("Location | Villa Cinnamoon Castle", "Villa Cinnamoon Castle is in a quiet inland setting approximately 3.5 km from Hikkaduwa town and main beach areas in Southern Sri Lanka.", "/location/");

const sign = getImage("02_property_sign_arrival.jpg");
const balcony = getImage("07_balcony_tropical_view.jpg");
const facts = [
  ["Town and beach", "Approximately 3.5 km from Hikkaduwa town and main beach areas."],
  ["Setting", "Quiet inland residential and nature environment with tropical greenery."],
  ["Parking", "Free gated parking on the premises."],
  ["Exact address", "Not published on the public website pending owner approval."],
  ["Directions", "Ask the host for current arrival information."]
] as const;

export default function LocationPage() {
  return <main id="main">
    <PageHero breadcrumb="Location" eyebrow="Hikkaduwa · Southern Province" title="Quietly inland, near the coast." lede="Villa Cinnamoon Castle is approximately 3.5 km from Hikkaduwa town and the main beach areas, in a quieter residential and nature setting." />
    <section className="section"><div className="container"><div className="story-grid"><div className="media-stack reveal"><div className="image-frame image-frame--portrait image-frame--arch"><ResponsivePicture image={sign} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="image-frame image-frame--landscape"><ResponsivePicture image={balcony} sizes="(max-width: 860px) 100vw, 50vw" /></div></div><div className="story-copy reveal"><p className="eyebrow">Location context</p><h2>Within reach of Hikkaduwa, away from the busiest streets.</h2><p className="lede">The source record describes a quiet inland residential and nature setting away from highway noise and heavy tourist traffic. It does not provide a verified travel time or exact public coordinate.</p><div className="notice">The villa is not described as beachfront. The main beach areas are approximately 3.5 km away.</div></div></div></div></section>
    <section className="section section--paper"><div className="container"><div className="location-card reveal"><div className="location-copy"><p className="eyebrow">Approximate map</p><h2>Hikkaduwa area, not an exact pin.</h2><p className="lede">The map is deliberately approximate for privacy and accuracy. Exact directions can be supplied after the host confirms a stay.</p><div className="stat-line"><span className="stat-pill">Hikkaduwa</span><span className="stat-pill">Southern Province</span><span className="stat-pill">Sri Lanka</span></div></div><div className="approx-map" aria-label="Approximate location diagram"><svg aria-hidden="true" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid slice"><rect width="700" height="520" fill="#d6dfd1"/><path d="M-40 470 C105 378 165 355 280 286 C385 224 430 144 520 55 C590 -14 655 -26 760 -38 L760 560 L-40 560Z" fill="#9bb5a0"/><path d="M-30 530 C124 407 206 386 315 306 C420 228 465 129 557 38" fill="none" stroke="#fffdf8" strokeWidth="22"/><path d="M40 120 C175 155 220 205 310 266 C395 324 478 383 665 420" fill="none" stroke="#829684" strokeWidth="8" strokeDasharray="2 15" strokeLinecap="round"/><path d="M450 530 C495 390 525 258 565 60" fill="none" stroke="#a9c4d0" strokeWidth="65" opacity=".85"/><text x="430" y="460" fontFamily="system-ui" fontSize="18" fill="#173225">Coastal side</text><text x="82" y="450" fontFamily="system-ui" fontSize="22" fontWeight="700" fill="#173225">Hikkaduwa area</text></svg><div className="map-label"><span>Approximate villa area</span></div><div className="map-key">No unverified drive or walking time is published.</div></div></div></div></section>
    <section className="section section--sand"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">Before arrival</p><h2>What the location page can confirm.</h2></div><p className="lede">Transport services, landmarks and airport transfers have not been approved in the project source material, so they are not invented here.</p></div><div className="feature-list reveal">{facts.map(([title, copy]) => <div className="feature-row" key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div><div className="button-row" style={{ marginTop: "2rem" }}><Link className="button" href="/contact/">Ask about your stay</Link></div></div></section>
  </main>;
}
