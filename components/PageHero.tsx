import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  tone?: "pink" | "orange";
  children?: React.ReactNode;
};

const toneClasses = {
  pink: {
    bg: "bg-radiantPink",
    gradient: "from-radiantPink via-radiantPink/70 to-radiantPink/35"
  },
  orange: {
    bg: "bg-radiantOrange",
    gradient: "from-radiantOrange via-radiantOrange/70 to-radiantOrange/35"
  }
};

export function PageHero({ eyebrow, title, description, image, tone = "pink", children }: PageHeroProps) {
  const { bg, gradient } = toneClasses[tone];

  return (
    <section className={`relative overflow-hidden ${bg} py-24 text-white sm:py-28`}>
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-top opacity-55" />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
      <div className="container-sr relative">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl md:text-7xl">{title}</h1>
        {description ? <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}
