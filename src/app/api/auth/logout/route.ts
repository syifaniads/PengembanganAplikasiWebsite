
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("user");
  return NextResponse.json({ success: true });
}