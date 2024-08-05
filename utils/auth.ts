import { auth } from "@clerk/nextjs/server";
import { prisma } from "./db";
import { redirect } from "next/navigation";

export const getUserByClerkId = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/new-user");

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
  if (!user) redirect("/new-user");

  return user;
};
