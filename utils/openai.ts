import { createOpenAI } from "@ai-sdk/openai";

const OpenAI = createOpenAI({
  compatibility: "strict",
  project: process.env.OPENAI_PROJECT,
  apiKey: process.env.OPENAI_API_KEY,
});

export default OpenAI;
