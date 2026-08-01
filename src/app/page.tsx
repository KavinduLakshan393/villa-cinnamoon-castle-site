import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { getImage } from "@/content/media";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata(
  "Villa Cinnamoon Castle | Five-Bedroom Stay Near Hikkaduwa",
  "Explore Villa Cinnamoon Castle, a peaceful five-bedroom private home for up to 10 guests approximately 3.5 km from Hikkaduwa town, with a kitchen, Wi-Fi, workspace, garden and gated parking.",
  "/"
);

const hero = getImage("01_hero_exterior_day.jpg");
const gate = getImage("03_garden_gate_reveal.jpg");
const balcony = getImage("07_balcony_tropical_view.jpg");
const stairs = getImage("10_staircase_living_flow.jpg");
const landing = getImage("12_upper_landing_high_resolution.jpg");
const bedroom1 = getImage("16_bedroom_1_master_high_resolution.jpg");
const bedroom2 = getImage("17_bedroom_2_air_conditioned.jpg");
const bedroom5 = getImage("20_bedroom_5_white_linen.jpg");
const kitchen = getImage("14_full_kitchen_wide.jpg");

const facts = [
  ["/rooms/", "10", "Guests"], ["/rooms/", "5", "Bedrooms"], ["/rooms/", "5", "Beds"],
  ["/rooms/#bathrooms", "2", "Bathrooms"], ["/location/", "3.5 km", "From Hikkaduwa town"],
  ["/the-villa/#work", "Wi-Fi", "Workspace"], ["/the-villa/#parking", "Gated", "Parking"]
] as const;

const amenities = [
  ["⌁", "High-speed Wi-Fi", "For browsing, work and study."],
  ["⌨", "Dedicated workspace", "Long table and seating upstairs."],
  ["◇", "Full kitchen", "Cooking essentials and appliances."],
  ["◉", "Hot water", "Available in two full bathrooms."],
  ["▣", "Washing machine", "Washer provided; no clothes dryer."],
  ["⌂", "Gated parking", "Free parking on the premises."]
] as const;

export default function HomePage() {
  return <main id="main">
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal"><p className="hero-kicker">Hikkaduwa · Southern Sri Lanka</p><h1 className="display">Villa Cinnamoon Castle</h1><p className="lede">A peaceful private villa for families and groups of up to 10, surrounded by tropical greenery approximately 3.5 km from Hikkaduwa town and main beach areas.</p><div className="button-row"><Link className="button" href="/contact/">Check dates <span aria-hidden="true">→</span></Link><a className="button button--secondary" href="#story">Explore the villa</a></div></div>
        <div className="hero-visual reveal" data-parallax="22"><div className="hero-frame"><ResponsivePicture image={hero} sizes="(max-width: 860px) 88vw, 31rem" loading="eager" fetchPriority="high" /></div><aside className="hero-note" aria-label="Property capacity"><strong>10</strong><span>guests across five bedrooms</span></aside></div>
      </div>
      <a className="hero-scroll" href="#facts">Scroll to discover</a>
    </section>
    <div className="facts-wrap" id="facts"><div className="container"><div className="facts">{facts.map(([href, value, label]) => <Link className="fact" href={href} key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></Link>)}</div></div></div>

    <section className="section" id="story"><div className="container">
      <div className="section-heading reveal"><div><p className="eyebrow">A quieter side of Hikkaduwa</p><h2>Green, calm and within reach of town.</h2></div><p className="lede">The villa sits in a quiet inland residential and nature setting. Tropical trees shape the arrival, balcony views and garden outlook without pretending the home is beachfront.</p></div>
      <div className="story-grid"><div className="media-stack reveal"><div className="image-frame image-frame--portrait image-frame--arch" data-parallax="20"><ResponsivePicture image={gate} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="image-frame image-frame--landscape" data-parallax="12"><ResponsivePicture image={balcony} sizes="(max-width: 860px) 100vw, 50vw" /></div></div><div className="story-copy reveal"><p className="eyebrow">Arrival</p><h2>Through the garden, into your own space.</h2><p className="lede">A private two-story home with a covered porch, upper balcony, mature greenery and free gated parking on the premises.</p><div className="stat-line"><span className="stat-pill">Entire home</span><span className="stat-pill">Tropical garden</span><span className="stat-pill">Covered porch</span></div><p><Link className="text-link" href="/the-villa/">See the villa details <span aria-hidden="true">→</span></Link></p></div></div>
    </div></section>

    <section className="section section--dark"><div className="container"><div className="story-grid story-grid--reverse">
      <div className="story-copy reveal"><p className="eyebrow">Space to gather</p><h2>Living areas connected across two levels.</h2><p className="lede">Dining, seating, a tall stair volume and an upper landing create shared spaces where a group can come together without crowding every moment into one room.</p><div className="stat-line"><span className="stat-pill">Two-story layout</span><span className="stat-pill">Living and dining</span><span className="stat-pill">Upper landing</span></div></div>
      <div className="media-stack media-stack--dark reveal"><div className="image-frame image-frame--portrait" data-parallax="22"><ResponsivePicture image={stairs} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="image-frame image-frame--landscape" data-parallax="10"><ResponsivePicture image={landing} sizes="(max-width: 860px) 100vw, 50vw" /></div></div>
    </div></div></section>

    <section className="section section--paper" id="rooms"><div className="container">
      <div className="section-heading reveal"><div><p className="eyebrow">Five bedrooms</p><h2>Room for families and groups of up to ten.</h2></div><div><p className="lede">The villa has five beds in total: four Super King beds and one Queen bed. One bedroom has air conditioning; the remaining bedrooms use fans.</p><p style={{ marginTop: "1.2rem" }}><Link className="text-link" href="/rooms/">Explore every bedroom <span aria-hidden="true">→</span></Link></p></div></div>
      <div className="cards">
        <article className="card reveal"><div className="card-media card-media--portrait"><ResponsivePicture image={bedroom1} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Bedroom 1</p><h3>Warm timber and natural light</h3><p>One of five individually photographed bedrooms.</p></div></article>
        <article className="card reveal"><div className="card-media card-media--portrait"><ResponsivePicture image={bedroom2} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Bedroom 2</p><h3>The air-conditioned bedroom</h3><p>The other four bedrooms are cooled with fans.</p></div></article>
        <article className="card reveal"><div className="card-media card-media--portrait"><ResponsivePicture image={bedroom5} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Bedroom 5</p><h3>A simple, restful setting</h3><p>Room labels remain neutral until the host approves names.</p></div></article>
      </div>
    </div></section>

    <section className="section" id="work"><div className="container"><div className="story-grid"><div className="image-frame image-frame--wide reveal" data-parallax="16"><ResponsivePicture image={kitchen} sizes="(max-width: 860px) 100vw, 58vw" /></div><div className="story-copy reveal"><p className="eyebrow">Stay, cook and work</p><h2>Practical comforts for more than a night.</h2><p className="lede">Prepare meals in the full kitchen, use the dedicated upper-floor workspace, connect to high-speed Wi-Fi and make use of the washing machine during longer stays.</p><div className="stat-line"><span className="stat-pill">Full kitchen</span><span className="stat-pill">High-speed Wi-Fi</span><span className="stat-pill">Washing machine</span></div></div></div></div></section>

    <section className="section section--sand"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">Confirmed amenities</p><h2>The details that make a group stay work.</h2></div><p className="lede">Every amenity shown below comes from the supplied property record. No pool, beachfront access or fully air-conditioned claim has been added.</p></div><div className="amenity-grid reveal">{amenities.map(([icon, title, copy]) => <div className="amenity" key={title}><span className="amenity-icon" aria-hidden="true">{icon}</span><strong>{title}</strong><span>{copy}</span></div>)}</div></div></section>

    <section className="section"><div className="container"><div className="location-card reveal"><div className="location-copy"><p className="eyebrow">Near Hikkaduwa</p><h2>Approximately 3.5 km from town and main beach areas.</h2><p className="lede">The public map remains intentionally approximate until the owner approves an exact pin. No unverified journey times are shown.</p><div className="button-row"><Link className="button" href="/location/">Explore the location</Link><Link className="button button--secondary" href="/contact/">Ask a question</Link></div></div><div className="approx-map" aria-label="Approximate location diagram for the Hikkaduwa area"><svg aria-hidden="true" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid slice"><path d="M-40 470 C105 378 165 355 280 286 C385 224 430 144 520 55 C590 -14 655 -26 760 -38 L760 560 L-40 560Z" fill="#9bb5a0"/><path d="M-30 530 C124 407 206 386 315 306 C420 228 465 129 557 38" fill="none" stroke="#f9f7ef" strokeWidth="22" opacity=".95"/><path d="M24 120 C162 152 222 195 310 266 C380 322 453 377 650 425" fill="none" stroke="#879d89" strokeWidth="8" strokeDasharray="2 15" strokeLinecap="round"/><circle cx="565" cy="72" r="28" fill="#adc6d2"/><text x="535" y="122" fontFamily="system-ui" fontSize="18" fill="#173225">Coast</text><text x="84" y="450" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#173225">Hikkaduwa area</text></svg><div className="map-label"><span>Approximate villa area</span></div><div className="map-key">Exact arrival instructions can be shared by the host after a stay is confirmed.</div></div></div></div></section>

    <section className="section section--paper"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">Practical information</p><h2>Clear details before you inquire.</h2></div><p className="lede">Villa Cinnamoon Castle is a new listing with no reviews yet. Trust is built here through authentic photographs and precise disclosures.</p></div><div className="practical">
      <details className="disclosure reveal"><summary>Cooling and bedrooms</summary><div className="disclosure-content">One bedroom has air conditioning. The remaining four bedrooms have fans. The total bed inventory is four Super King beds and one Queen bed.</div></details>
      <details className="disclosure reveal"><summary>Safety information</summary><div className="disclosure-content">Exterior security cameras are present. Please contact the host for the latest details about smoke and carbon-monoxide alarms.</div></details>
      <details className="disclosure reveal"><summary>Laundry and climate</summary><div className="disclosure-content">A washing machine is available. There is no clothes dryer and no central heating, which is not required for the tropical climate.</div></details>
      <details className="disclosure reveal"><summary>Booking status</summary><div className="disclosure-content">This website accepts inquiries only. Dates, rates and availability are not confirmed until the host replies.</div></details>
    </div></div></section>

    <section className="section section--dark" id="inquiry"><div className="container"><div className="inquiry-shell"><div className="inquiry-copy reveal"><p className="eyebrow">Plan your stay</p><h2>Ask about dates, pricing or a longer stay.</h2><p className="lede">Share the basics and the host can reply with current availability and next steps.</p><p className="inquiry-note">Submitting an inquiry does not reserve the villa. Your dates are confirmed only when the host replies.</p></div><div className="reveal"><InquiryForm /></div></div></div></section>
  </main>;
}
