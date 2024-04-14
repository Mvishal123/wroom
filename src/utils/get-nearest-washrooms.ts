import { db } from "@/lib/db";

// TODO: add formula later
export const getNearestWashrooms = async () => {
  const washrooms = await db.partner.findMany({
    include: {
      washrooms: {
        select: {
          image: true,
        },
      },
    },
  });

  return washrooms;
};
