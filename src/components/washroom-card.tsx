import { Partner, WashroomImage } from "@prisma/client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface WashroomCardProps {
  data: {
    washrooms: { image: string }[]; // Assuming `image` is a string
    id: string;
    email: string;
    shopName: string | null;
    shopType: string | null;
    state: string | null;
    city: string | null;
    pincode: string | null;
    address: string | null;
    latitude: string | null;
    longitude: string | null;
    aadhar: string | null;
    customer_type: string | null;
    published: boolean;
  };
}
const WashroomCard = ({ data }: WashroomCardProps) => {
  console.log(data);

  return (
    <Link
      href={`services/${data.id}`}
      className="w-[400px] rounded-lg py-2 px-3 bg-brand/secondary shadow-[_5px_5px_40px_1px_rgba(255,2,102,0.1)]"
    >
      <div className="relative aspect-video">
        <Image
          src={data.washrooms[0].image ?? ""}
          alt="washroom"
          className="w-[380px] mx-auto object-contain rounded-lg"
          fill
        />
      </div>
      <div className="mt-3">
        <h1 className="truncate font-semibold">{data.shopName}</h1>
        <h2 className="text-sm text-slate-300">{data.shopType}</h2>

        <p className="text-xs mt-2 line-clamp-2">{data.address}</p>
      </div>
    </Link>
  );
};

export default WashroomCard;
