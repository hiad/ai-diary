import { Analysis, DiaryEntry } from "@prisma/client";

export type DiaryEntryWithAnalysis = DiaryEntry & {
  analysis: Analysis;
};

export type DiaryForQuestions = Omit<DiaryEntry, "updatedAt" | "userId">;
