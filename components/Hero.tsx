import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radiantInk text-white">
      <div className="relative w-full">
        <Image
          src="/images/homepage.jpeg"
          alt=""
          width={1774}
          height={887}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">{brand.name}</h1>
            <p className="mx-auto mt-4 max-w-lg text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8">
              {brand.tagline}
            </p>
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-md bg-radiantOrange px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-radiantOrange/90"
              >
                Get Started <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
