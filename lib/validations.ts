export type BookingInput = {
  customerName: string;
  phoneNumber: string;
  email?: string;
  stylist: string;
  service: string;
  bookingDate: string;
  bookingTime: string;
  specialRequest?: string;
};

export type ContactInput = {
  name: string;
  phoneNumber: string;
  email?: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateBooking(input: Partial<BookingInput>) {
  const required: Array<keyof BookingInput> = [
    "customerName",
    "phoneNumber",
    "stylist",
    "service",
    "bookingDate",
    "bookingTime"
  ];
  const missing = required.filter((field) => !String(input[field] ?? "").trim());

  if (missing.length > 0) {
    return { ok: false, message: `Missing required fields: ${missing.join(", ")}` };
  }

  if (input.email && !emailPattern.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, message: "Valid booking." };
}

export function validateContact(input: Partial<ContactInput>) {
  const required: Array<keyof ContactInput> = ["name", "phoneNumber", "message"];
  const missing = required.filter((field) => !String(input[field] ?? "").trim());

  if (missing.length > 0) {
    return { ok: false, message: `Missing required fields: ${missing.join(", ")}` };
  }

  if (input.email && !emailPattern.test(input.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, message: "Valid message." };
}
