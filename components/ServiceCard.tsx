import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  name: string;
  description: string;
  price?: string;
  icon: LucideIcon;
};

export function ServiceCard({ name, description, price, icon: Icon }: ServiceCardProps) {
  return (
    <article className="rounded-md border border-radiantInk/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-black text-radiantInk">{name}</h3>
      <p className="mt-3 min-h-16 text-sm leading-6 text-radiantMuted">{description}</p>
      {price ? <p className="mt-5 font-black text-radiantPink">{price}</p> : null}
    </article>
  );
}
