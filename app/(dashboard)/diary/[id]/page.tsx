import Editor from "@/components/Editor";
import { DiaryEntryWithAnalysis } from "@/types";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";

const getEntry = async (id: string): Promise<DiaryEntryWithAnalysis | null> => {
  try {
    const user = await getUserByClerkId();
    const entry = await prisma.diaryEntry.findUnique({
      where: {
        id,
        userId_id: {
          userId: user.id,
          id,
        },
      },
      include: {
        analysis: true,
      },
    });
    return entry as DiaryEntryWithAnalysis;
  } catch (error) {
    throw new Error("Entry not found");
  }
};

const EntryPage = async ({ params }: { params: { id: string } }) => {
  const entry = await getEntry(params.id);
  if (!entry) {
    redirect("/diary");
  }

  return (
    <div className="p-10 bg-zinc-400/10 w-full">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
