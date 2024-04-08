import { WashroomDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface WashroomCardProps {
  data: WashroomDataType;
}
const WashroomCard = ({ data }: WashroomCardProps) => {
  return (
    <Link href={`services/${data.id}`} className="w-[400px] rounded-lg py-2 px-3 bg-brand/secondary shadow-[_5px_5px_40px_1px_rgba(255,2,102,0.1)]">
      <div className="relative">
        <Image
          src={data.images[0]}
          alt="washroom"
          className="w-[380px] mx-auto object-cover object-center rounded-lg"
        />
      </div>
      <div className="mt-3">
        <h1 className="truncate font-semibold">{data.name}</h1>
        <h2 className="text-sm text-slate-300">{data.place}</h2>

        <p className="text-xs mt-2 line-clamp-2">{data.address}</p>
      </div>
    </Link>
  );
};

export default WashroomCard;
