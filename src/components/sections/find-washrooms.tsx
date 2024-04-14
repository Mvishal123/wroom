import { decorative2 } from "@/assets";
import { ONBOARDING_STEPS } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { date } from "zod";

const  FindWashrooms = () => {
  return (
    <section className="section-spacing md:py-16 w-full" id="get-started">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Find washrooms near you
        </h1>
        <p className="max-sm:text-xs">
          With our advanced curated AI called Genius, we are here to simplify
          your entire process of learning. Genius takes care of everything to
          ensure you receive effortless guidance in your journey of seeking
          knowledge.
        </p>
      </div>
      <div className="md:mt-6 relative w-full h-[700px] aspect-video">
        <Image
          src={decorative2}
          alt="decorative"
          className="max-md:hidden aria-hidden w-full h-full absolute top-0"
          fill
        />
        <div className="py-6 xl:max-w-[48%] mx-auto">
          <h1 className="text-normal sm:text-xl md:text-4xl font-bold text-center w-full mt-12">
            It's so very simple to get started on{" "}
            <span className="text-brand/pink">whatsapp</span>
          </h1>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-center px-16 md:items-center md:h-[400px]">
          {ONBOARDING_STEPS.map((data) => (
            <div
              key={data.step}
              className="flex items-center bg-gray-200/20 rounded-lg p-6"
            >
              <div className="bg-brand/pink rounded-full p-3 md:p-6 h-10 w-10 flex justify-center items-center mr-4">
                <div className="">{data.step}</div>
              </div>
              <div>{data.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindWashrooms;
