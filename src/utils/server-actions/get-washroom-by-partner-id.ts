"use server";

import { db } from "@/lib/db";

export const getWashroomByPartnerId = async (partnerId: string) => {
  const washroom = await db.washroomImage.findMany({
    where: {
      partnerId,
    },
  });

  return washroom;
};
