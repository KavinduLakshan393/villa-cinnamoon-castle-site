"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { validateInquiry } from "@/lib/inquiry";
import { Magnetic } from "@/components/Magnetic";

export function InquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ kind: "" | "error" | "success"; message: string }>({ kind: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const fieldError = (name: string) => errors[name] ?? (name === "email" || name === "phone" ? errors.contact : "");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const payload = {
      ...data,
      consentAccepted: formData.get("consentAccepted") === "on",
      guests: Number.parseInt(String(formData.get("guests")), 10),
      sourcePage: window.location.pathname
    };
    const result = validateInquiry(payload);
    setErrors(result.errors);
    if (!result.valid) {
      setStatus({ kind: "error", message: "Please review the highlighted fields." });
      window.requestAnimationFrame(() => form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
      return;
    }

    setStatus({ kind: "", message: "Sending your inquiry…" });
    setSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const responseBody = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (responseBody.errors) setErrors(responseBody.errors);
        throw new Error(responseBody.message || "We could not send your inquiry right now.");
      }
      setErrors({});
      setStatus({ kind: "success", message: responseBody.message || "Your inquiry has been received. Dates remain unconfirmed until the host replies." });
      form.reset();
      window.requestAnimationFrame(() => form.querySelector<HTMLElement>("[role='status']")?.focus());
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "We could not send your inquiry. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  const invalid = (name: string) => Boolean(fieldError(name));
  return (
    <form ref={formRef} className="form-card" noValidate aria-busy={submitting || undefined} onSubmit={submit}>
      <div className="form-grid">
        <div className="field field--full"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" aria-describedby="name-error" autoComplete="name" required aria-invalid={invalid("name")} /><span className="field-error" id="name-error">{fieldError("name")}</span></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" aria-describedby="email-error" type="email" autoComplete="email" inputMode="email" aria-invalid={invalid("email")} /><span className="field-error" id="email-error">{fieldError("email")}</span></div>
        <div className="field"><label htmlFor="phone">Phone or messaging number</label><input id="phone" name="phone" aria-describedby="phone-error" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={invalid("phone")} /><span className="field-error" id="phone-error">{fieldError("phone")}</span></div>
        <div className="field"><label htmlFor="checkIn">Check-in</label><input id="checkIn" name="checkIn" aria-describedby="checkIn-error" type="date" aria-invalid={invalid("checkIn")} /><span className="field-error" id="checkIn-error">{fieldError("checkIn")}</span></div>
        <div className="field"><label htmlFor="checkOut">Check-out</label><input id="checkOut" name="checkOut" aria-describedby="checkOut-error" type="date" aria-invalid={invalid("checkOut")} /><span className="field-error" id="checkOut-error">{fieldError("checkOut")}</span></div>
        <div className="field"><label htmlFor="guests">Guests <span aria-hidden="true">*</span></label><select id="guests" name="guests" aria-describedby="guests-error" required aria-invalid={invalid("guests")} defaultValue=""><option value="">Select</option>{Array.from({ length: 10 }, (_, index) => <option value={index + 1} key={index + 1}>{index + 1}</option>)}</select><span className="field-error" id="guests-error">{fieldError("guests")}</span></div>
        <div className="field"><label htmlFor="inquiryType">Inquiry type</label><select id="inquiryType" name="inquiryType" aria-describedby="inquiryType-error"><option value="availability">Check availability</option><option value="pricing">Ask about pricing</option><option value="long-stay">Long-stay inquiry</option><option value="general">General question</option></select><span className="field-error" id="inquiryType-error" /></div>
        <div className="field field--full"><label htmlFor="preferredContact">Preferred reply</label><select id="preferredContact" name="preferredContact" aria-describedby="preferredContact-error"><option value="email">Email</option><option value="phone">Phone</option><option value="messaging">Messaging app</option></select><span className="field-error" id="preferredContact-error" /></div>
        <div className="field field--full"><label htmlFor="message">Message</label><textarea id="message" name="message" aria-describedby="message-error" maxLength={2000} placeholder="Tell the host anything useful about your stay." /><span className="field-error" id="message-error" /></div>
        <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <div className="field field--full"><label className="consent" htmlFor="consentAccepted"><input id="consentAccepted" name="consentAccepted" aria-describedby="consentAccepted-error" type="checkbox" required aria-invalid={invalid("consentAccepted")} /><span>I agree that my details may be used to answer this inquiry. Read the <Link href="/privacy/">privacy notice</Link>.</span></label><span className="field-error" id="consentAccepted-error">{fieldError("consentAccepted")}</span></div>
      </div>
      <div className="form-actions"><Magnetic><button className="button" type="submit" disabled={submitting}>Send inquiry <span aria-hidden="true">→</span></button></Magnetic><span className="muted">At least one contact method is required.</span></div>
      <div className={`form-status${status.kind ? ` is-${status.kind}` : ""}`} tabIndex={-1} role="status" aria-live="polite">{status.message}</div>
    </form>
  );
}
