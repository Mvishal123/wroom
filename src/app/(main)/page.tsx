import FinalSection from "@/components/sections/final-section";
import FindWashrooms from "@/components/sections/find-washrooms";
import Hero from "@/components/sections/hero";
import Hero2 from "@/components/sections/new-hero";
import Priorities from "@/components/sections/priorities";
import Updates from "@/components/sections/updates";
import { getServerSession } from "@/utils/server-actions/get-server-session";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession();
  if (session) {
    return redirect("/services");
  }

  return (
    <div className="overflow-hidden">
      <Hero />
      <Hero2/>
      <Priorities />
      <Updates />
      <FindWashrooms />
      <FinalSection />
      {/* <Onboarding /> */}
    </div>
  );
};

export default Page;
