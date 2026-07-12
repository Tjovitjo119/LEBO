"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  async function onLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <button
      onClick={onLogout}
      className="inline-flex items-center gap-2 rounded-md border border-white/25 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-radiantInk"
    >
      <LogOut size={15} /> Sign out
    </button>
  );
}
