"use client";

import { useState } from "react";
import { Send } from "lucide-react";

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
    setMessage("Message sent. P2 will respond soon.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-black/10 bg-white p-6 shadow-sm">
      <Field name="name" label="Name" required />
      <Field name="phoneNumber" label="Phone number" required />
      <Field name="email" label="Email address" type="email" />
      <label className="grid gap-2 text-sm font-bold text-charcoal">
        Message
        <textarea name="message" rows={5} required className="focus-ring rounded-md border border-black/15 bg-warmWhite px-4 py-3 font-medium" />
      </label>
      <button disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-md bg-orangeDark px-5 py-4 font-black text-white transition hover:bg-charcoal disabled:cursor-wait disabled:opacity-70">
        <Send size={18} />
        {status === "loading" ? "Sending..." : "Send message"}
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
    <label className="grid gap-2 text-sm font-bold text-charcoal">
      {label}
      <input {...props} className="focus-ring rounded-md border border-black/15 bg-warmWhite px-4 py-3 font-medium" />
    </label>
  );
}
