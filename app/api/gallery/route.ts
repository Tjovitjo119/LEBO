import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { products } from "@/lib/site-data";

const launchImages = [
  { title: "Stay Radiant editorial hero", imageUrl: "/images/stay-radiant-hero.png", category: "Editorial" },
  { title: "Founder studio portrait", imageUrl: "/images/stay-radiant-founder.png", category: "Founder" },
  { title: "Beauty flatlay", imageUrl: "/images/stay-radiant-flatlay.png", category: "Blog" },
  ...products.map((product) => ({ title: product.name, imageUrl: product.image, category: "Shop" }))
];

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(launchImages);
  }

  try {
    // Prefer database images, with seeded launch content as a resilient fallback.
    const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(images.length ? images : launchImages);
  } catch {
    return NextResponse.json(launchImages);
  }
}
