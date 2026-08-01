import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { getImage } from "@/content/media";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata("The Villa | Villa Cinnamoon Castle", "Explore the shared spaces, kitchen, workspace, garden, porch, balcony and gated parking at Villa Cinnamoon Castle near Hikkaduwa.", "/the-villa/");

const living = getImage("09_living_dining_overview.jpg");
const landing = getImage("12_upper_landing_high_resolution.jpg");
const porch = getImage("05_front_porch_entry.jpg");
const stairDetail = getImage("11_double_height_stair_detail.jpg");
const balcony = getImage("07_balcony_tropical_view.jpg");
const workspace = getImage("13_upper_workspace_lounge.jpg");
const kitchen = getImage("14_full_kitchen_wide.jpg");
const parking = getImage("04_gated_parking.jpg");
const garden = getImage("08_green_garden_outlook.jpg");
const evening = getImage("06_exterior_night_ambience.jpg");

const facilities = [
  ["Living", "TV, spacious indoor living areas, dining area, balcony and porch."],
  ["Kitchen", "Full kitchen with cooking essentials and appliances."],
  ["Work", "High-speed Wi-Fi and a dedicated workspace."],
  ["Laundry", "Washing machine available; no clothes dryer."],
  ["Parking", "Free gated parking on the premises."],
  ["Safety", "Exterior security cameras are present. Alarm status is not confirmed in the supplied property record."]
] as const;

export default function VillaPage() {
  return <main id="main">
    <PageHero breadcrumb="The Villa" eyebrow="Entire home" title="A private two-story stay." lede="Shared living, dining, kitchen and work spaces surrounded by tropical greenery, with gated parking and room for a group of up to ten." />
    <section className="section"><div className="container"><div className="story-grid"><div className="media-stack reveal"><div className="image-frame image-frame--portrait"><ResponsivePicture image={living} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="image-frame image-frame--landscape"><ResponsivePicture image={landing} sizes="(max-width: 860px) 100vw, 50vw" /></div></div><div className="story-copy reveal"><p className="eyebrow">Shared spaces</p><h2>Gather downstairs, spread out upstairs.</h2><p className="lede">The lower level connects dining and sitting areas with the staircase, while the upper landing adds seating and a long work surface beneath the pitched roof.</p><div className="stat-line"><span className="stat-pill">Living and dining</span><span className="stat-pill">Upper lounge</span><span className="stat-pill">TV</span></div></div></div></div></section>
    <section className="section section--paper"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">The visual story</p><h2>Architecture shown as it is.</h2></div><p className="lede">The site uses the supplied photographs at their natural aspect ratios. Subtle motion adds depth without inventing rooms, views or facilities.</p></div><div className="cards">
      <article className="card reveal"><div className="card-media"><ResponsivePicture image={porch} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Entry</p><h3>Covered front porch</h3><p>A sheltered arrival beside tall timber shutters.</p></div></article>
      <article className="card reveal"><div className="card-media card-media--portrait"><ResponsivePicture image={stairDetail} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Architecture</p><h3>High stair volume</h3><p>Dark railings and roof beams define the vertical core.</p></div></article>
      <article className="card reveal"><div className="card-media"><ResponsivePicture image={balcony} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Outside</p><h3>Furnished balcony</h3><p>Upper-level access to dense tropical greenery.</p></div></article>
    </div></div></section>
    <section className="section" id="work"><div className="container"><div className="story-grid story-grid--reverse"><div className="story-copy reveal"><p className="eyebrow">Work and daily life</p><h2>A kitchen, workspace and laundry facilities.</h2><p className="lede">The full kitchen includes cooking essentials and appliances. Upstairs, a dedicated work table supports remote work or study, and a washing machine is available for longer stays.</p><div className="stat-line"><span className="stat-pill">High-speed Wi-Fi</span><span className="stat-pill">Dedicated workspace</span><span className="stat-pill">Full kitchen</span><span className="stat-pill">Washing machine</span></div></div><div className="media-stack reveal"><div className="image-frame image-frame--portrait"><ResponsivePicture image={workspace} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="image-frame image-frame--landscape"><ResponsivePicture image={kitchen} sizes="(max-width: 860px) 100vw, 50vw" /></div></div></div></div></section>
    <section className="section section--sand" id="parking"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">Outside and access</p><h2>Garden outlooks and free gated parking.</h2></div><p className="lede">The exterior includes mature tropical trees, a green lawn, porch and balcony areas. Parking is available behind the gate on the premises.</p></div><div className="cards">
      <article className="card reveal"><div className="card-media"><ResponsivePicture image={parking} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Parking</p><h3>Free and gated</h3><p>Covered parking beside the villa.</p></div></article>
      <article className="card reveal"><div className="card-media card-media--portrait"><ResponsivePicture image={garden} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Garden</p><h3>Tropical outlook</h3><p>Palms and lawn around the property.</p></div></article>
      <article className="card reveal"><div className="card-media card-media--portrait"><ResponsivePicture image={evening} sizes="(max-width: 860px) 100vw, 50vw" /></div><div className="card-body"><p className="card-meta">Evening</p><h3>Warm exterior light</h3><p>The entrance and upper balcony after dark.</p></div></article>
    </div></div></section>
    <section className="section section--paper"><div className="container"><div className="section-heading reveal"><div><p className="eyebrow">Confirmed facilities</p><h2>What is included.</h2></div><p className="lede">Unknown or unapproved details are deliberately not filled with assumptions.</p></div><div className="feature-list reveal">{facilities.map(([title, copy]) => <div className="feature-row" key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div><div className="button-row" style={{ marginTop: "2rem" }}><Link className="button" href="/contact/">Check dates</Link><Link className="button button--quiet" href="/gallery/">Open the gallery</Link></div></div></section>
  </main>;
}
