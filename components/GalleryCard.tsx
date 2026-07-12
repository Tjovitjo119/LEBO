"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const editorialImages = [
  { title: "Stay Radiant editorial hero", imageUrl: "/images/stay-radiant-hero.png" },
  { title: "Founder studio portrait", imageUrl: "/images/stay-radiant-founder.png" },
  { title: "Beauty and wellness flatlay", imageUrl: "/images/stay-radiant-flatlay.png" },
  { title: "Merch preview", imageUrl: "/images/stay-radiant-merch.png" }
];

export function GalleryGrid() {
  const [selected, setSelected] = useState<(typeof editorialImages)[number] | null>(null);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {editorialImages.map((image) => (
          <button
            key={image.title}
            onClick={() => setSelected(image)}
            className="group relative aspect-[4/5] overflow-hidden rounded-md bg-radiantCream text-left shadow-sm"
          >
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-top transition duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-radiantPink/90 p-4" role="dialog" aria-modal="true">
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-white text-radiantInk"
            aria-label="Close gallery image"
          >
            <X size={22} />
          </button>
          <div className="relative h-[82vh] w-full max-w-4xl overflow-hidden rounded-md bg-radiantPink">
            <Image src={selected.imageUrl} alt={selected.title} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
