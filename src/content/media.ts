import manifest from "../../public/assets/images/manifest.json";

export type MediaCategory = "arrival" | "setting" | "shared" | "kitchen" | "rooms";

export type PropertyImage = {
  name: string;
  category: MediaCategory;
  width: number;
  height: number;
  original: string;
  variants: Array<{ width: number; height: number; path: string }>;
  alt: string;
  caption: string;
  full: string;
};

const editorial: Record<string, { category: MediaCategory; alt: string; caption: string }> = {
  "01_hero_exterior_day.jpg": { category: "arrival", alt: "Two-story white villa framed by mature tropical trees.", caption: "The villa exterior during the day." },
  "02_property_sign_arrival.jpg": { category: "arrival", alt: "Villa Cinnamoon Castle sign above roadside greenery.", caption: "The property sign near the approach to the villa." },
  "03_garden_gate_reveal.jpg": { category: "arrival", alt: "Villa seen through a rustic garden fence and mature trees.", caption: "A green, shaded approach to the villa." },
  "04_gated_parking.jpg": { category: "arrival", alt: "Gated driveway with a covered parking area beside the villa.", caption: "Free gated parking is available on the premises." },
  "05_front_porch_entry.jpg": { category: "arrival", alt: "Covered front porch with the main door and tall shuttered windows.", caption: "The covered front entrance." },
  "06_exterior_night_ambience.jpg": { category: "arrival", alt: "Villa exterior lit warmly at night beneath surrounding trees.", caption: "The villa in the evening." },
  "07_balcony_tropical_view.jpg": { category: "setting", alt: "Upper balcony overlooking dense tropical plants and palm trees.", caption: "Tropical greenery from the balcony." },
  "08_green_garden_outlook.jpg": { category: "setting", alt: "Green lawn and palms viewed beyond a low white wall.", caption: "A quiet garden outlook." },
  "09_living_dining_overview.jpg": { category: "shared", alt: "Dining table, seating and staircase in a shared living space.", caption: "Living and dining space on the lower floor." },
  "10_staircase_living_flow.jpg": { category: "shared", alt: "White staircase rising beside a row of chairs in the living area.", caption: "The staircase linking the villa’s two levels." },
  "11_double_height_stair_detail.jpg": { category: "shared", alt: "Upward view of the staircase, railings and high pitched ceiling.", caption: "Architectural detail in the double-height stair area." },
  "12_upper_landing_high_resolution.jpg": { category: "shared", alt: "Upper landing with seating under a pitched ceiling and dark timber beams.", caption: "The upper landing and lounge area." },
  "13_upper_workspace_lounge.jpg": { category: "shared", alt: "Long work table and chairs on the upper-floor landing.", caption: "Dedicated workspace on the upper level." },
  "14_full_kitchen_wide.jpg": { category: "kitchen", alt: "Full kitchen with countertop appliances, sink, windows and storage.", caption: "The villa’s full kitchen." },
  "15_kitchen_laundry_appliances.jpg": { category: "kitchen", alt: "Kitchen counter with cooking appliances and washing facilities.", caption: "Cooking and laundry appliances." },
  "16_bedroom_1_master_high_resolution.jpg": { category: "rooms", alt: "Bedroom with a made bed, bedside surface and patterned curtains.", caption: "Bedroom 1." },
  "17_bedroom_2_air_conditioned.jpg": { category: "rooms", alt: "Bedroom with an air-conditioning unit near the vaulted ceiling.", caption: "The air-conditioned bedroom." },
  "18_bedroom_3_wide.jpg": { category: "rooms", alt: "Bedroom with a wooden bed, mirror, chair and curtained windows.", caption: "Bedroom 3." },
  "19_bedroom_4_four_poster.jpg": { category: "rooms", alt: "Bedroom with a dark wooden bed and an open door toward the bathroom area.", caption: "Bedroom 4." },
  "20_bedroom_5_white_linen.jpg": { category: "rooms", alt: "Bedroom with white bed linen, patterned curtains and a small wall mirror.", caption: "Bedroom 5." },
  "21_bathroom_hot_water_shower.jpg": { category: "rooms", alt: "Bathroom shower with a wall-mounted hot-water unit.", caption: "One of two full bathrooms with hot water." }
};

export const propertyImages: PropertyImage[] = manifest.map((image) => {
  const copy = editorial[image.name];
  const largest = image.variants.at(-1)?.path ?? image.original;
  return { ...image, ...copy, full: largest };
});

export function getImage(name: string): PropertyImage {
  const image = propertyImages.find((item) => item.name === name);
  if (!image) throw new Error(`Unknown property image: ${name}`);
  return image;
}
