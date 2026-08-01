import Link from "next/link";
import type { PropertyImage } from "@/content/media";
import { ResponsivePicture } from "@/components/ResponsivePicture";

export type RoomSequenceItem = {
  image: PropertyImage;
  label: string;
  description: string;
};

type Props = {
  rooms: readonly RoomSequenceItem[];
};

export function RoomSequence({ rooms }: Props) {
  return (
    <div className="room-sequence" aria-label="Five photographed bedrooms">
      {rooms.map((room, index) => (
        <Link
          className="room-sequence__item reveal"
          data-reveal="clip"
          data-reveal-delay={String(index * 80)}
          href="/rooms/"
          key={room.image.name}
        >
          <div className="room-sequence__media">
            <ResponsivePicture image={room.image} sizes="(max-width: 620px) 78vw, (max-width: 1100px) 42vw, 19vw" />
          </div>
          <span className="room-sequence__veil" aria-hidden="true" />
          <span className="room-sequence__copy">
            <span className="room-sequence__number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{room.label}</strong>
            <span>{room.description}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
