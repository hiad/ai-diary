import { analyzeAI } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (
  request: Request,
  { params: { id } }: { params: { id: string } }
) => {
  const { content } = await request.json();
  console.log(content);

  const user = await getUserByClerkId();
  const entry = await prisma.diaryEntry.update({
    where: {
      id,
      userId_id: {
        userId: user.id,
        id,
      },
    },
    data: {
      content: content,
    },
  });

  const analysis = await analyzeAI(entry.content);

  if (analysis) {
    await prisma.analysis.upsert({
      where: {
        entryId: entry.id,
      },
      update: { ...analysis },
      create: {
        entryId: entry.id,
        userId: user.id,
        ...analysis,
      },
    });
  }

  return NextResponse.json({
    data: {
      ...entry,
      analysis: analysis,
    },
  });
};
