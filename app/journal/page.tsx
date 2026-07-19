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
      <section className="relative overflow-hidden bg-radiantInk text-white">
        <div className="relative h-[40vh] w-full sm:h-[45vh]">
          <Image src="/images/fashion 01.jpeg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Journal</p>
              <h1 className="mx-auto mt-3 max-w-4xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">The strategy behind the glow.</h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                Founder notes, editorial thinking, and platform ideas for the next stage of Stay Radiant.
              </p>
            </div>
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
