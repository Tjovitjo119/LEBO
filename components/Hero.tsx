import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-radiantInk text-white">
      <Image src="/images/stay-radiant-hero.png" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-radiantInk/30" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-radiantInk via-radiantInk/55 to-transparent" />

      <div className="container-sr relative flex min-h-[calc(100vh-5rem)] items-end pb-20 pt-16">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-md bg-radiantGold px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-radiantInk">
            Beauty + wellness + lifestyle
          </p>
          <h1 className="font-display text-6xl leading-[0.95] md:text-8xl">{brand.name}</h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-white/82">{brand.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantGold"
            >
              Read the blog <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/45 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-radiantInk"
            >
              Collaborate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
