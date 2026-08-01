import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="eyebrow">Private villa near Hikkaduwa</p>
            <h2>Room to arrive,<br />space to settle in.</h2>
            <p>Five bedrooms for up to ten guests, with a full kitchen, workspace, tropical garden and gated parking approximately 3.5 km from Hikkaduwa town and main beach areas.</p>
          </div>
          <nav className="footer-nav" aria-label="Property links">
            <h3>Explore</h3>
            <ul><li><Link href="/the-villa/">The Villa</Link></li><li><Link href="/rooms/">Rooms</Link></li><li><Link href="/gallery/">Gallery</Link></li><li><Link href="/location/">Location</Link></li><li><Link href="/contact/">Check dates</Link></li></ul>
          </nav>
          <nav className="footer-nav" aria-label="Legal links">
            <h3>Information</h3>
            <ul><li><Link href="/privacy/">Privacy</Link></li><li><Link href="/terms/">Terms</Link></li><li><Link href="/accessibility/">Accessibility</Link></li></ul>
          </nav>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Villa Cinnamoon Castle.</span><span>Authentic property photography. Inquiry only; dates are confirmed by the host.</span></div>
      </div>
    </footer>
  );
}
