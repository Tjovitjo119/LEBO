import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const launchImages = [
  { title: "Fashion editorial", imageUrl: "/images/fashion.jpeg", category: "Fashion" },
  { title: "Skincare essentials", imageUrl: "/images/skincare.jpeg", category: "Skincare" },
  { title: "Wellness lifestyle", imageUrl: "/images/wellness.jpeg", category: "Wellness" }
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
