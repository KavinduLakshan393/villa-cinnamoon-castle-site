import Link from "next/link";
import { TextReveal } from "@/components/motion/TextReveal";

type Props = { breadcrumb: string; eyebrow: string; title: string; lede: string };

export function PageHero({ breadcrumb, eyebrow, title, lede }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / {breadcrumb}</nav>
        <p className="eyebrow">{eyebrow}</p>
        <TextReveal text={title} as="h1" className="display" />
        <TextReveal text={lede} as="p" className="lede" delayOffset={0.2} />
      </div>
    </section>
  );
}
