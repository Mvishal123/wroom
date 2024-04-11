import { db } from "@/lib/db";

export const getWashroomByPartnerId = async (partnerId: string) => {
  const washroom = await db.washroom.findFirst({
    where: {
      partnerId,
    },
  });

  return washroom;
};
