"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { navLinks, whatsappUrl } from "@/lib/site-data";
import { BrandMark } from "@/components/BrandMark";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-40 bg-transparent"
          : "sticky top-0 z-40 border-b border-radiantInk/10 bg-radiantCream/92 backdrop-blur"
      }
    >
      <nav className="container-sr flex min-h-20 items-center justify-between gap-4">
        <BrandMark inverted={isHome} compact={isHome} />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isHome
                  ? "rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/85 transition hover:text-radiantGold"
                  : "rounded-md px-3 py-2 text-sm font-bold text-radiantInk/75 transition hover:bg-radiantPink hover:text-white"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            className={
              isHome
                ? "grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white transition hover:bg-white hover:text-radiantInk"
                : "grid h-11 w-11 place-items-center rounded-md border border-radiantPink/30 bg-white text-radiantPink transition hover:bg-radiantPink hover:text-white"
            }
            aria-label="Contact Stay Radiant on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </nav>
      <div className={isHome ? "lg:hidden" : "border-t border-radiantInk/5 lg:hidden"}>
        <div className="container-sr flex gap-2 overflow-x-auto py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isHome
                  ? "whitespace-nowrap rounded-md border border-white/40 px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white"
                  : "whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-bold text-radiantInk shadow-sm"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
