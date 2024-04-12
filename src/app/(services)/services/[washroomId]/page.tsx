"use client";

import CarouselContainer from "@/components/carousel";
import Map from "@/components/map";
import { WASHROOM_MOCK_DATA } from "@/lib/constants";
import { getCurrentLocation } from "@/utils/get-user-location";
import Image from "next/image";
import { useEffect } from "react";

import axios from "axios";

const Page = ({ params }: { params: { washroomId: string } }) => {
  const data = WASHROOM_MOCK_DATA.find((w) => w.id === params.washroomId);

  useEffect(() => {
    const init = async () => {
      // const location = await getCurrentLocation();
      // console.log(location);
    };

    init();
  });

  return (
    <div className="mt-4 section-spacing">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <section className="mt-2 bg-brand/secondary py-3 px-4 rounded-xl">
        <div>
          <div className="flex gap-3 items-baseline">
            <h1 className="font-semibold">Place: </h1>
            <span className="text-sm">{data?.place}</span>
          </div>
          <div className="flex gap-3 items-baseline">
            <h1 className="font-semibold">Address: </h1>
            <span className="text-sm">{data?.address}</span>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="w-full h-[200px] sm:h-[400px] ">
          <Map data={data!} zoom={17} />
        </div>
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-brand/pink">
            Washroom details
          </h1>
          <div className="mt-4 px-4">
            <CarouselContainer>
              {data?.images.map((img, index) => (
                <Image src={img} alt="washroom" className="px-2" key={index} />
              ))}
            </CarouselContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
