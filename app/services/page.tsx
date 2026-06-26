import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import { editorialInfluences, services } from "@/lib/site-data";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-radiantInk py-20 text-white">
        <div className="container-sr">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Services</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-tight md:text-7xl">Bold solutions tailored for impact.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Stay Radiant supports brands and creators through editorial content, collaboration strategy, SEO-led blog
            growth, and future-ready community products.
          </p>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-radiantPink py-16 text-white">
        <div className="container-sr flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Partnerships</p>
            <h2 className="mt-3 max-w-3xl font-display text-5xl leading-tight">Partner with bold innovators to elevate your brand.</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantGold"
          >
            Get started <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-sr">
          <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.2em] text-radiantPink">Editorial influences</p>
          <div className="grid gap-3 text-center font-display text-2xl sm:grid-cols-5">
            {editorialInfluences.map((name) => (
              <span key={name} className="rounded-md bg-radiantCream px-4 py-5 text-radiantInk">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
