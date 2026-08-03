import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { TextReveal } from "@/components/motion/TextReveal";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { getImage, type PropertyImage } from "@/content/media";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata("Rooms | Villa Cinnamoon Castle", "View the five bedrooms and two bathrooms at Villa Cinnamoon Castle: four Super King beds, one Queen bed, one air-conditioned room and fans elsewhere.", "/rooms/");

const roomData: Array<{ image: PropertyImage; tag: string; label: string; title: string; copy: string; portrait: boolean }> = [
  { image: getImage("16_bedroom_1_master_high_resolution.jpg"), tag: "Bedroom", label: "Bedroom 1", title: "Warm timber and patterned curtains", copy: "One of five photographed rooms. Exact bed type mapping awaits host approval.", portrait: true },
  { image: getImage("17_bedroom_2_air_conditioned.jpg"), tag: "Air conditioned", label: "Bedroom 2", title: "The air-conditioned room", copy: "This is the villa’s one bedroom with air conditioning.", portrait: true },
  { image: getImage("18_bedroom_3_wide.jpg"), tag: "Bedroom", label: "Bedroom 3", title: "A wide room view", copy: "Wood furniture, curtained windows and a simple seating area.", portrait: false },
  { image: getImage("19_bedroom_4_four_poster.jpg"), tag: "Bedroom", label: "Bedroom 4", title: "Dark timber details", copy: "A distinct bedroom with an adjoining doorway visible in the photograph.", portrait: true },
  { image: getImage("20_bedroom_5_white_linen.jpg"), tag: "Bedroom", label: "Bedroom 5", title: "White linen and a calm palette", copy: "One of the four bedrooms cooled with a fan.", portrait: true }
];
const bathroom = getImage("21_bathroom_hot_water_shower.jpg");
const facts = [
  ["Guest capacity", "Up to 10 guests."], ["Bedrooms", "5."], ["Beds", "5 total: 4 Super King beds and 1 Queen bed."],
  ["Cooling", "1 bedroom with air conditioning; remaining bedrooms with fans."], ["Bathrooms", "2 full bathrooms with hot water."]
] as const;

export default function RoomsPage() {
  return <main id="main">
    <PageHero breadcrumb="Rooms" eyebrow="Five bedrooms · five beds" title="Sleep up to ten." lede="Four Super King beds and one Queen bed across five bedrooms, with one air-conditioned room and fans in the remaining rooms." />
    <section className="section section--paper"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">Room by room</p><TextReveal text="Five individually photographed bedrooms." as="h2" /></div><TextReveal text="The rooms use neutral labels because the owner has not yet approved names or mapped each photograph to a specific bed size." as="p" className="lede" delayOffset={0.2} /></div><div className="room-grid">{roomData.map((room) => <article className="card room-card reveal" key={room.label}><div className={`card-media${room.portrait ? " card-media--portrait" : ""}`}><ResponsivePicture image={room.image} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><span className="tag">{room.tag}</span><p className="card-meta">{room.label}</p><h3>{room.title}</h3><p>{room.copy}</p></div></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="story-grid"><div className="image-frame image-frame--portrait reveal"><ResponsivePicture image={bathroom} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="story-copy reveal" id="bathrooms"><p className="eyebrow">Two full bathrooms</p><TextReveal text="Hot water is available." as="h2" /><TextReveal text="The property record confirms two full bathrooms with hot water. The supplied media set includes one bathroom photograph showing a wall-mounted hot-water shower unit." as="p" className="lede" delayOffset={0.2} /><div className="notice">The website does not imply that every bathroom looks identical. Contact the host for any room-specific questions.</div></div></div></div></section>
    <section className="section section--sand"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">At a glance</p><TextReveal text="Accommodation facts." as="h2" /></div><TextReveal text="These are the confirmed totals for the entire home." as="p" className="lede" delayOffset={0.2} /></div><div className="feature-list reveal">{facts.map(([title, copy]) => <div className="feature-row" key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div><div className="button-row" style={{ marginTop: "2rem" }}><AnimatedButton className="button" href="/contact/">Ask about your dates</AnimatedButton><AnimatedButton className="button button--quiet" href="/gallery/">View all photographs</AnimatedButton></div></div></section>
  </main>;
}
