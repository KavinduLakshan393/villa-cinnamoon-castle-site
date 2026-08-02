"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/Magnetic";

const navigation = {
  left: [["/the-villa/", "The Villa"], ["/rooms/", "Rooms"]],
  right: [["/gallery/", "Gallery"], ["/location/", "Location"]]
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = pathname !== "/";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className={`site-header${solid ? " site-header--solid" : ""}${scrolled ? " is-scrolled" : ""}`} data-site-header>
      <div className="container header-inner">
        <Magnetic>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          ><span aria-hidden="true" /></button>
        </Magnetic>
        <Link className="brand" href="/" aria-label="Villa Cinnamoon Castle home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">VCC</span>
          <span className="brand-text">Cinnamoon Castle<small>Hikkaduwa, Sri Lanka</small></span>
        </Link>
        <Magnetic><Link className="header-quick-cta" href="/contact/">Check dates</Link></Magnetic>
        <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="site-navigation" aria-label="Primary navigation">
          <div className="site-nav__group site-nav__group--left">
            {navigation.left.map(([href, label]) => <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </div>
          <div className="site-nav__group site-nav__group--right">
            {navigation.right.map(([href, label]) => <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            <Magnetic><Link className="button site-nav__cta" href="/contact/" aria-current={isCurrent("/contact/") ? "page" : undefined} onClick={() => setMenuOpen(false)}>Check dates</Link></Magnetic>
          </div>
        </nav>
      </div>
    </header>
  );
}
