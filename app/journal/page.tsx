import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { journalEntries } from "@/lib/site-data";

export const metadata = {
  title: "Journal"
};

export default function JournalPage() {
  return (
    <>
      <section className="bg-radiantInk py-20 text-white">
        <div className="container-sr grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Journal</p>
            <h1 className="mt-4 font-display text-6xl leading-tight md:text-7xl">The strategy behind the glow.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Founder notes, editorial thinking, and platform ideas for the next stage of Stay Radiant.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-sm">
            <Image src="/images/stay-radiant-flatlay.png" alt="" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid gap-5 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.title} className="rounded-md bg-white p-7 shadow-sm">
              <h2 className="font-display text-3xl text-radiantInk">{entry.title}</h2>
              <p className="mt-4 text-sm leading-6 text-radiantMuted">{entry.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-radiantCream py-16 text-radiantInk">
        <div className="container-sr flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-3xl font-display text-5xl leading-tight">Ready to collaborate on the next chapter?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-radiantPink px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:opacity-90"
          >
            Contact us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
