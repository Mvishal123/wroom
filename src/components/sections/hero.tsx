import { crowd, maps } from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="section-spacing py-12 flex items-start flex-col md:flex-row">
      <div className="">
        <p className="text-3xl md:text-5xl font-bold md:leading-[3.5rem] lg:mt-4">
          In your busy <br />
          schedule never worry about <br className="hidden" /> finding clean{" "}
          <span className="text-brand/pink">washrooms</span> again
        </p>
        <div className="flex-col items-start mt-12 md:mt-24 flex">
          <p className="text-slate-300 mb-3 text-xs">
            No need for additional app on your phone, <br />
            just use your whatsapp
          </p>
          <Button>Get whatsapp bot</Button>
        </div>
      </div>
      <div className="hidden md:block relative">
        <div className="bg-brand/pink/30 blur-3xl h-[200px] top-32 absolute left-0 right-0 -z-10"></div>
        <Image
          src={crowd}
          alt="crowd"
          height={4288}
          width={2848}
          className="md:block h-[70vh] w-[500px] rounded-2xl object-cover object-bottom z-10"
        />
      </div>
      <div className="mt-24 font-semibold md:hidden relative">
        <h1 className="mb-6">
          Get instant direction to the nearest washroom at a click in your
          whatsapp
        </h1>
        <div className="p-2 bg-brand/secondary/60 backdrop-blur-md rounded-2xl">
          <div className="bg-brand/pink/40 blur-3xl absolute top-4 w-full h-10 -z-10"></div>

          <Image
            src={maps}
            alt="map"
            height={342}
            width={612}
            className="object-cover object-center rounded-2xl"
          />
          <div className="bg-gradient-to-t from-brand/main to-transparent absolute bottom-0 right-0 left-0 w-full h-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
