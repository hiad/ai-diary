"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

const NewCardEntry = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const entry = await createNewEntry();
    router.push(`/diary/${entry.id}`);
  };

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg border-red-100 border"
      onClick={handleOnClick}
    >
      <div className="px-2 py-3 sm:p-2">
        <span>New Entry</span>
      </div>
    </div>
  );
};
export default NewCardEntry;
