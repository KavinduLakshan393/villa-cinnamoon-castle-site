import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata("Contact & Check Dates | Villa Cinnamoon Castle", "Send an inquiry to Villa Cinnamoon Castle about availability, pricing, dates, guest count or a longer stay near Hikkaduwa.", "/contact/");

const steps = [
  ["1", "Send your preferred dates, guest count and contact details."],
  ["2", "The host replies with current availability, pricing and next steps."],
  ["3", "Your stay is not confirmed until the host accepts it."]
] as const;

export default function ContactPage() {
  return <main id="main">
    <PageHero breadcrumb="Contact" eyebrow="Inquiry only" title="Plan your stay." lede="Ask about dates, current pricing or a longer stay. The host’s reply is required before availability is confirmed." />
    <section className="section section--dark" id="inquiry"><div className="container"><div className="inquiry-shell"><div className="inquiry-copy reveal"><p className="eyebrow">Villa Cinnamoon Castle</p><h2>A few details are enough to begin.</h2><p className="lede">Up to 10 guests · 5 bedrooms · 5 beds · 2 bathrooms · approximately 3.5 km from Hikkaduwa town.</p><div className="feature-list" style={{ marginTop: "2rem", borderColor: "rgba(255,255,255,.18)" }}>{steps.map(([number, copy]) => <div className="feature-row" style={{ borderColor: "rgba(255,255,255,.18)" }} key={number}><strong>{number}</strong><span style={{ color: "rgba(255,255,255,.68)" }}>{copy}</span></div>)}</div><p className="inquiry-note">Public phone, email and messaging details were not approved in the source material, so none have been invented on this site.</p></div><div className="reveal"><InquiryForm /></div></div></div></section>
    <section className="section section--paper"><div className="container container--narrow"><div className="prose"><p className="eyebrow">Useful questions</p><h2>Things you may wish to ask.</h2><p className="lede">Policies, rates, check-in times, minimum stays and transport arrangements still require owner confirmation.</p><div className="practical" style={{ marginTop: "2rem" }}><details className="disclosure"><summary>Can I book instantly?</summary><div className="disclosure-content">No. This release uses an inquiry flow. Availability and dates are confirmed only by the host.</div></details><details className="disclosure"><summary>Is every room air-conditioned?</summary><div className="disclosure-content">No. One bedroom has air conditioning and the remaining bedrooms have fans.</div></details><details className="disclosure"><summary>Is the villa beachfront?</summary><div className="disclosure-content">No beachfront claim is made. The property is approximately 3.5 km from Hikkaduwa town and main beach areas.</div></details><details className="disclosure"><summary>Are safety alarms installed?</summary><div className="disclosure-content">The supplied record does not confirm smoke or carbon-monoxide alarms. Ask the host for the current status. Exterior security cameras are present.</div></details></div></div></div></section>
  </main>;
}
