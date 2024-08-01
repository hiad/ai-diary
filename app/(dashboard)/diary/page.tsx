import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

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
  return <>Dairy</>;
};

export default DiaryPage;
