"use server";

import { db } from "@/lib/db";
import { userOnboardingSchema } from "@/lib/schema";
import { z } from "zod";

export const onboardUser = async (
  data: z.infer<typeof userOnboardingSchema>,
  userId: string
) => {
  try {
    const age = parseInt(data.age);
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        gender: data.gender,
        age: age,
        onboarded: true,
      },
    });

    return {
      success: "Onboarding successfull",
      error: "",
    };
  } catch (error) {
    return {
      success: "",
      error: "ERROR: " + error,
    };
  }
};
