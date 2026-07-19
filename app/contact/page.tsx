import Image from "next/image";
import { MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { brand, whatsappUrl } from "@/lib/site-data";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="overflow-hidden bg-radiantInk text-white">
        <div className="relative w-full">
          <Image src="/images/wellness.jpeg" alt="" width={1774} height={887} priority sizes="100vw" className="h-auto w-full object-contain" />
        </div>
        <div className="container-sr px-6 py-12 sm:py-16">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight sm:text-6xl md:text-7xl">Let&apos;s connect.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Collaborations, partnerships, reader messages, course interest, and launch enquiries all start here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantCream"
            >
              <Send size={18} /> Email Stay Radiant
            </a>
          </div>
        </div>
      </section>

      <section className="section-sr bg-white">
        <div className="container-sr max-w-2xl">
          <h2 className="mb-8 text-center font-display text-4xl text-radiantInk">Send a message</h2>
          <ContactForm />
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Newsletter</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-radiantInk">Beauty notes and creator resources, straight to your inbox.</h2>
          </div>
          <NewsletterForm source="contact" />
        </div>
      </section>
    </>
  );
}
