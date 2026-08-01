import type { Metadata } from "next";
import Link from "next/link";
import { CinematicHero, type CinematicHeroSlide } from "@/components/CinematicHero";
import { InquiryForm } from "@/components/InquiryForm";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { RoomSequence, type RoomSequenceItem } from "@/components/RoomSequence";
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
const living = getImage("09_living_dining_overview.jpg");
const stairs = getImage("10_staircase_living_flow.jpg");
const landing = getImage("12_upper_landing_high_resolution.jpg");
const kitchen = getImage("14_full_kitchen_wide.jpg");
const night = getImage("06_exterior_night_ambience.jpg");
const bedroom1 = getImage("16_bedroom_1_master_high_resolution.jpg");
const bedroom2 = getImage("17_bedroom_2_air_conditioned.jpg");
const bedroom3 = getImage("18_bedroom_3_wide.jpg");
const bedroom4 = getImage("19_bedroom_4_four_poster.jpg");
const bedroom5 = getImage("20_bedroom_5_white_linen.jpg");

const heroSlides: readonly CinematicHeroSlide[] = [
  { image: hero, kicker: "Arrival", title: "A private villa shaped by tropical greenery.", copy: "A peaceful entire home for families and groups of up to ten, approximately 3.5 km from Hikkaduwa town and main beach areas." },
  { image: gate, kicker: "Tropical setting", title: "A quieter side of Hikkaduwa.", copy: "The garden approach, mature trees and calm inland setting create a sense of privacy without presenting the villa as beachfront." },
  { image: living, kicker: "Shared spaces", title: "Room to gather across two levels.", copy: "Living, dining, balcony and upper-floor spaces give a group places to come together and room to settle into its own rhythm." },
  { image: bedroom1, kicker: "Five bedrooms", title: "A considered stay for up to ten guests.", copy: "The home has five beds, two full bathrooms with hot water, one air-conditioned bedroom and fans in the remaining rooms." },
  { image: kitchen, kicker: "Everyday comfort", title: "Stay, cook and work with ease.", copy: "A full kitchen, high-speed Wi-Fi, dedicated workspace and washing machine support both short visits and longer stays." }
];

const rooms: readonly RoomSequenceItem[] = [
  { image: bedroom1, label: "Bedroom 1", description: "Warm timber and natural light" },
  { image: bedroom2, label: "Bedroom 2", description: "The air-conditioned bedroom" },
  { image: bedroom3, label: "Bedroom 3", description: "A wide, private sleeping space" },
  { image: bedroom4, label: "Bedroom 4", description: "Dark timber and calm tones" },
  { image: bedroom5, label: "Bedroom 5", description: "White linen and soft daylight" }
];

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
  return (
    <main id="main">
      <CinematicHero slides={heroSlides} />

      <div className="facts-wrap" id="facts">
        <div className="container">
          <div className="facts">
            {facts.map(([href, value, label]) => (
              <Link className="fact" href={href} key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section section--editorial" id="story">
        <div className="container editorial-overlap">
          <div className="editorial-overlap__media reveal" data-reveal="clip" data-parallax="18">
            <ResponsivePicture image={gate} sizes="(max-width: 860px) 82vw, 35vw" />
          </div>
          <div className="editorial-overlap__panel reveal" data-reveal-delay="120">
            <p className="eyebrow">The villa</p>
            <h2>Green, calm and within reach of town.</h2>
            <p className="lede">Villa Cinnamoon Castle is a private two-story home in a quiet inland residential and nature setting. Tropical trees shape the arrival, balcony views and garden outlook.</p>
            <div className="stat-line"><span className="stat-pill">Entire home</span><span className="stat-pill">Tropical garden</span><span className="stat-pill">Covered porch</span></div>
            <p><Link className="text-link" href="/the-villa/">Read the villa story <span aria-hidden="true">→</span></Link></p>
          </div>
          <div className="editorial-overlap__accent reveal" data-reveal="clip" data-reveal-delay="220" data-parallax="28">
            <ResponsivePicture image={balcony} sizes="(max-width: 860px) 45vw, 18vw" />
          </div>
        </div>
      </section>

      <section className="section section--dark room-showcase" id="rooms" aria-labelledby="rooms-title">
        <div className="container">
          <div className="section-heading reveal">
            <div><p className="eyebrow">The stay</p><h2 id="rooms-title">Five bedrooms for up to ten guests.</h2></div>
            <div><p className="lede">The villa has four Super King beds and one Queen bed. One bedroom has air conditioning; the remaining bedrooms use fans.</p><p className="section-link"><Link className="text-link" href="/rooms/">Explore every room <span aria-hidden="true">→</span></Link></p></div>
          </div>
          <RoomSequence rooms={rooms} />
        </div>
      </section>

      <section className="immersive-chapter" aria-labelledby="gather-title">
        <div className="immersive-chapter__media" data-parallax="14">
          <ResponsivePicture image={landing} sizes="100vw" />
        </div>
        <div className="immersive-chapter__shade" aria-hidden="true" />
        <div className="immersive-chapter__floating reveal" data-reveal="clip" data-parallax="32">
          <ResponsivePicture image={stairs} sizes="(max-width: 860px) 42vw, 22vw" />
        </div>
        <div className="container immersive-chapter__content">
          <div className="immersive-chapter__copy reveal">
            <p className="eyebrow">Space to gather</p>
            <h2 id="gather-title">Living areas connected across two levels.</h2>
            <p className="lede">Dining, seating, a tall stair volume and an upper landing create shared spaces where a group can come together without crowding every moment into one room.</p>
            <div className="stat-line"><span className="stat-pill">Two-story layout</span><span className="stat-pill">Living and dining</span><span className="stat-pill">Upper landing</span></div>
          </div>
        </div>
      </section>

      <section className="section section--paper" id="work">
        <div className="container split-feature">
          <div className="split-feature__media reveal" data-reveal="clip" data-parallax="16">
            <ResponsivePicture image={kitchen} sizes="(max-width: 860px) 100vw, 58vw" />
          </div>
          <div className="split-feature__panel reveal" data-reveal-delay="140">
            <p className="eyebrow">Stay, cook and work</p>
            <h2>Practical comforts for more than a night.</h2>
            <p className="lede">Prepare meals in the full kitchen, use the dedicated upper-floor workspace, connect to high-speed Wi-Fi and make use of the washing machine during longer stays.</p>
            <div className="split-feature__rule" aria-hidden="true" />
            <div className="stat-line"><span className="stat-pill">Full kitchen</span><span className="stat-pill">High-speed Wi-Fi</span><span className="stat-pill">Washing machine</span></div>
            <p><Link className="text-link" href="/the-villa/#work">See the practical spaces <span aria-hidden="true">→</span></Link></p>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section-heading reveal"><div><p className="eyebrow">Confirmed amenities</p><h2>The details that make a group stay work.</h2></div><p className="lede">Every amenity shown below comes from the supplied property record. No pool, beachfront access or fully air-conditioned claim has been added.</p></div>
          <div className="amenity-grid reveal">
            {amenities.map(([icon, title, copy]) => <div className="amenity" key={title}><span className="amenity-icon" aria-hidden="true">{icon}</span><strong>{title}</strong><span>{copy}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="location-card reveal">
            <div className="location-copy"><p className="eyebrow">Near Hikkaduwa</p><h2>Approximately 3.5 km from town and main beach areas.</h2><p className="lede">The public map remains intentionally approximate until the owner approves an exact pin. No unverified journey times are shown.</p><div className="button-row"><Link className="button" href="/location/">Explore the location</Link><Link className="button button--secondary" href="/contact/">Ask a question</Link></div></div>
            <div className="approx-map" aria-label="Approximate location diagram for the Hikkaduwa area"><svg aria-hidden="true" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid slice"><path d="M-40 470 C105 378 165 355 280 286 C385 224 430 144 520 55 C590 -14 655 -26 760 -38 L760 560 L-40 560Z" fill="#9bb5a0"/><path d="M-30 530 C124 407 206 386 315 306 C420 228 465 129 557 38" fill="none" stroke="#f9f7ef" strokeWidth="22" opacity=".95"/><path d="M24 120 C162 152 222 195 310 266 C380 322 453 377 650 425" fill="none" stroke="#879d89" strokeWidth="8" strokeDasharray="2 15" strokeLinecap="round"/><circle cx="565" cy="72" r="28" fill="#adc6d2"/><text x="535" y="122" fontFamily="system-ui" fontSize="18" fill="#173225">Coast</text><text x="84" y="450" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#173225">Hikkaduwa area</text></svg><div className="map-label"><span>Approximate villa area</span></div><div className="map-key">Exact arrival instructions can be shared by the host after a stay is confirmed.</div></div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section-heading reveal"><div><p className="eyebrow">Practical information</p><h2>Clear details before you inquire.</h2></div><p className="lede">Villa Cinnamoon Castle is a new listing with no reviews yet. Trust is built here through authentic photographs and precise disclosures.</p></div>
          <div className="practical">
            <details className="disclosure reveal"><summary>Cooling and bedrooms</summary><div className="disclosure-content">One bedroom has air conditioning. The remaining four bedrooms have fans. The total bed inventory is four Super King beds and one Queen bed.</div></details>
            <details className="disclosure reveal"><summary>Safety information</summary><div className="disclosure-content">Exterior security cameras are present. Please contact the host for the latest details about smoke and carbon-monoxide alarms.</div></details>
            <details className="disclosure reveal"><summary>Laundry and climate</summary><div className="disclosure-content">A washing machine is available. There is no clothes dryer and no central heating, which is not required for the tropical climate.</div></details>
            <details className="disclosure reveal"><summary>Booking status</summary><div className="disclosure-content">This website accepts inquiries only. Dates, rates and availability are not confirmed until the host replies.</div></details>
          </div>
        </div>
      </section>

      <section className="evening-transition" aria-labelledby="evening-title">
        <div className="container evening-transition__frame">
          <div className="evening-transition__media" data-parallax="12"><ResponsivePicture image={night} sizes="(max-width: 860px) 100vw, 78rem" /></div>
          <div className="evening-transition__shade" aria-hidden="true" />
          <div className="evening-transition__copy reveal">
            <p className="eyebrow">Evening at the villa</p>
            <h2 id="evening-title">Let the movement settle.</h2>
            <p>When you are ready, share your dates and questions. The host will reply with current availability, pricing and next steps.</p>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="inquiry">
        <div className="container">
          <div className="inquiry-shell">
            <div className="inquiry-copy reveal"><p className="eyebrow">Plan your stay</p><h2>Ask about dates, pricing or a longer stay.</h2><p className="lede">Share the basics and the host can reply with current availability and next steps.</p><p className="inquiry-note">Submitting an inquiry does not reserve the villa. Your dates are confirmed only when the host replies.</p></div>
            <div className="reveal"><InquiryForm /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
