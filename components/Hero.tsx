import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-radiantInk text-white sm:min-h-screen">
      <Image
        src="/images/homepage.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      <div className="container-sr relative flex min-h-[90vh] flex-col items-start justify-end pb-16 pt-28 sm:min-h-screen sm:pb-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">{brand.name}</h1>
          <p className="mt-5 max-w-lg text-lg font-medium leading-7 text-white/90 sm:text-xl sm:leading-8">
            {brand.tagline}
          </p>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md bg-radiantOrange px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-radiantOrange/90"
            >
              Get Started <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
