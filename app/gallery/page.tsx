import { GalleryGrid } from "@/components/GalleryCard";

export default function GalleryPage() {
  return (
    <section className="section-p2">
      <div className="container-p2">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase text-orangeDark">Hair Studio Gallery</p>
          <h1 className="mt-3 text-5xl font-black text-charcoal">Braids, nails, haircuts, and studio styles.</h1>
        </div>
        <GalleryGrid />
      </div>
    </section>
  );
}
