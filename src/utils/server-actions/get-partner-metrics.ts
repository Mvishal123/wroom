"use server";

import { db } from "@/lib/db";
import { Gender } from "@prisma/client";

interface AgeGroups {
  [key: string]: number;
}

export const getCustomerMetricsById = async (partnerId: string) => {
  try {
    const metrics = await db.customers.findMany({
      where: {
        partnerId,
      },
      include: {
        user: {
          select: {
            id: true,
            gender: true,
            age: true,
          },
        },
      },
    });

    if (!metrics || metrics.length === 0) {
      return {
        success: true,
        error: false,
        data: null,
      };
    }

    const totalCustomers = metrics.length;
    const customersThisMonth = metrics.filter((customer) => {
      const customerDate = new Date(customer.date);
      const currentDate = new Date();
      return customerDate.getMonth() === currentDate.getMonth();
    }).length;

    const maleCustomers = metrics.filter((customer) => {
      return customer.user.gender === Gender.MALE;
    }).length;

    const femaleCustomers = metrics.filter((customer) => {
      return customer.user.gender === Gender.FEMALE;
    }).length;

    const ageGroups = {
      "0-18": metrics.filter((customer) => {
        return customer.user.age! <= 18;
      }).length,
      "19-30": metrics.filter((customer) => {
        return customer.user.age! >= 19 && customer.user.age! <= 30;
      }).length,
      "31-45": metrics.filter((customer) => {
        return customer.user.age! >= 31 && customer.user.age! <= 45;
      }).length,
      "46-60": metrics.filter((customer) => {
        return customer.user.age! >= 46 && customer.user.age! <= 60;
      }).length,
      "60+": metrics.filter((customer) => {
        return customer.user.age! >= 61;
      }).length,
    };

    // TODO: most visited age group
    // let mostVisitedAge: keyof AgeGroups = "0-18";
    // for (const age in ageGroups) {
    //     ageGroups[age] =
    // }

    return {
      success: true,
      error: false,
      data: {
        totalCustomers,
        customersThisMonth,
        maleCustomers,
        femaleCustomers,
        ageGroups,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: "ERROR: " + error,
      data: null,
    };
  }
};
