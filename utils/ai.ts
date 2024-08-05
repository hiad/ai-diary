import { zResponse } from "@/app/zod-schemas/schemas";
import OpenAI from "./openai";
import { generateObject } from "ai";
import { z } from "zod";

type AnalyzeResponse = z.infer<typeof zResponse>;

export const analyzeAI = async (
  prompt: string
): Promise<AnalyzeResponse | undefined> => {
  const askingPrompt =
    "I'm going to give you a prompt with a diary entry, I want to analyze for some things. I need a mood, a summary, what subject is and what color representing the mood of the entry. ";

  try {
    const { object } = await generateObject({
      model: OpenAI("gpt-3.5-turbo"),
      schema: zResponse,
      prompt: askingPrompt + prompt,
    });

    return object;
  } catch (error) {
    console.error(error);
  }

  return undefined; // Add a return statement at the end of the function
};
