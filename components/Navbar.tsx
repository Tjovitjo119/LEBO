"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { BrandMark } from "@/components/BrandMark";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-40 bg-radiantOrange"
    >
      <nav className="container-sr flex min-h-20 items-center justify-between gap-4">
        <BrandMark inverted={!menuOpen} />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/85 transition hover:text-radiantGold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white transition hover:bg-white hover:text-radiantOrange lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-x-0 top-20 z-30 flex h-[calc(100vh-5rem)] flex-col justify-center overflow-y-auto bg-radiantOrange lg:hidden">
          <div className="container-sr grid gap-2 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-4 font-display text-3xl text-white transition hover:bg-white hover:text-radiantOrange"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
