import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { navLinks, whatsappUrl } from "@/lib/site-data";
import { BrandMark } from "@/components/BrandMark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-radiantInk/10 bg-radiantCream/92 backdrop-blur">
      <nav className="container-sr flex min-h-20 items-center justify-between gap-4">
        <BrandMark />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-radiantInk/75 transition hover:bg-radiantPink hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            className="grid h-11 w-11 place-items-center rounded-md border border-radiantPink/30 bg-white text-radiantPink transition hover:bg-radiantPink hover:text-white"
            aria-label="Contact Stay Radiant on WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </nav>
      <div className="border-t border-radiantInk/5 lg:hidden">
        <div className="container-sr flex gap-2 overflow-x-auto py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-bold text-radiantInk shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
