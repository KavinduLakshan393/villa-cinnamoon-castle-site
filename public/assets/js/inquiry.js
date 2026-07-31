function setError(form, name, message = "") {
  const input = form.elements.namedItem(name);
  const output = form.querySelector(`[data-error-for="${name}"]`);
  if (input && "setAttribute" in input) input.setAttribute("aria-invalid", message ? "true" : "false");
  if (output) output.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll("[data-error-for]").forEach((item) => { item.textContent = ""; });
  form.querySelectorAll("[aria-invalid]").forEach((item) => item.setAttribute("aria-invalid", "false"));
}

function serialize(form) {
  const data = Object.fromEntries(new FormData(form));
  data.consentAccepted = form.elements.consentAccepted?.checked || false;
  data.guests = Number.parseInt(data.guests, 10);
  data.sourcePage = window.location.pathname;
  return data;
}

function validateClient(data) {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Enter your name.";
  if (!data.email?.trim() && !data.phone?.trim()) errors.contact = "Enter an email address or phone number.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!Number.isInteger(data.guests) || data.guests < 1 || data.guests > 10) errors.guests = "Guest count must be between 1 and 10.";
  if (data.checkIn && data.checkOut && data.checkOut <= data.checkIn) errors.checkOut = "Check-out must be after check-in.";
  if (!data.consentAccepted) errors.consentAccepted = "Please accept the privacy notice.";
  return errors;
}

for (const form of document.querySelectorAll("[data-inquiry-form]")) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearErrors(form);
    const status = form.querySelector("[data-form-status]");
    const submit = form.querySelector("[type='submit']");
    const data = serialize(form);
    const errors = validateClient(data);

    if (errors.contact) {
      setError(form, "email", errors.contact);
      setError(form, "phone", errors.contact);
      delete errors.contact;
    }
    Object.entries(errors).forEach(([name, message]) => setError(form, name, message));
    if (Object.keys(errors).length) {
      status.className = "form-status is-error";
      status.textContent = "Please review the highlighted fields.";
      form.querySelector("[aria-invalid='true']")?.focus();
      return;
    }

    status.className = "form-status";
    status.textContent = "Sending your inquiry…";
    form.setAttribute("aria-busy", "true");
    submit.disabled = true;

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([name, message]) => {
            if (name === "contact") {
              setError(form, "email", message);
              setError(form, "phone", message);
            } else setError(form, name, message);
          });
        }
        throw new Error(result.message || "We could not send your inquiry right now.");
      }
      status.className = "form-status is-success";
      status.textContent = result.message || "Your inquiry has been received. Dates remain unconfirmed until the host replies.";
      form.reset();
      status.focus();
    } catch (error) {
      status.className = "form-status is-error";
      status.textContent = error.message || "We could not send your inquiry. Please try again.";
    } finally {
      form.removeAttribute("aria-busy");
      submit.disabled = false;
    }
  });
}
