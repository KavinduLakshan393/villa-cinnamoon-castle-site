export function ArrivalForeground() {
  return (
    <picture className="arrival__foreground" aria-hidden="true">
      <source
        media="(min-width: 861px)"
        srcSet="/assets/images/generated/scroll-botanical-frame-final.webp"
        type="image/webp"
      />
      <img
        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        alt=""
        width="900"
        height="515"
      />
    </picture>
  );
}
