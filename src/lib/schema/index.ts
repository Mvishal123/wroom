import { z } from "zod";

import { Gender } from "@prisma/client";

export const partnerFormSchema = z.object({
  shopName: z.string().min(1, { message: "Required" }),
  shopType: z.string().min(1, { message: "Required" }),

  state: z.string().min(1, { message: "Required" }),
  city: z.string().min(1, { message: "Required" }),
  pincode: z.string().min(6, { message: "Required" }),
  address: z.string().min(1, { message: "Required" }),
  latitude: z.string().min(1, { message: "Required" }),
  longitude: z.string().min(1, { message: "Required" }),
});

export const userOnboardingSchema = z.object({
  age: z.string().min(1, { message: "required" }),
  gender: z.enum(["MALE", "FEMALE", "NONE"]),
});
