import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { cafeServices, whatsappUrl } from "@/lib/site-data";
import { Droplets, Gamepad2, Printer, Scissors, Utensils, Wifi } from "lucide-react";

const features = [
  { name: "Internet Cafe", icon: Wifi, description: "Reliable access for browsing, research, email, and study." },
  { name: "Printing Services", icon: Printer, description: "Documents, copies, scans, CV support, and laminating." },
  { name: "Gaming", icon: Gamepad2, description: "A focused place for casual and competitive sessions." },
  { name: "Hair Studio", icon: Scissors, description: "Haircuts, braids, nails, relaxers, weaves, and styling." },
  { name: "Car Wash", icon: Droplets, description: "Professional car washing services." },
  { name: "Shisanyama", icon: Utensils, description: "Braai-style food service for customers and visitors." }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section-p2">
        <div className="container-p2">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-black uppercase text-orangeDark">What we do</p>
            <h2 className="mt-3 text-4xl font-black text-charcoal md:text-5xl">Built for quick errands and confident style.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <ServiceCard key={feature.name} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white">
        <div className="container-p2 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/internet-cafe.png" alt="Modern internet cafe workspace" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-softGold">Popular services</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Everything from online applications to a clean fade.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {cafeServices.slice(0, 6).map((service) => (
                <div key={service.name} className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="font-black">{service.name}</p>
                  <p className="mt-1 text-sm text-white/70">{service.price}</p>
                </div>
              ))}
            </div>
            <Link href="/services" className="mt-8 inline-flex rounded-md bg-softGold px-5 py-4 font-black text-charcoal transition hover:bg-white">
              Browse Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-p2">
        <div className="container-p2 grid gap-6 lg:grid-cols-3">
          {["Clean, quick, and professional.", "The hair studio service was simple.", "Helpful with my online application."].map((quote, index) => (
            <blockquote key={quote} className="rounded-lg border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-lg font-bold leading-7 text-charcoal">&ldquo;{quote}&rdquo;</p>
              <footer className="mt-5 text-sm font-black text-orangeDark">Customer {index + 1}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-orangeDark py-16 text-white">
        <div className="container-p2 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Ready to ask a question?</h2>
            <p className="mt-3 text-white/80">Message P2 directly and get helped fast.</p>
          </div>
          <a href={whatsappUrl} className="rounded-md bg-white px-6 py-4 font-black text-charcoal transition hover:bg-softGold">
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
