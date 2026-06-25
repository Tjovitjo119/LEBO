import { PriceCard } from "@/components/PriceCard";
import { cafeServices, otherServices, salonServices } from "@/lib/site-data";

export default function PricesPage() {
  return (
    <section className="section-p2">
      <div className="container-p2">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase text-orangeDark">Price List</p>
          <h1 className="mt-3 text-5xl font-black text-charcoal">Clear prices for online access, hair studio, and other services.</h1>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">
            P2 keeps everyday service pricing simple to scan, compare, and plan around.
          </p>
        </div>

        <div>
          <h2 className="mb-6 text-3xl font-black text-charcoal">Internet Cafe Services</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {cafeServices.map(({ name, price, description, icon }) => (
              <PriceCard key={name} name={name} price={price} description={description} icon={icon} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-3xl font-black text-charcoal">Hair Studio Services</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {salonServices.map(({ name, price, description, icon }) => (
              <PriceCard key={name} name={name} price={price} description={description} icon={icon} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-3xl font-black text-charcoal">Other Services</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {otherServices.map(({ name, price, description, icon }) => (
              <PriceCard key={name} name={name} price={price} description={description} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}