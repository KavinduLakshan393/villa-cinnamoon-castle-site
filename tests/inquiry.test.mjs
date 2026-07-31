import test from "node:test";
import assert from "node:assert/strict";
import { validateInquiry } from "../lib/inquiry.mjs";

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

test("accepts a valid inquiry", () => {
  const result = validateInquiry(valid);
  assert.equal(result.valid, true);
  assert.equal(result.data.guests, 8);
});

test("rejects a guest count above capacity", () => {
  const result = validateInquiry({ ...valid, guests: 11 });
  assert.equal(result.valid, false);
  assert.match(result.errors.guests, /between 1 and 10/);
});

test("rejects invalid date order", () => {
  const result = validateInquiry({ ...valid, checkOut: "2026-12-10" });
  assert.equal(result.valid, false);
  assert.match(result.errors.checkOut, /after check-in/);
});

test("requires at least one contact method", () => {
  const result = validateInquiry({ ...valid, email: "", phone: "" });
  assert.equal(result.valid, false);
  assert.ok(result.errors.contact);
});

test("honeypot values are rejected", () => {
  const result = validateInquiry({ ...valid, website: "https://spam.example" });
  assert.equal(result.valid, false);
  assert.ok(result.errors.form);
});
