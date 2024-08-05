"use client";

import { askQuestion } from "@/utils/api";
import { useState } from "react";

const Question = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const answer = await askQuestion(value);
    setLoading(false);
    setAnswer(answer);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border border-black/20 px-6 py-2 text-lg text-black"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask a question?"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 py-2 px-4 rounded-lg text-lg text-white"
      >
        Ask
      </button>
      {loading && <p className="mt-4">Loading...</p>}
      {answer && <p className="mt-4">{answer}</p>}
    </form>
  );
};

export default Question;
