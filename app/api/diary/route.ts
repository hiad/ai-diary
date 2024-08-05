import { analyzeAI } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkId();
  const entry = await prisma.diaryEntry.create({
    data: {
      user: {
        connect: {
          id: user.id,
        },
      },
      content: "Write your entry here...",
      analysis: {
        create: {
          mood: "Neutral",
          subject: "None",
          negative: false,
          summary: "None",
          color: "#0101fe",
          userId: user.id,
        },
      },
    },
  });

  revalidatePath("/diary");

  return NextResponse.json({ data: entry });
};
