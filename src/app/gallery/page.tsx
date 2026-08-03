import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata(
  "Gallery | Villa Cinnamoon Castle",
  "Browse 21 authentic photographs of Villa Cinnamoon Castle, including the exterior, tropical setting, shared spaces, kitchen, bedrooms and bathroom.",
  "/gallery/"
);

export default function GalleryPage() {
  return <main id="main"><PageHero breadcrumb="Gallery" eyebrow="21 authentic photographs" title="See the villa as it is." lede="Every photograph comes from the supplied property archive. Open an image for a larger view, or filter the collection by part of the home." /><Gallery /></main>;
}
