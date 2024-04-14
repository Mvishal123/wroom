import { getPartnerById } from "@/utils/get-partner-by-id";
import { seedData } from "@/utils/seed";
import { getCustomerMetricsById } from "@/utils/server-actions/get-partner-metrics";
import React from "react";
import KPICard from "./kpi-card";

import { HiUsers } from "react-icons/hi2";
import BarChart from "./bar-chart";
import AgeTable from "./age-table";

const Dashboard = async ({ partnerId }: { partnerId: string }) => {
  const metrics = await getCustomerMetricsById(partnerId);
  const partnerDetails = await getPartnerById(partnerId);

  if (partnerDetails) {
    return (
      <div className="section-spacing">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl sm:text-4xl font-bold">
            {partnerDetails?.shopName}
          </h1>
          <p className="text-xs text-slate-400">{partnerDetails.address}</p>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <KPICard
              header="Total customers"
              icon={<HiUsers className="h-5 w-5" />}
              data={metrics.data?.totalCustomers || 0}
            />
            <KPICard
              header="Customers this month"
              icon={<HiUsers className="h-5 w-5" />}
              data={metrics.data?.totalCustomers || 0}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
            <div className="bg-brand/secondary/75 p-2 rounded-xl">
              <BarChart
                data={{
                  males: metrics.data?.maleCustomers || 0,
                  females: metrics.data?.femaleCustomers || 0,
                }}
              />
            </div>
            <div>
              <AgeTable data={metrics.data?.ageGroups!} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Dashboard;
