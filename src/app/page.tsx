import type { Metadata } from "next";
import Link from "next/link";
import { AmenitiesInventory } from "@/components/AmenitiesInventory";
import { ArchitectureChapter } from "@/components/ArchitectureChapter";
import { ArrivalScene } from "@/components/arrival/ArrivalScene";
import { EditorialFactRail } from "@/components/EditorialFactRail";
import { EveningTransition } from "@/components/EveningTransition";
import { InquiryForm } from "@/components/InquiryForm";
import { RoomSequence, type RoomSequenceItem } from "@/components/RoomSequence";
import { SharedSpacesChapter } from "@/components/SharedSpacesChapter";
import { getImage } from "@/content/media";
import { pageMetadata } from "@/lib/site-metadata";
import { TextReveal } from "@/components/motion/TextReveal";
import { AnimatedButton } from "@/components/motion/AnimatedButton";

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
const kitchen = getImage("14_full_kitchen_wide.jpg");
const night = getImage("06_exterior_night_ambience.jpg");

const rooms: readonly RoomSequenceItem[] = [
  { image: getImage("16_bedroom_1_master_high_resolution.jpg"), label: "Bedroom 1", description: "Warm timber and natural light" },
  { image: getImage("17_bedroom_2_air_conditioned.jpg"), label: "Bedroom 2", description: "The air-conditioned bedroom" },
  { image: getImage("18_bedroom_3_wide.jpg"), label: "Bedroom 3", description: "A wide, private sleeping space" },
  { image: getImage("19_bedroom_4_four_poster.jpg"), label: "Bedroom 4", description: "Dark timber and calm tones" },
  { image: getImage("20_bedroom_5_white_linen.jpg"), label: "Bedroom 5", description: "White linen and soft daylight" }
];

export default function HomePage() {
  return (
    <main id="main">
      <ArrivalScene image={hero} />
      <EditorialFactRail />
      <ArchitectureChapter primary={gate} detail={balcony} />

      <section className="rooms-chapter" id="rooms" data-header-theme="dark" aria-labelledby="rooms-title">
        <div className="container rooms-chapter__intro">
          <div>
            <p className="eyebrow">The stay</p>
            <TextReveal text="Five bedrooms for up to ten guests." as="h2" id="rooms-title" />
          </div>
          <div>
            <TextReveal text="Four Super King beds and one Queen bed. One bedroom has air conditioning; the remaining bedrooms use fans." as="p" className="lede" delayOffset={0.2} />
          </div>
        </div>
        <RoomSequence rooms={rooms} />
      </section>

      <SharedSpacesChapter primary={landing} secondary={stairs} />
      <AmenitiesInventory image={kitchen} />

      <section className="location-editorial section" data-header-theme="light" aria-labelledby="location-title">
        <div className="container location-editorial__grid">
          <div className="location-editorial__copy reveal">
            <p className="eyebrow">Near Hikkaduwa</p>
            <TextReveal text="Approximately 3.5 km from town and main beach areas." as="h2" id="location-title" />
            <TextReveal text="The public map remains intentionally approximate until the owner approves an exact pin. No unverified journey times are shown." as="p" className="lede" delayOffset={0.2} />
            <div className="button-row">
              <AnimatedButton className="button" href="/location/">Explore the location</AnimatedButton>
              <AnimatedButton className="button button--secondary" href="/contact/">Ask a question</AnimatedButton>
            </div>
          </div>
          <div className="approx-map location-editorial__map" aria-label="Approximate location diagram for the Hikkaduwa area">
            <svg aria-hidden="true" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid slice">
              <path d="M-40 470 C105 378 165 355 280 286 C385 224 430 144 520 55 C590 -14 655 -26 760 -38 L760 560 L-40 560Z" fill="#7d8d78" />
              <path d="M-30 530 C124 407 206 386 315 306 C420 228 465 129 557 38" fill="none" stroke="#f5f2ea" strokeWidth="22" opacity=".95" />
              <path d="M24 120 C162 152 222 195 310 266 C380 322 453 377 650 425" fill="none" stroke="#617260" strokeWidth="8" strokeDasharray="2 15" strokeLinecap="round" />
              <circle cx="565" cy="72" r="28" fill="#adc6d2" />
              <text x="535" y="122" fontFamily="system-ui" fontSize="18" fill="#10110f">Coast</text>
              <text x="84" y="450" fontFamily="system-ui" fontSize="20" fontWeight="700" fill="#10110f">Hikkaduwa area</text>
            </svg>
            <div className="map-label"><span>Approximate villa area</span></div>
            <div className="map-key">Exact arrival instructions can be shared by the host after a stay is confirmed.</div>
          </div>
        </div>
      </section>

      <section className="section practical-section" data-header-theme="light" aria-labelledby="practical-title">
        <div className="container">
          <div className="section-heading reveal">
            <div><p className="eyebrow">Practical information</p><TextReveal text="Clear details before you inquire." as="h2" id="practical-title" /></div>
            <TextReveal text="Villa Cinnamoon Castle is a new listing with no reviews yet. Trust is built here through authentic photographs and precise disclosures." as="p" className="lede" delayOffset={0.2} />
          </div>
          <div className="practical">
            <details className="disclosure reveal"><summary>Cooling and bedrooms</summary><div className="disclosure-content">One bedroom has air conditioning. The remaining four bedrooms have fans. The total bed inventory is four Super King beds and one Queen bed.</div></details>
            <details className="disclosure reveal"><summary>Safety information</summary><div className="disclosure-content">Exterior security cameras are present. Please contact the host for the latest details about smoke and carbon-monoxide alarms.</div></details>
            <details className="disclosure reveal"><summary>Laundry and climate</summary><div className="disclosure-content">A washing machine is available. There is no clothes dryer and no central heating, which is not required for the tropical climate.</div></details>
            <details className="disclosure reveal"><summary>Booking status</summary><div className="disclosure-content">This website accepts inquiries only. Dates, rates and availability are not confirmed until the host replies.</div></details>
          </div>
        </div>
      </section>

      <EveningTransition image={night} />

      <section className="inquiry-section section" id="inquiry" data-header-theme="dark" aria-labelledby="inquiry-title">
        <div className="container inquiry-shell">
          <div className="inquiry-copy reveal">
            <p className="eyebrow">Plan your stay</p>
            <TextReveal text="Ask about dates, pricing or a longer stay." as="h2" id="inquiry-title" />
            <TextReveal text="Share the basics and the host can reply with current availability and next steps." as="p" className="lede" delayOffset={0.2} />
            <p className="inquiry-note">Submitting an inquiry does not reserve the villa. Your dates are confirmed only when the host replies.</p>
          </div>
          <div className="reveal"><InquiryForm /></div>
        </div>
      </section>
    </main>
  );
}
