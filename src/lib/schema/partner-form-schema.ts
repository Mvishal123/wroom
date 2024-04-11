import { z } from "zod";

export const partnerFormSchema = z.object({
  shopName: z.string().min(1, { message: "Required" }),
  shopType: z.string().min(1, { message: "Required" }),

  state: z.string().min(1, { message: "Required" }),
  city: z.string().min(1, { message: "Required" }),
  pincode: z.string().min(6, { message: "Required" }),
  address: z.string().min(1, { message: "Required" }),
});
