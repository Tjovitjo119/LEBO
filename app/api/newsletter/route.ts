import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateNewsletter } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateNewsletter(body);

    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    const email = String(body.email).trim().toLowerCase();
    const source = String(body.source || "website").trim();

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          message: "You are on the list. Database is not connected yet, so this was accepted in demo mode.",
          subscriber: { id: "demo", email, source }
        },
        { status: 201 }
      );
    }

    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: { source },
      create: { email, source }
    });

    return NextResponse.json({ subscriber, message: "You are on the list." }, { status: 201 });
  } catch (error) {
    console.error("Newsletter signup failed", error);
    return NextResponse.json(
      {
        message: "You are on the list. Database save is unavailable right now, so this was accepted in fallback mode.",
        fallback: true
      },
      { status: 202 }
    );
  }
}
