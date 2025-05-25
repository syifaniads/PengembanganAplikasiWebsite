
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const user = (await cookies()).get("user");
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const item = await prisma.item.update({
    where: { id: Number(params.id) },
    data: {
      title: body.title,
      body: body.body,
    },
  });

  return NextResponse.json(item);
}

await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: { username: "admin", password: "password" },
  });

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const user = (await cookies()).get("user");
  if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  await prisma.item.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ success: true });
}