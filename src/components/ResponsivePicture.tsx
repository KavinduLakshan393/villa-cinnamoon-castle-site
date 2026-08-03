import type { ImgHTMLAttributes } from "react";
import type { PropertyImage } from "@/content/media";

type Props = {
  image: PropertyImage;
  sizes: string;
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  fetchPriority?: "high" | "low" | "auto";
};

export function ResponsivePicture({ image, sizes, loading = "lazy", fetchPriority }: Props) {
  const srcSet = image.variants.map((variant) => `${variant.path} ${variant.width}w`).join(", ");
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={image.original}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
