import Link from "next/link";

const facts = [
  { href: "/rooms/", value: "10", label: "Guests" },
  { href: "/rooms/", value: "5", label: "Bedrooms" },
  { href: "/rooms/#bathrooms", value: "2", label: "Bathrooms" },
  { href: "/location/", value: "3.5 km", label: "From Hikkaduwa town" }
] as const;

export function EditorialFactRail() {
  return (
    <section id="property-facts" className="fact-rail" aria-label="Property overview" data-header-theme="light">
      <div className="container fact-rail__inner">
        {facts.map((fact) => (
          <Link className="fact-rail__item" href={fact.href} key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
