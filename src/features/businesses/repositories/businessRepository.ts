import "server-only";

import { prisma } from "@/lib/prisma";

export async function getBusinessIdBySlug(
  slug: string,
) {
  const business =
    await prisma.business.findUnique({
      where: {
        slug,
      },

      select: {
        id: true,
      },
    });

  if (!business) {
    throw new Error(
      `Business "${slug}" could not be found.`,
    );
  }

  return business.id;
}