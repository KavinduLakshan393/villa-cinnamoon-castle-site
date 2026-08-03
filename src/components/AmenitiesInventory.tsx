import Link from "next/link";
import type { CSSProperties } from "react";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { Reveal } from "@/components/motion/Reveal";
import type { PropertyImage } from "@/content/media";

const amenities = [
  ["01", "Full kitchen", "Cooking essentials and appliances"],
  ["02", "High-speed Wi-Fi", "Browsing, work and study"],
  ["03", "Dedicated workspace", "Upper-level table and seating"],
  ["04", "Hot water", "Available in two full bathrooms"],
  ["05", "Washing machine", "Washer provided"],
  ["06", "Gated parking", "Free parking on the premises"]
] as const;

export function AmenitiesInventory({ image }: { image: PropertyImage }) {
  return (
    <section className="amenities-inventory section" id="work" data-header-theme="light" aria-labelledby="amenities-title">
      <div className="container amenities-inventory__intro">
        <div>
          <p className="eyebrow">Practical comforts</p>
          <h2 id="amenities-title">The details that make a group stay work.</h2>
        </div>
        <p className="lede">Every amenity shown comes from the supplied property record. No pool, beachfront access or fully air-conditioned claim has been added.</p>
      </div>
      <div className="container amenities-inventory__layout">
        <Reveal kind="clip" className="amenities-inventory__media">
          <ResponsivePicture image={image} sizes="(max-width: 860px) 100vw, 36vw" />
        </Reveal>
        <ol className="amenities-inventory__list">
          {amenities.map(([number, title, description], index) => (
            <li className="amenities-inventory__item reveal" style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties} key={title}>
              <span className="amenities-inventory__number">{number}</span>
              <strong>{title}</strong>
              <span>{description}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="container amenities-inventory__footer">
        <Link className="text-link" href="/the-villa/#work">See the practical spaces <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
