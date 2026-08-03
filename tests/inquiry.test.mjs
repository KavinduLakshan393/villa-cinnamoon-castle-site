import test from "node:test";
import assert from "node:assert/strict";
import { loadStandaloneTs } from "./helpers.mjs";

const { validateInquiry, normalizeInquiry, MAX_MESSAGE_LENGTH } = await loadStandaloneTs("src/lib/inquiry.ts");
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

test("inquiry validation accepts a valid submission", () => {
  const result = validateInquiry(valid);
  assert.equal(result.valid, true);
  assert.equal(result.data.guests, 8);
  assert.equal(result.data.email, "alex@example.com");
});

test("inquiry validation enforces the ten-guest capacity", () => {
  assert.match(validateInquiry({ ...valid, guests: 11 }).errors.guests, /between 1 and 10/);
});

test("inquiry validation rejects invalid date order", () => {
  assert.match(validateInquiry({ ...valid, checkOut: "2026-12-10" }).errors.checkOut, /after check-in/);
});

test("inquiry validation requires at least one contact method", () => {
  assert.ok(validateInquiry({ ...valid, email: "", phone: "" }).errors.contact);
});

test("inquiry validation rejects the honeypot field", () => {
  assert.ok(validateInquiry({ ...valid, website: "https://spam.example" }).errors.form);
});

test("inquiry normalization trims, lowercases and limits user input", () => {
  const normalized = normalizeInquiry({ ...valid, name: "  Alex Guest  ", email: " ALEX@EXAMPLE.COM ", message: "x".repeat(MAX_MESSAGE_LENGTH + 50) });
  assert.equal(normalized.name, "Alex Guest");
  assert.equal(normalized.email, "alex@example.com");
  assert.equal(normalized.message.length, MAX_MESSAGE_LENGTH);
});
