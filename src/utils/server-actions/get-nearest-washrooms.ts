"use server"

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
    where: {
      published: true
    }
  });

  return washrooms;
};
