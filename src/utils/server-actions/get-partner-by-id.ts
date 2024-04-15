"use server"

import { db } from "@/lib/db";

export const getPartnerById = async (partnerId: string) => {
  const partner = db.partner.findUnique({
    where: {
      id: partnerId,
    },
  });

  return partner;
};
