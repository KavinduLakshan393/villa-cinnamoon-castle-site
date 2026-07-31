const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 120;

function text(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isDate(value) {
  if (!value) return true;
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

export function normalizeInquiry(input = {}) {
  return {
    name: text(input.name, MAX_NAME_LENGTH),
    email: text(input.email, 254).toLowerCase(),
    phone: text(input.phone, 80),
    preferredContact: ["email", "phone", "messaging"].includes(input.preferredContact)
      ? input.preferredContact
      : "email",
    checkIn: text(input.checkIn, 10),
    checkOut: text(input.checkOut, 10),
    guests: Number.parseInt(input.guests, 10),
    inquiryType: ["availability", "pricing", "long-stay", "general"].includes(input.inquiryType)
      ? input.inquiryType
      : "availability",
    message: text(input.message, MAX_MESSAGE_LENGTH),
    consentAccepted: input.consentAccepted === true || input.consentAccepted === "true" || input.consentAccepted === "on",
    website: text(input.website, 200),
    sourcePage: text(input.sourcePage, 160) || "/"
  };
}

export function validateInquiry(input = {}) {
  const data = normalizeInquiry(input);
  const errors = {};

  if (data.website) errors.form = "Unable to process this submission.";
  if (!data.name) errors.name = "Enter your name.";
  if (!data.email && !data.phone) errors.contact = "Enter an email address or phone number.";
  if (!isEmail(data.email)) errors.email = "Enter a valid email address.";
  if (!isDate(data.checkIn)) errors.checkIn = "Enter a valid check-in date.";
  if (!isDate(data.checkOut)) errors.checkOut = "Enter a valid check-out date.";
  if (data.checkIn && data.checkOut && data.checkOut <= data.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }
  if (!Number.isInteger(data.guests) || data.guests < 1 || data.guests > 10) {
    errors.guests = "Guest count must be between 1 and 10.";
  }
  if (!data.consentAccepted) errors.consentAccepted = "Please accept the privacy notice.";

  return { valid: Object.keys(errors).length === 0, errors, data };
}
