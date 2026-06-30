import Image from "next/image";
import Link from "next/link";
import { Instagram, Music2, Pin, Youtube } from "lucide-react";
import { brand, contactDetails, footerGallery, navLinks } from "@/lib/site-data";

const socialIcons = [
  { label: "Instagram", icon: Instagram, href: brand.instagramUrl },
  { label: "Pinterest", icon: Pin, href: "/contact" },
  { label: "YouTube", icon: Youtube, href: "/contact" },
  { label: "TikTok", icon: Music2, href: "/contact" }
];

export function Footer() {
  return (
    <footer className="bg-radiantInk text-white">
      <div className="container-sr grid gap-10 py-12 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <h2 className="mb-4 text-sm font-black uppercase text-radiantGold">Instagram</h2>
          <div className="grid grid-cols-4 gap-2">
            {footerGallery.map((src, index) => (
              <a
                key={`${src}-${index}`}
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="relative block aspect-square overflow-hidden rounded-sm"
                aria-label="View Stay Radiant on Instagram"
              >
                <Image src={src} alt="" fill className="object-cover transition hover:scale-105" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase text-radiantGold">Navigate</h2>
          <div className="grid gap-2 text-sm text-white/75">
            {navLinks.map((item) => (
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
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/20 text-white transition hover:border-radiantGold hover:text-radiantGold"
                aria-label={label}
              >
                <Icon size={18} />
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
