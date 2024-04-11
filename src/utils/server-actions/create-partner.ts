"use server";

import { db } from "@/lib/db";
import { partnerFormSchema } from "@/lib/schema/partner-form-schema";
import { z } from "zod";

export const createPartner = async (
  data: z.infer<typeof partnerFormSchema>,
  partnerId: string
) => {
  try {
    await db.partner.update({
      where: {
        id: partnerId,
      },
      data: {
        ...data,
        published: true,
      },
    });

    return {
      success: "Registered successfully",
      error: "",
    };
  } catch (error) {
    return {
      success: "",
      error: "ERROR: " + error,
    };
  }
};
