import { ServiceCard } from "@/components/ServiceCard";
import { cafeServices, otherServices, salonServices } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <section className="section-p2">
      <div className="container-p2">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase text-orangeDark">Internet Cafe Services</p>
          <h1 className="mt-3 text-5xl font-black text-charcoal">Online access, documents, applications, gaming, and more.</h1>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">
            P2 helps with everyday digital tasks, printing needs, and computer access in a clean professional space.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cafeServices.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-3xl font-black text-charcoal">Hair Studio Services</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {salonServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-3xl font-black text-charcoal">Other Services</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {otherServices.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-lg bg-charcoal p-8 text-white">
          <p className="text-sm font-black uppercase text-softGold">Business hours</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <p className="rounded-md bg-white/10 p-5 font-bold">Monday-Friday: 08:00-19:00</p>
            <p className="rounded-md bg-white/10 p-5 font-bold">Saturday: 08:00-18:00</p>
            <p className="rounded-md bg-white/10 p-5 font-bold">Sunday: 09:00-15:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
