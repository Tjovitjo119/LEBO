import Image from "next/image";
import { NewsletterForm } from "@/components/NewsletterForm";
import { products } from "@/lib/site-data";

export const metadata = {
  title: "Shop"
};

export default function ShopPage() {
  return (
    <>
      <section className="bg-radiantInk py-20 text-white">
        <div className="container-sr grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantGold">Shop</p>
            <h1 className="mt-4 font-display text-6xl leading-tight md:text-7xl">The Stay Radiant shop.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Wear the brand. Live the lifestyle. The first merch concepts are priced from R350.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-md shadow-sm">
            <Image src="/images/stay-radiant-merch.png" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-sr bg-radiantCream">
        <div className="container-sr">
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-md bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-black text-radiantInk">{product.name}</h2>
                    <p className="font-black text-radiantPink">{product.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-radiantMuted">{product.description}</p>
                  <button className="mt-5 w-full rounded-md bg-radiantInk px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white">
                    Coming soon
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-md bg-white p-7 shadow-sm">
            <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-radiantPink">Launch list</p>
                <h2 className="mt-3 font-display text-4xl leading-tight text-radiantInk">Get notified when merch opens.</h2>
              </div>
              <NewsletterForm source="shop-launch" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
