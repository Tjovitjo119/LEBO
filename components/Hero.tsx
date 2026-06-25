import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-charcoal text-white">
      <Image src="/images/hero-nails-background.jpg" alt="" fill priority className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/25" />
      <div className="container-p2 relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-md bg-softGold px-4 py-2 text-sm font-black uppercase tracking-wide text-charcoal">
            Internet Cafe + Hair Studio
          </p>
          <div className="mb-6 flex items-center gap-4">
            <span className="relative h-20 w-20">
              <Image src="/images/p2-hair-studio-logo.png" alt="P2 Hair Studio logo" fill sizes="80px" className="object-contain" />
            </span>
          </div>
          <h1 className="text-5xl font-black leading-tight md:text-7xl">P2 Internet Cafe & Hair Studio</h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-white/80">
            Fast internet. Professional grooming. Everything you need in one place.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/prices" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 font-black text-charcoal transition hover:bg-softGold">
              View Price List
            </Link>
            <a href={whatsappUrl} className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-4 font-black text-white transition hover:bg-white hover:text-charcoal">
              <MessageCircle size={19} /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}