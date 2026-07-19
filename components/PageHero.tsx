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
    <section className="relative overflow-hidden bg-radiantInk text-white">
      <div className="relative w-full">
        <Image
          src={image}
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
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">{eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">{title}</h1>
            {description ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">{description}</p> : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
