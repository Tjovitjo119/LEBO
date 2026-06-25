import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cafeServices } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(cafeServices);
  }

  try {
    // Read managed services from the database once the business starts editing content.
    const services = await prisma.service.findMany({ orderBy: { name: "asc" } });
    return NextResponse.json(services.length ? services : cafeServices);
  } catch {
    return NextResponse.json(cafeServices);
  }
}
