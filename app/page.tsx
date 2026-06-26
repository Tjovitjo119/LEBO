import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { Hero } from "@/components/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ServiceCard } from "@/components/ServiceCard";
import { blogPosts, brand, editorialInfluences, services } from "@/lib/site-data";

const ticker = "STAY RADIANT  SELF CARE  BEAUTY  WELLNESS  LIFESTYLE  FASHION";
const featuredPosts = blogPosts.filter((post) => post.featured).concat(blogPosts.filter((post) => !post.featured)).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="overflow-hidden bg-radiantPink py-4 text-white">
        <div className="ticker-track flex w-[200%] gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.24em]">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index}>{ticker}</span>
          ))}
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-sm">
            <Image src="/images/stay-radiant-founder.png" alt="" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Meet Stay Radiant</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">
              A beauty and wellness journal built for creators who want ownership.
            </h2>
            <p className="mt-6 text-lg leading-8 text-radiantMuted">
              Founded by {brand.founder}, Stay Radiant curates beauty, self-care, fashion, and lifestyle content for
              young women building confidence, community, and creative independence.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-radiantInk px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-radiantPink"
            >
              Learn more <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sr bg-white">
        <div className="container-sr">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Featured posts</p>
              <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">Fresh reads for your next glow-up.</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-radiantInk hover:text-radiantPink">
              View all posts <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantInk text-white">
        <div className="container-sr">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Services</p>
            <h2 className="mt-4 font-display text-5xl leading-tight">Content, collaboration, and creator growth in one place.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-radiantGold px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-white"
          >
            Explore services <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-radiantCoral py-10 text-radiantInk">
        <div className="container-sr">
          <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.2em]">Editorial influences</p>
          <div className="grid gap-3 text-center font-display text-2xl sm:grid-cols-5">
            {editorialInfluences.map((name) => (
              <span key={name} className="rounded-md bg-white/45 px-4 py-5">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Community note</p>
            <blockquote className="mt-5 font-display text-5xl leading-tight text-radiantInk">
              &quot;Blogging allows creators to generate passive income while exploring their passions online.&quot;
            </blockquote>
            <p className="mt-6 text-radiantMuted">Lebohang Ramakau, Founder</p>
          </div>
          <div className="rounded-md bg-white p-7 shadow-sm">
            <h2 className="font-display text-4xl text-radiantInk">Get on the email list</h2>
            <p className="mt-3 leading-7 text-radiantMuted">
              Join for beauty notes, self-care rituals, creator resources, and launch updates.
            </p>
            <div className="mt-6">
              <NewsletterForm source="home" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
