import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  if (user) {
    const match = await prisma.user.findUnique({
      where: {
        clerkId: user.id as string,
      },
    });
    if (!match) {
      await prisma.user.create({
        data: {
          email: user?.emailAddresses[0].emailAddress as string,
          clerkId: user?.id as string,
        },
      });
    }
  }
  redirect("/diary");
};

const NewUserPage = async () => {
  await createNewUser();
  return <>Hi</>;
};

export default NewUserPage;
