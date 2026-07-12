import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radiantMuted text-white sm:bg-radiantInk">
      {/* Mobile: show the full photo, uncropped (source is 2:1, too wide to fill a tall phone screen without cropping most of it out) */}
      <div className="relative aspect-[2/1] w-full sm:hidden">
        <Image src="/images/stay-radiant-hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="px-6 py-10 text-center sm:hidden">
        <h1 className="font-display text-4xl leading-[0.95]">{brand.name}</h1>
        <p className="mx-auto mt-4 max-w-sm text-base font-medium leading-6 text-white/82">{brand.tagline}</p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantCream"
          >
            Get Started <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Tablet and up: full-bleed hero with overlaid copy */}
      <div className="relative hidden sm:block sm:min-h-[85vh] md:min-h-screen">
        <Image
          src="/images/stay-radiant-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="container-sr relative flex min-h-[85vh] flex-col items-center justify-end pb-16 pt-28 text-center md:min-h-screen md:pb-20 md:pt-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-5xl leading-[0.95] md:text-6xl lg:text-7xl">{brand.name}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-7 text-white/82 sm:text-xl sm:leading-8">
              {brand.tagline}
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantCream"
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
