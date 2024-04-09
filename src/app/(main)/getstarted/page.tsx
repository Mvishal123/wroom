import { phone } from "@/assets";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className="">
      <div className="mt-6 section-spacing text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Introducing Botsapp</h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1">
          Access Wroom directly through whatsapp in your phone
        </p>
      </div>
      <div className="h-[75vh] md:h-[90vh]">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className="flex justify-center" key={index}>
              <Image
                src={phone}
                alt="phone"
                width={500}
                height={500}
                className={`absolute ${
                  index === 0
                    ? "-rotate-[30deg] -translate-y-4 max-sm:hidden"
                    : index === 2
                    ? "rotate-[30deg] -translate-y-4 max-sm:hidden"
                    : ""
                } origin-bottom ${index === 1 ? "z-10" : "z-0"} `}
              />
            </div>
          ))}
      </div>
      <div className="absolute h-40 bg-brand/pink/20 blur-3xl top-28  w-full -z-10 aria-hidden" />

      <div className="section-spacing">
        <h1 className="text-2xl font-bold">Lorem ipsum</h1>
      </div>
    </section>
  );
};

export default Page;
