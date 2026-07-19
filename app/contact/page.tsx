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
      <section className="relative overflow-hidden bg-radiantInk text-white">
        <div className="relative h-[40vh] w-full sm:h-[45vh]">
          <Image src="/images/wellness.jpeg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Contact</p>
              <h1 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">Let&apos;s connect.</h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                Collaborations, partnerships, reader messages, course interest, and launch enquiries all start here.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:brightness-110"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-radiantInk transition hover:bg-radiantCream"
                >
                  <Send size={16} /> Email Stay Radiant
                </a>
              </div>
            </div>
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
