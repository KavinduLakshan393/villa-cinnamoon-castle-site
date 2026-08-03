"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["/the-villa/", "The Villa"],
  ["/rooms/", "Rooms"],
  ["/gallery/", "Gallery"],
  ["/location/", "Location"],
  ["/contact/", "Check dates"]
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const solidRoute = pathname !== "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (solidRoute) {
      setTheme("light");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 20);
      const probe = Math.max(44, window.innerHeight * 0.1);
      const sections = [...document.querySelectorAll<HTMLElement>("[data-header-theme]")];
      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probe && rect.bottom > probe;
      });
      setTheme(current?.dataset.headerTheme === "dark" ? "dark" : "light");
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname, solidRoute]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    if (!menuOpen) return;

    const previous = document.activeElement as HTMLElement | null;
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusable?.[0]?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove("nav-open");
      (previous ?? menuButtonRef.current)?.focus?.();
    };
  }, [menuOpen]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href);
  const headerTheme = menuOpen || solidRoute || isScrolled ? "light" : theme;

  return (
    <header className={`site-header site-header--${headerTheme}${solidRoute ? " site-header--solid" : ""}${isScrolled ? " is-scrolled" : ""}`} data-site-header>
      <div className={`cb-navbar-strip`}>
        <div className="cb-navbar-container">
          <div className="cb-navbar-grid">
            <div className="cb-navbar-grid-col -left">
              <Link className="cb-navbar-logo" href="/" aria-label="Home" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/favicon.svg" alt="" style={{ height: '24px', width: '24px' }} />
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Villa Cinnamon Castle</span>
                </div>
              </Link>
              <Link className="cb-navbar-logo -clone" href="/" aria-label="Home" onClick={() => setMenuOpen(false)} aria-hidden="true" tabIndex={-1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img src="/favicon.svg" alt="" style={{ height: '24px', width: '24px' }} />
                  <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Villa Cinnamon Castle</span>
                </div>
              </Link>
            </div>
            
            <div className="cb-navbar-grid-col -right">
              <nav className="cb-navbar-navs">
                {navigation.filter(([href]) => href !== "/contact/").map(([href, label]) => (
                  <div className="cb-navbar-nav" key={href}>
                    <Link className="cb-navbar-nav-toggle" href={href} aria-current={isCurrent(href) ? "page" : undefined}>
                      <span className="cb-navbar-nav-title">
                        <span data-text={label}>{label}</span>
                      </span>
                    </Link>
                  </div>
                ))}
              </nav>
              
              <div className="cb-navbar-actions">
                <div className="cb-navbar-action">
                  <Link className="cb-btn cb-btn_cta -md -fill" href="/contact/">
                    <span className="cb-btn_cta-border"></span>
                    <span className="cb-btn_cta-ripple"><span></span></span>
                    <span className="cb-btn_cta-title">
                      <span data-text="Check dates">Check dates</span>
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className="cb-navbar-toggle">
                <button
                  ref={menuButtonRef}
                  className="cb-btn cb-btn_menu"
                  type="button"
                  aria-expanded={menuOpen}
                  aria-controls="site-navigation"
                  aria-label="Toggle menu"
                  onClick={() => setMenuOpen((open) => !open)}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        ref={menuRef}
        className={`site-nav${menuOpen ? " is-open" : ""}`}
        id="site-navigation"
        aria-label="Primary navigation"
        aria-hidden={!menuOpen}
      >
        <div className="container site-nav__inner">
          <p className="site-nav__label">Explore the property</p>
          <div className="site-nav__links">
            {navigation.map(([href, label], index) => (
              <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{label}
              </Link>
            ))}
          </div>
          <p className="site-nav__note">A private five-bedroom villa approximately 3.5 km from Hikkaduwa town.</p>
        </div>
      </nav>
    </header>
  );
}
