export type ContactInput = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
};

export type NewsletterInput = {
  email: string;
  source?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredFields<T extends Record<string, unknown>>(input: Partial<T>, fields: Array<keyof T>) {
  return fields.filter((field) => !String(input[field] ?? "").trim());
}

export function validateContact(input: Partial<ContactInput>) {
  const missing = requiredFields<ContactInput>(input, ["name", "email", "subject", "message"]);

  if (missing.length > 0) {
    return { ok: false, message: `Missing required fields: ${missing.join(", ")}` };
  }

  if (!emailPattern.test(String(input.email))) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, message: "Valid message." };
}

export function validateNewsletter(input: Partial<NewsletterInput>) {
  const missing = requiredFields<NewsletterInput>(input, ["email"]);

  if (missing.length > 0) {
    return { ok: false, message: "Please enter your email address." };
  }

  if (!emailPattern.test(String(input.email))) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, message: "Valid newsletter signup." };
}
