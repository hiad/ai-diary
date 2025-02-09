import { z } from "zod";

export const zResponse = z.object({
  mood: z.string().describe("The mood of the person who wrote the diary entry"),
  summary: z
    .string()
    .describe("short summary of the diary entry, 300 characters max"),
  color: z
    .string()
    .describe(
      "a hexaheximal color representing the mood, For example #FFFF00 green for happy moods, please be as colorful as possible"
    ),
  subject: z
    .string()
    .describe("the subject of the diary entry. It's just one word"),
  negative: z.boolean().describe("does the entry have a negative connotation?"),
  sentimentScore: z
    .number()
    .describe(
      "sentiment of the text and rated on a scale from -10 to 10, where -10 is extremely negative, 0 is neutral, and 10 is extremely positive."
    ),
});
