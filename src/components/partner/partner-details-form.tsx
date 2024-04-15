import { getPartnerById } from "@/utils/server-actions/get-partner-by-id";
import { redirect } from "next/navigation";
import React from "react";
import ShopDetailsMainForm from "./shop-details-main-form";
import { getWashroomByPartnerId } from "@/utils/server-actions/get-washroom-by-partner-id";

interface PartnerDetailsFormProps {
  partnerId: string;
}
const PartnerDetailsForm = async ({ partnerId }: PartnerDetailsFormProps) => {
  const partner = await getPartnerById(partnerId);
  const washrooms = await getWashroomByPartnerId(partnerId);
  if (!partner) {
    return redirect("/");
  }

  return (
    <div className="page-min-height section-spacing py-4">
      <div>
        <ShopDetailsMainForm data={partner} washroomData={washrooms || null} />
      </div>
    </div>
  );
};

export default PartnerDetailsForm;
