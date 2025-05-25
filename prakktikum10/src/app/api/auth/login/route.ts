import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "admin" && password === "password") {
    const cookieStore = cookies(); // ✅ tanpa await
    cookieStore.set("user", username, { httpOnly: true });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
