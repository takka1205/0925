import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { title }: { title: string } = await req.json();
  try {
    const posts = await prisma.post.create({ data: { title } });
    return NextResponse.json({ message: "成功", posts }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "失敗" }, { status: 500 });
  }
};
