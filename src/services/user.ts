import { prisma } from "../utils/prisma";
import { getPublicUrl } from "../utils/url";

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (user) {
    return {
      ...user,
      avatar: getPublicUrl(user.avatar),
      cover: getPublicUrl(user.cover),
    };
  }

  return null;
};
