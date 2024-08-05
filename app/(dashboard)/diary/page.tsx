import EntryCard from "@/components/EntryCard";
import NewCardEntry from "@/components/NewEntryCard";
import Question from "@/components/Question";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.diaryEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
};

const DiaryPage = async () => {
  const entries = await getEntries();
  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <div className="mb-4">
        <Question />
      </div>
      <h2 className="text-3xl mb-8">Diary Entries</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewCardEntry />
        {entries.map((entry) => (
          <Link href={`/diary/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiaryPage;
