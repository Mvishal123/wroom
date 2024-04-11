import { getPartnerById } from "@/utils/get-partner-by-id";
import { redirect } from "next/navigation";
import React from "react";
import ShopDetailsMainForm from "./shop-details-main-form";
import { getWashroomByPartnerId } from "@/utils/get-washroom-by-id";

interface PartnerDetailsFormProps {
  partnerId: string;
}
const PartnerDetailsForm = async ({ partnerId }: PartnerDetailsFormProps) => {
  const partner = await getPartnerById(partnerId);
  const washroom = await getWashroomByPartnerId(partnerId);
  if (!partner) {
    return redirect("/");
  }

  return (
    <div className="page-min-height section-spacing py-6">
      <div>
        <h1 className="text-2xl font-semibold">Bussiness details</h1>
        <div>
          <ShopDetailsMainForm data={partner} washroomData={washroom || null} />
        </div>
      </div>
    </div>
  );
};

export default PartnerDetailsForm;
