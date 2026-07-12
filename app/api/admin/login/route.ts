import { NextResponse } from "next/server";
import { ADMIN_COOKIE, checkAdminPassword, hashAdminPassword } from "@/lib/admin-auth";
import { getClientKey, isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (isRateLimited(`admin-login:${getClientKey(request)}`, 8, 10 * 60 * 1000)) {
    return NextResponse.json({ message: "Too many attempts. Please wait a few minutes." }, { status: 429 });
  }

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { message: "Admin access is not configured yet. Set ADMIN_PASSWORD in your environment variables." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const password = String(body.password || "");

  if (!checkAdminPassword(password)) {
    return NextResponse.json({ message: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Welcome back." });
  response.cookies.set(ADMIN_COOKIE, hashAdminPassword(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8
  });
  return response;
}
