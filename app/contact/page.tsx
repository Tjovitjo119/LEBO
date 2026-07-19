import { MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { brand, whatsappUrl } from "@/lib/site-data";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's connect."
        description="Collaborations, partnerships, reader messages, course interest, and launch enquiries all start here."
        image="/images/stay-radiant-hero.png"
        tone="orange"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-radiantInk transition hover:brightness-95"
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
      </PageHero>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr max-w-2xl">
          <ContactForm />
        </div>
      </section>

      <section className="section-sr bg-white">
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
