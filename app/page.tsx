import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { blogPosts, brand, collaborations, services } from "@/lib/site-data";

const ticker = "STYLE  SELF-CARE  BUSINESS  WELLNESS";
const featuredPosts = blogPosts.filter((post) => post.featured).concat(blogPosts.filter((post) => !post.featured)).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="overflow-hidden bg-radiantOrange py-4 text-white">
        <div className="ticker-track flex w-[200%] gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.24em]">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index}>{ticker}</span>
          ))}
        </div>
      </section>

      <section className="bg-radiantCream py-10">
        <div className="container-sr">
          <Reveal>
            <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.2em] text-radiantPink">Collaborations</p>
            <div className="grid gap-x-3 gap-y-3 sm:grid-cols-4">
              {collaborations.map((partner) => (
                <div
                  key={partner.name}
                  className="hover-lift flex h-24 items-center justify-center rounded-md bg-white p-4 shadow-sm transition-shadow hover:shadow-glow"
                >
                  <div className="relative h-full w-full">
                    <Image src={partner.logo} alt={partner.name} fill sizes="200px" className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sr bg-white">
        <div className="container-sr">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Featured posts</p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-radiantInk sm:text-5xl">Fresh reads for your next glow-up.</h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:gap-3 hover:text-radiantPink">
                View all posts <ArrowUpRight size={17} />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 100}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantCream text-radiantInk">
        <div className="container-sr">
          <Reveal>
            <div className="mb-10 max-w-4xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Services</p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Content, collaboration, and creator growth in one place.</h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <Reveal key={service.name} delay={index * 100}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-radiantOrange px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:opacity-90"
          >
            Explore services <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="section-sr bg-white">
        <div className="container-sr grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-md shadow-sm">
              <Image
                src="/images/wellness 01.jpeg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">About us</p>
              <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">Meet the woman behind the brand.</h2>
              <p className="mt-6 text-lg leading-8 text-radiantMuted">
                Founded by {brand.founder}, Stay Radiant curates beauty, self-care, fashion, and lifestyle content for
                young women building confidence, community, and creative independence.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk shadow-sm transition hover:bg-radiantCream"
              >
                Learn more <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center bg-radiantCream px-8 py-16 sm:px-14">
              <h2 className="font-display text-4xl text-radiantInk">Get on the email list</h2>
              <p className="mt-3 max-w-md leading-7 text-radiantMuted">
                Join for beauty notes, self-care rituals, creator resources, and launch updates.
              </p>
              <div className="mt-6 max-w-md">
                <NewsletterForm source="home" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full items-center bg-radiantOrange px-8 py-16 text-white sm:px-14">
              <blockquote className="font-display text-4xl leading-tight">
                &quot;Blogging allows creators to generate passive income while exploring their passions online.&quot;
                <span className="mt-6 block text-base font-sans font-semibold normal-case text-white/80">
                  Lebohang Ramakau, Founder
                </span>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
