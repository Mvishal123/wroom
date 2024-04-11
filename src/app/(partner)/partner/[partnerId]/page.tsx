import { getServerSession } from "@/utils/get-server-session";
import { redirect } from "next/navigation";

import { UserRole } from "@prisma/client";
import { getPartnerById } from "@/utils/get-partner-by-id";
import PartnerDetailsForm from "@/components/partner/partner-details-form";

const Page = async ({ params }: { params: { partnerId: string } }) => {
  const session = await getServerSession();
  if (!session || session.userRole !== UserRole.PARTNER) {
    return redirect("/");
  }

  const partner = await getPartnerById(session.userId);
  if (!partner?.published) {
    return <PartnerDetailsForm partnerId={session.userId} />;
  }

  return <>{JSON.stringify(session)}</>;
};

export default Page;
