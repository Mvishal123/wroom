import WashroomCard from "@/components/washroom-card";
import { USER_LOCATION, WASHROOM_MOCK_DATA } from "@/lib/constants";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { getServerSession } from "@/utils/get-server-session";

const Page = async () => {
  const user = await getServerSession();
  if (!user) {
    return redirect("/");
  }
  console.log(user);
  
  return (
    <div className="section-spacing mt-6">
      <h1 className="text-3xl font-bold">Washrooms near me</h1>
      <section className="mt-2 bg-brand/secondary py-3 px-4 rounded-xl">
        <h2 className="text-brand/pink font-semibold">My location:</h2>
        <div className="text-xs">
          <p>
            Latitude:{USER_LOCATION.latitude}, Longitude:{" "}
            {USER_LOCATION.longitude}
          </p>
          <p>Address: {USER_LOCATION.address}</p>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex flex-wrap gap-6">
          {WASHROOM_MOCK_DATA.map((data) => (
            <WashroomCard data={data} key={data.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
