import { describe, expect, it } from "vitest";
import { validateInquiry } from "@/lib/inquiry";

const valid = {
  name: "Alex Guest",
  email: "alex@example.com",
  phone: "",
  preferredContact: "email",
  checkIn: "2026-12-10",
  checkOut: "2026-12-14",
  guests: 8,
  inquiryType: "availability",
  message: "Please share pricing.",
  consentAccepted: true,
  website: "",
  sourcePage: "/contact/"
};

describe("inquiry validation", () => {
  it("accepts a valid inquiry", () => {
    const result = validateInquiry(valid);
    expect(result.valid).toBe(true);
    expect(result.data.guests).toBe(8);
  });

  it("rejects a guest count above capacity", () => {
    expect(validateInquiry({ ...valid, guests: 11 }).errors.guests).toMatch(/between 1 and 10/);
  });

  it("rejects invalid date order", () => {
    expect(validateInquiry({ ...valid, checkOut: "2026-12-10" }).errors.checkOut).toMatch(/after check-in/);
  });

  it("requires at least one contact method", () => {
    expect(validateInquiry({ ...valid, email: "", phone: "" }).errors.contact).toBeTruthy();
  });

  it("rejects honeypot values", () => {
    expect(validateInquiry({ ...valid, website: "https://spam.example" }).errors.form).toBeTruthy();
  });
});
