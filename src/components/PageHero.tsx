import Link from "next/link";

type Props = { breadcrumb: string; eyebrow: string; title: string; lede: string };

export function PageHero({ breadcrumb, eyebrow, title, lede }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / {breadcrumb}</nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display">{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
