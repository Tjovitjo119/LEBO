export type ContactInput = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
  companyWebsite?: string;
};

export type NewsletterInput = {
  email: string;
  source?: string;
  companyWebsite?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredFields<T extends Record<string, unknown>>(input: Partial<T>, fields: Array<keyof T>) {
  return fields.filter((field) => !String(input[field] ?? "").trim());
}

// Bots fill every visible field, including hidden honeypot inputs. Humans never see this field.
function isBot(input: { companyWebsite?: string }) {
  return Boolean(input.companyWebsite && input.companyWebsite.trim().length > 0);
}

export function validateContact(input: Partial<ContactInput>) {
  if (isBot(input)) {
    return { ok: false, message: "Submission rejected." };
  }

  const missing = requiredFields<ContactInput>(input, ["name", "email", "subject", "message"]);

  if (missing.length > 0) {
    return { ok: false, message: `Missing required fields: ${missing.join(", ")}` };
  }

  if (!emailPattern.test(String(input.email))) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (String(input.name).length > 120 || String(input.subject).length > 160) {
    return { ok: false, message: "Please shorten your name or subject." };
  }

  if (String(input.message).length > 5000) {
    return { ok: false, message: "Message is too long (5000 character limit)." };
  }

  return { ok: true, message: "Valid message." };
}

export function validateNewsletter(input: Partial<NewsletterInput>) {
  if (isBot(input)) {
    return { ok: false, message: "Submission rejected." };
  }

  const missing = requiredFields<NewsletterInput>(input, ["email"]);

  if (missing.length > 0) {
    return { ok: false, message: "Please enter your email address." };
  }

  if (!emailPattern.test(String(input.email)) || String(input.email).length > 200) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, message: "Valid newsletter signup." };
}
