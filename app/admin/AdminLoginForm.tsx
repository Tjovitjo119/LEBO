"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Could not log in.");
      setLoading(false);
      return;
    }

    router.refresh();
  }

  return (
    <div className="mx-auto grid min-h-[70vh] max-w-sm content-center gap-6 px-4">
      <div className="text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-radiantPink/10 text-radiantPink">
          <Lock size={24} />
        </div>
        <h1 className="mt-4 font-display text-3xl text-radiantInk">Owner sign in</h1>
        <p className="mt-2 text-sm text-radiantMuted">View newsletter subscribers and contact messages.</p>
      </div>
      <form onSubmit={onSubmit} className="grid gap-4 rounded-md border border-radiantInk/10 bg-white p-6 shadow-sm">
        <label className="grid gap-2 text-sm font-bold text-radiantInk">
          Admin password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="focus-ring rounded-md border border-radiantInk/15 bg-radiantCream px-4 py-3 font-medium"
          />
        </label>
        <button
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-radiantPink px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
        >
          {loading ? "Checking" : "Sign in"}
        </button>
        {error ? <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-bold text-red-800">{error}</p> : null}
      </form>
    </div>
  );
}
