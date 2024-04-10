import Hero from "@/components/sections/hero";
import Onboarding from "@/components/sections/onboarding";
import { db } from "@/lib/db";
import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getServerSession } from "@/utils/get-server-session";

const Page = async () => {
  const session = await getServerSession();
  if (session) {
    return redirect("/services");
  }

  return (
    <div>
      <Hero />
      <Onboarding />
    </div>
  );
};

export default Page;
