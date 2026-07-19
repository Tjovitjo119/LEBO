import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="overflow-hidden bg-radiantInk text-white">
      <div className="relative w-full">
        <Image
          src="/images/homepage.jpeg"
          alt=""
          width={1774}
          height={887}
          priority
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="px-6 py-12 text-center sm:py-16">
        <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">{brand.name}</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg font-medium leading-7 text-white/85 sm:text-xl sm:leading-8">
          {brand.tagline}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-radiantOrange px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-radiantOrange/90"
          >
            Get Started <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
