"use server";
import { UserRole } from "@prisma/client";

import { db } from "@/lib/db";

export const confirmPartner = async (userId: string, email: string) => {
  try {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        role: UserRole.PARTNER,
      },
    });

    await db.partner.create({
      data: {
        id: userId,
        email: email,
      },
    });

    return { success: "Partner confirmation successfull", error: "" };
  } catch (error) {
    return { success: "", error: "Something went wrong" + error };
  }
};
