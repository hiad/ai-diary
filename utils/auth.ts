import { auth } from "@clerk/nextjs/server";
import { prisma } from "./db";

export const getUserByClerkId = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error("User not found");

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });

  return user;
};
