"use server";

import { db } from "@/lib/db";
import { partnerFormSchema } from "@/lib/schema/partner-form-schema";
import axios from "axios";
import { z } from "zod";

export const createPartner = async (
  data: z.infer<typeof partnerFormSchema>,
  partnerId: string
) => {
  try {
    const location = await axios.get(
      `https://geocode.maps.co/search?q=${`${data.shopName}, ${data.address}`}&api_key=6617ef8b79a92866296445sfy921060`
    );

    console.log(location.data);
    console.log(data.address);
    

    // await db.partner.update({
    //   where: {
    //     id: partnerId,
    //   },
    //   data: {
    //     ...data,
    //     published: true,
    //   },
    // });

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
