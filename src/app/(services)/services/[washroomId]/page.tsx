"use client";

import { useEffect, useState } from "react";

import CarouselContainer from "@/components/carousel";
import { getPartnerById } from "@/utils/server-actions/get-partner-by-id";
import { getWashroomByPartnerId } from "@/utils/server-actions/get-washroom-by-partner-id";
import { Partner } from "@prisma/client";
import Image from "next/image";
import Map from "@/components/map";

const Page = ({ params }: { params: { washroomId: string } }) => {
  const [washroomData, setWashroomData] = useState<Partner | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      const partner = await getPartnerById(params.washroomId);

      const washroomImages = await getWashroomByPartnerId(params.washroomId);
      const wimages = washroomImages.map((img) => img.image);
      setWashroomData(partner);
      setImages(wimages);
      setLoading(false);
    };

    init();
  });

  console.log(washroomData?.longitude);
  

  return (
    <div className="mt-4 section-spacing">
      <h1 className="text-2xl font-bold">{}</h1>
      <section className="mt-2 bg-brand/secondary py-3 px-4 rounded-xl">
        <div>
          <div className="flex gap-3 items-baseline">
            <h1 className="font-semibold">Place: {washroomData?.shopName}</h1>
            <span className="text-sm">{washroomData?.shopType}</span>
          </div>
          <div className="flex gap-3 items-baseline">
            <h1 className="font-semibold">Address: </h1>
            <span className="text-sm">{washroomData?.address}</span>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="w-full h-[200px] sm:h-[400px] ">
          <Map
            data={{
              lat: parseInt(washroomData?.latitude!),
              lng: parseInt(washroomData?.longitude!),
            }}
            zoom={17}
          />
        </div>
        <div className="mt-12">
          <h1 className="text-2xl font-bold text-brand/pink">
            Washroom details
          </h1>
          <div className="mt-4 px-4">
            <CarouselContainer settings={{ infinite: true, slidesToScroll: 1 }}>
              {images.map((img, index) => (
                <div className="aspect-video relative" key={index}>
                  <Image
                    src={img}
                    alt="washroom"
                    className="px-2 object-fit "
                    fill
                  />
                </div>
              ))}
            </CarouselContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
