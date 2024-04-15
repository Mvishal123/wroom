import LocationCard from "@/components/location-card";
import UserOnboardingDialog from "@/components/user-onboarding.-dialog";
import WashroomCard from "@/components/washroom-card";
import { getNearestWashrooms } from "@/utils/server-actions/get-nearest-washrooms";
import { getServerSession } from "@/utils/server-actions/get-server-session";
import { redirect } from "next/navigation";

const Page = async () => {
  const user = await getServerSession();

  if (!user) {
    return redirect("/");
  }

  if (!user?.onboarded) {
    return <UserOnboardingDialog userId={user.userId!} />;
  }

  const washroomDetails = await getNearestWashrooms();

  return (
    <div className="section-spacing mt-6">
      <h1 className="text-3xl font-bold">Washrooms near me</h1>

      <LocationCard />

      <section className="mt-6">
        <div className="flex flex-wrap gap-6">
          {washroomDetails.map((data) => (  
            <WashroomCard data={data} key={data.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
