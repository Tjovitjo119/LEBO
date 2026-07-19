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
      <div className="relative h-[40vh] w-full sm:h-[45vh]">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">{eyebrow}</p>
            <h1 className="mx-auto mt-3 max-w-4xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h1>
            {description ? <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">{description}</p> : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
