import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/site-data";

type BrandMarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function BrandMark({ inverted = false, compact = false }: BrandMarkProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Stay Radiant home">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full shadow-glow">
        <Image src="/images/stay-radiant-mark.png" alt="" fill sizes="44px" className="object-cover" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-xl tracking-[0.08em] ${inverted ? "text-white" : "text-radiantInk"}`}>
          {brand.name}
        </span>
        {!compact ? (
          <span className={`block text-xs font-semibold uppercase ${inverted ? "text-white/65" : "text-radiantPink"}`}>
            Beauty. Wellness. Lifestyle.
          </span>
        ) : null}
      </span>
    </Link>
  );
}
