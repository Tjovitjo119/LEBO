import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { brand, contactDetails, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-radiantInk text-white">
      <div className="container-sr grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4">
            <BrandMark inverted />
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/70">
            {brand.description}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-radiantGold">
            {brand.location}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase text-radiantGold">Pages</h2>
          <div className="grid gap-2 text-sm text-white/75">
            {navLinks.slice(1).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase text-radiantGold">Contact</h2>
          <div className="grid gap-3 text-sm text-white/75">
            {contactDetails.map((detail) => (
              <p key={detail.label}>{detail.value}</p>
            ))}
          </div>
          <div className="mt-6 flex gap-3 text-sm font-bold text-white">
            {["Instagram", "Pinterest", "YouTube", "TikTok"].map((item) => (
              <a key={item} href="/contact" className="transition hover:text-radiantGold">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Copyright 2026 {brand.legalName}. Full-stack Next.js deployment.
      </div>
    </footer>
  );
}
