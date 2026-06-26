"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const subjects = ["Brand collaboration", "Reader enquiry", "Course interest", "Merch launch", "Investor or partnership"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });
    const data = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Could not send your message.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
    setMessage(data.message || "Message received. Stay Radiant will respond soon.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-md border border-radiantInk/10 bg-white p-6 shadow-sm">
      <Field name="name" label="Name" required />
      <Field name="email" label="Email address" type="email" required />
      <Field name="phoneNumber" label="Phone number" />
      <label className="grid gap-2 text-sm font-bold text-radiantInk">
        Subject
        <select name="subject" required className="focus-ring rounded-md border border-radiantInk/15 bg-radiantCream px-4 py-3 font-medium">
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-radiantInk">
        Message
        <textarea name="message" rows={6} required className="focus-ring rounded-md border border-radiantInk/15 bg-radiantCream px-4 py-3 font-medium" />
      </label>
      <button
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-radiantPink px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-radiantInk disabled:cursor-wait disabled:opacity-70"
      >
        <Send size={18} />
        {status === "loading" ? "Sending" : "Send message"}
      </button>
      {message ? (
        <p className={`rounded-md px-4 py-3 text-sm font-bold ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-radiantInk">
      {label}
      <input {...props} className="focus-ring rounded-md border border-radiantInk/15 bg-radiantCream px-4 py-3 font-medium" />
    </label>
  );
}
