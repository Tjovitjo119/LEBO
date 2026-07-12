import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand, brandValues, missionPillars } from "@/lib/site-data";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-radiantInk py-24 text-white">
        <Image src="/images/stay-radiant-founder.png" alt="" fill sizes="100vw" className="object-cover object-top opacity-35" />
        <div className="absolute inset-0 bg-radiantInk/55" />
        <div className="container-sr relative">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">About us</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-tight md:text-7xl">Meet the woman behind the brand.</h1>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-md shadow-sm">
            <Image
              src="/images/stay-radiant-founder.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Founder story</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">Lebohang Ramakau built Stay Radiant from a gap she could feel.</h2>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-radiantMuted">
              <p>
                Lebohang holds a Fashion Media degree and founded {brand.legalName} in 2023 after being inspired by her
                therapist to build her own empire.
              </p>
              <p>
                After researching the South African blogging landscape, she found very few local creators using dedicated
                professional platforms. Stay Radiant was created to give diverse women a searchable, owned, and
                monetisable home for beauty, self-care, fashion, and lifestyle content.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-radiantPink pl-5 font-display text-3xl leading-tight text-radiantInk">
              &quot;Blogging opens a path for creators and entrepreneurs to build passive income while exploring their passions.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section-sr bg-white">
        <div className="container-sr">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Mission, vision, purpose</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">A platform for self-care, self-expression, and creative ownership.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {missionPillars.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-md border border-radiantInk/10 bg-radiantCream p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.16em] text-radiantInk">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-radiantMuted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantCream text-radiantInk">
        <div className="container-sr">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Values</p>
              <h2 className="mt-4 font-display text-5xl leading-tight">The tone is warm, bold, inclusive, and editorial.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {brandValues.map(({ title, icon: Icon }) => (
                <div key={title} className="flex items-center gap-4 rounded-md border border-radiantInk/10 bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
                    <Icon size={21} />
                  </span>
                  <span className="text-lg font-black">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Team structure</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">Built to grow from founder-led publishing into a creator platform.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "CEO & Founder: Lebohang Ramakau",
              "Production: Blog Publisher and Software Developers",
              "Marketing: Social Media Intern and UI Experience Designer"
            ].map((item) => (
              <div key={item} className="rounded-md bg-white p-6 text-lg font-black text-radiantInk shadow-sm">
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk shadow-sm transition hover:bg-radiantCream"
          >
            Contact us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
