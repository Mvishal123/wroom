import { priorityphone } from "@/assets";
import { PRIORITY_TEXTS } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Priorities = () => {
  return (
    <section className="pt-20">
      <div className="bg-gradient-to-t from-brand/main via-brand/main to-transparent h-20 w-full -mt-28" />

      <div className="mt-6 section-spacing">
        <div className="text-center leading-10">
          <h1 className="text-4xl font-bold">
            Our priorities are you and your family
          </h1>
          <p>
            We will search the cleanest and finest washroom at the vicinity of
            your current location😉
          </p>
        </div>
        <div className="mt-10 flex gap-6 h-[700px]">
          <div className="max-md:hidden">
            <Image
              src={priorityphone}
              alt="phone-bg"
              className="h-[500px] xl:h-[700px]"
            />
          </div>
          <div className="w-full">
            <div className="xl:mt-6 h-full flex flex-col divide-y divide-white py-3">
              {PRIORITY_TEXTS.map((data, index) => (
                <div key={index} className="space-y-3 flex-1 py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand/pink inline-block rounded-full">
                      <FaCheck className="h-4 w-4" />
                    </div>
                    <h1 className="text-2xl font-semibold">{data.header}</h1>
                  </div>
                  <div>
                    <p>{data.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Priorities;
