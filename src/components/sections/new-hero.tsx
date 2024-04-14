import { herobg2 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "../ui/button";

const Hero2 = () => {
  return (
    <div className="">
      <div className="w-screen h-screen flex justify-center relative">
        <Image
          src={herobg2}
          alt="hero-bg"
          width={1369}
          height={934}
          className="self-center aria-hidden -z-10 absolute h-[120vh] object-cover -translate-y-16"
        />
        <div className="flex justify-start w-full section-spacing">
          <div className="mt-36 md:max-w-[600px]">
            <h1 className="md:text-5xl font-bold">Find washrooms near you</h1>
            <p className="text-md mt-4">
              With our advanced AI bot{" "}
              <span className="text-brand/pink">Wroom.ai</span> we simplify the
              process of finding clean and hygienic near you, so that you can
              enjoy in public worry free
            </p>
            <div className="mt-40 ">
              <h1 className="text-xl md:text-2xl font-semibold">
                Also available on whatsapp
              </h1>
              <Link
                href="/getstarted"
                className={buttonVariants({
                  className: "flex items-center mt-2",
                })}
              >
                Get whatsapp bot <FaWhatsapp className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
