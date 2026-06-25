import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { galleryImages } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(galleryImages);
  }

  try {
    // Prefer database images, with seeded launch content as a resilient fallback.
    const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(images.length ? images : galleryImages);
  } catch {
    return NextResponse.json(galleryImages);
  }
}
