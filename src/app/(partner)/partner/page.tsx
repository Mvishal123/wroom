import { getServerSession } from "@/utils/get-server-session";
import { redirect } from "next/navigation";
import { toast } from "sonner";

import { UserRole } from "@prisma/client";
import ConfirmDialog from "@/components/partner/confirm-dialog";

const Page = async () => {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  if (session.userRole === UserRole.USER) {
    return <ConfirmDialog />;
  }

  if (session.userRole === UserRole.PARTNER) {
    return redirect(`/partner/${session.userId}`);
  }

  return <div className="page-min-height"></div>;
};

export default Page;
