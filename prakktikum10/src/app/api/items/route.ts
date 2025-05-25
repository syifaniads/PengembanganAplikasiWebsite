import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function GET() {
  const items = await prisma.item.findMany();
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const user = (await cookies()).get("user");
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // ✅ FIX: Pastikan user dengan id = 1 ada (sementara untuk testing)
  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: { username: "admin", password: "password" },
  });

  const body = await req.json();
  const item = await prisma.item.create({
    data: {
      title: body.title,
      body: body.body,
      userId: 1, // pakai userId yang dijamin ada
    },
  });

  return NextResponse.json(item);
}
