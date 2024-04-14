import { landinghome } from "@/assets";
import Image from "next/image";
import React from "react";

const FinalSection = () => {
  return (
    <section className="section-spacing">
      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="order-2 md:order-1 flex-1">
          <Image src={landinghome} alt="home" height={500} width={500} />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h1 className="text-4xl font-bold">
            Say no to hesitating for using washrooms while in public
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
