import { getServerSession } from "@/utils/server-actions/get-server-session";
import { redirect } from "next/navigation";

import PartnerDetailsForm from "@/components/partner/partner-details-form";
import { getPartnerById } from "@/utils/server-actions/get-partner-by-id";
import { UserRole } from "@prisma/client";
import Dashboard from "@/components/dashboard/dashboard";

const Page = async ({ params }: { params: { partnerId: string } }) => {
  const session = await getServerSession();
  if (!session || session.userRole !== UserRole.PARTNER) {
    return redirect("/");
  }

  const partner = await getPartnerById(session.userId);
  
  if (!partner?.published) {
    return <PartnerDetailsForm partnerId={session.userId} />;
  }

  return (
    <div>
      <Dashboard partnerId={params.partnerId} />
    </div>
  );
};

export default Page;
