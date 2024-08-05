import type { DiaryEntry } from "@prisma/client";

const EntryCard = ({ entry }: { entry: DiaryEntry }) => {
  const date = new Date(entry.createdAt).toDateString();

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg  shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">{entry.content}</div>
    </div>
  );
};
export default EntryCard;
