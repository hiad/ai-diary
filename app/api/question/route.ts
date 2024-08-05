import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { qa } from "@/utils/vector";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { question } = await request.json();
  const user = await getUserByClerkId();

  const entries = await prisma.diaryEntry.findMany({
    where: { userId: user.id },
    select: { content: true, id: true, createdAt: true },
  });

  const answer = await qa({ question, entries });

  return NextResponse.json({ data: answer });
};
