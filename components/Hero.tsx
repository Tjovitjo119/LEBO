import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-radiantInk text-white">
      <Image
        src="/images/stay-radiant-hero.png"
        alt=""
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-radiantInk/25" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-radiantInk via-radiantInk/45 to-transparent" />

      <div className="container-sr relative flex min-h-screen flex-col items-center justify-end pb-16 pt-28 text-center sm:pb-20 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">{brand.name}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-7 text-white/82 sm:text-xl sm:leading-8">
            {brand.tagline}
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantGold"
            >
              Get Started <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
