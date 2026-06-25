import { ContactForm } from "@/components/ContactForm";
import { contactDetails } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <section className="section-p2">
      <div className="container-p2">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase text-orangeDark">Contact Us</p>
          <h1 className="mt-3 text-5xl font-black text-charcoal">Questions, directions, and business enquiries.</h1>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contactDetails.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-md bg-orangeDark/10 text-orangeDark">
                  <Icon size={21} />
                </div>
                <p className="text-sm font-black uppercase text-charcoal/60">{label}</p>
                <p className="mt-1 font-bold text-charcoal">{value}</p>
              </div>
            ))}
            <div className="grid min-h-72 place-items-center rounded-lg border border-dashed border-orangeDark/40 bg-white p-6 text-center">
              <div>
                <p className="text-xl font-black text-charcoal">Google Maps Placeholder</p>
                <p className="mt-2 text-sm text-charcoal/70">Embed the shop location map here before launch.</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
