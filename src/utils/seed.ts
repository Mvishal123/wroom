"use server";

import { db } from "@/lib/db";

export const seedData = async () => {
  await db.customers.create({
    data: {
      partnerId: "661bd5f399173eec84091ee1",
      userId: "661bd5f399173eec84091ee1",
    },
  });
};
