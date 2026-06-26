import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { brand, contactDetails } from "@/lib/site-data";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-radiantInk py-20 text-white">
        <div className="container-sr">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Contact</p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-tight md:text-7xl">Let&apos;s connect.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Collaborations, partnerships, reader messages, course interest, and launch enquiries all start here.
          </p>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid content-start gap-4">
            {contactDetails.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-md border border-radiantInk/10 bg-white p-6 shadow-sm">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-md bg-radiantPink/10 text-radiantPink">
                  <Icon size={21} />
                </div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-radiantMuted">{label}</p>
                <p className="mt-1 font-bold text-radiantInk">{value}</p>
              </div>
            ))}
            <div className="rounded-md bg-radiantInk p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Business details</p>
              <p className="mt-4 text-lg font-black">{brand.legalName}</p>
              <p className="mt-2 text-sm text-white/72">Registration: {brand.registration}</p>
              <p className="mt-2 text-sm text-white/72">Domain target: {brand.domain}</p>
            </div>
          </div>
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
