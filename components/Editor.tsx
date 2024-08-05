"use client";

import type { DiaryEntryWithAnalysis } from "@/types";
import { updateEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const Editor = ({ entry }: { entry: DiaryEntryWithAnalysis }) => {
  const [value, setValue] = useState(entry.content);
  const [currentEntry, setEntry] = useState(entry);
  const [isLoading, setIsLoading] = useState(false);

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const updated = await updateEntry({ id: entry.id, content: _value });
      setEntry(updated);
      setIsLoading(false);
    },
  });
  const { mood, summary, negative, subject, color } = currentEntry.analysis;
  const analysisData = [
    { name: "Summary", value: summary },
    { name: "Subject", value: subject },
    { name: "Mood", value: mood },
    { name: "Negative", value: negative ? "Yes" : "No" },
  ];

  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col col-span-2">
        {isLoading && <div className="text-white">Loading</div>}
        <textarea
          className="w-full h-full p-8 text-xl text-gray-600 bg-black"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="col-span-1 pl-4">
        <div style={{ background: color }} className={`p-4 rounded-lg`}>
          <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Analysis
          </span>
        </div>
        <div>
          <ul>
            {analysisData.map((data) => (
              <li key={data.name} className="p-2">
                <span className="font-bold">{data.name}</span>: {data.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Editor;
