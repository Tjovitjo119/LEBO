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
      return NextResponse.json(
        {
          message: "Message received. Database is not connected yet, so this was accepted in demo mode.",
          contactMessage: {
            id: "demo",
            name: body.name,
            email: body.email,
            phoneNumber: body.phoneNumber || null,
            subject: body.subject,
            message: body.message
          }
        },
        { status: 201 }
      );
    }

    // Keep contact enquiries in PostgreSQL when a deployment database is configured.
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber || null,
        subject: body.subject,
        message: body.message
      }
    });

    return NextResponse.json({ contactMessage, message: "Message received. Stay Radiant will respond soon." }, { status: 201 });
  } catch (error) {
    console.error("Create contact message failed", error);
    return NextResponse.json(
      {
        message: "Message received. Database save is unavailable right now, so this was accepted in fallback mode.",
        fallback: true
      },
      { status: 202 }
    );
  }
}
