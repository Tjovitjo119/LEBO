"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/lib/site-data";

const categories = ["Braids", "Nails", "Haircuts"];

export function GalleryGrid() {
  const [selected, setSelected] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <>
      <div className="grid gap-14">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="mb-5 text-3xl font-black text-charcoal">{category}</h2>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {galleryImages
                .filter((image) => image.category === category)
                .map((image, index) => (
                  <button
                    key={`${image.title}-${index}`}
                    onClick={() => setSelected(image)}
                    className="group relative aspect-[4/5] overflow-hidden rounded-md bg-charcoal text-left shadow-sm"
                  >
                    <Image src={image.imageUrl} alt={image.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </button>
                ))}
            </div>
          </section>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-charcoal/90 p-4" role="dialog" aria-modal="true">
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-white text-charcoal"
            aria-label="Close gallery image"
          >
            <X size={22} />
          </button>
          <div className="relative h-[82vh] w-full max-w-4xl overflow-hidden rounded-lg bg-black">
            <Image src={selected.imageUrl} alt={selected.title} fill className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
