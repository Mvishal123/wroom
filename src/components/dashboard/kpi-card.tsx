import { ReactNode } from "react";
import { Card, CardHeader } from "../ui/card";

interface KPICardProps {
  header: string;
  icon: ReactNode;
  data: string | number;
}
const KPICard = ({ header, icon, data }: KPICardProps) => {
  return (
    <Card className="px-4 py-3 bg-brand/secondary  border-slate-900">
      <div className="flex items-start  justify-between">
        <h1 className="text-xl font-bold">{header}</h1>
        <div className="h-5">{icon}</div>
      </div>
      <div className="mt-4 text-4xl font-bold">{data}</div>
    </Card>
  );
};

export default KPICard;
