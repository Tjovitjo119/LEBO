"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type NewsletterFormProps = {
  source?: string;
  compact?: boolean;
};

export function NewsletterForm({ source = "website", compact = false }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });
    const data = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Could not join the list.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
    setMessage(data.message || "You are on the list.");
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "grid gap-3" : "grid gap-4 sm:grid-cols-[1fr_auto]"}>
      <input type="hidden" name="source" value={source} />
      <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
        Email address
      </label>
      <input
        id={`newsletter-email-${source}`}
        name="email"
        type="email"
        required
        placeholder="Email address"
        className="focus-ring min-h-14 rounded-md border border-radiantInk/15 bg-white px-4 font-semibold text-radiantInk placeholder:text-radiantMuted"
      />
      <button
        disabled={status === "loading"}
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-radiantPink px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-radiantInk disabled:cursor-wait disabled:opacity-70"
      >
        <Send size={17} />
        {status === "loading" ? "Sending" : "Send"}
      </button>
      {message ? (
        <p
          className={`rounded-md px-4 py-3 text-sm font-bold sm:col-span-2 ${
            status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
