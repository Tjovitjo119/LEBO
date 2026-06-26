import type { LucideIcon } from "lucide-react";

type PriceCardProps = {
  name: string;
  price?: string;
  description: string;
  icon: LucideIcon;
};

export function PriceCard({ name, price, description, icon: Icon }: PriceCardProps) {
  return (
    <article className="rounded-md border border-radiantInk/10 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-md bg-radiantInk text-radiantGold">
          <Icon size={21} />
        </div>
        {price && <p className="text-2xl font-black text-radiantPink">{price}</p>}
      </div>
      <h3 className="mt-5 text-lg font-black text-radiantInk">{name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-radiantMuted">{description}</p>
    </article>
  );
}
