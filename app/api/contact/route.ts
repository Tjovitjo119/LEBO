import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateContact } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateContact(body);

    if (!validation.ok) {
      return NextResponse.json({ message: validation.message }, { status: 400 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ message: "Database connection is not configured." }, { status: 503 });
    }

    // Keep contact enquiries in PostgreSQL for later admin dashboard or follow-up work.
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email || null,
        message: body.message
      }
    });

    return NextResponse.json({ contactMessage, message: "Message saved." }, { status: 201 });
  } catch (error) {
    console.error("Create contact message failed", error);
    return NextResponse.json({ message: "Unable to save message. Check your database connection." }, { status: 500 });
  }
}
