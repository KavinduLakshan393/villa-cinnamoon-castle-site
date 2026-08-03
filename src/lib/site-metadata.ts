import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://villa-cinnamoon-castle.example";
const socialImage = "/assets/images/villa-cinnamoon-social.jpg";

export const metadataBase = new URL(siteUrl);

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      images: [{ url: socialImage }]
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] }
  };
}
