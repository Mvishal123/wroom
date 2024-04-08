import { ONBOARDING_STEPS } from "@/lib/constants";
import React from "react";

const Onboarding = () => {
  return (
    <section className="mt-20" id="get-started">
      <div className="section-spacing">
        <h1 className="font-semibold text-2xl">
          It&apos;s simple to get started
        </h1>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between w-full gap-6 md:24 xl:gap-32">
          {ONBOARDING_STEPS.map((step, index) => (
            <div
              key={index}
              className="flex-1 max-md:border-l-[2px] md:border-t-[2px] border-brand/pink max-md:px-4 py-4"
            >
              <h1 className="font-semibold text-lg">Step {step.step}</h1>
              <p className="text-normal mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
