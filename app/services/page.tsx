import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Bold solutions tailored for impact."
        description="Stay Radiant supports brands and creators through editorial content, collaboration strategy, SEO-led blog growth, and future-ready community products."
        image="/images/skincare 01.jpeg"
      />

      <section className="section-sr bg-radiantCream">
        <div className="container-sr">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
