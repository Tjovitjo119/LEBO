import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  tone?: "pink" | "orange";
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-radiantInk text-white">
      <div className="relative w-full">
        <Image
          src={image}
          alt=""
          width={1774}
          height={887}
          priority
          sizes="100vw"
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="px-6 py-12 sm:py-16">
        <div className="container-sr">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl md:text-7xl">{title}</h1>
          {description ? <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{description}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
