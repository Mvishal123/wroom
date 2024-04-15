import { phone, qrcode } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  WHATSAPP_USER_PAGE_DETAILS,
  WHATSAPP_USER_PAGE_QRCODE,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <section className="relative">
        <div className="mt-2 section-spacing text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Introducing Botsapp
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1">
            Access Wroom directly through whatsapp in your phone
          </p>
        </div>
        <div className="h-[78vh] md:h-[90vh]">
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
          <Link href="#qrcode" className="flex justify-center mt-[480px]">
            <Button>
              Get whatsappbot <FaWhatsapp className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="absolute h-40 bg-brand/pink/20 blur-3xl top-28  w-full -z-10 aria-hidden" />
      </section>

      <section className="section-spacing">
        <div>
          <h1 className="text-2xl font-bold text-center">Lorem ipsum lorem</h1>
          {/* <p className="text-sm text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
            optio, earum quam porro labore voluptatum repellat corrupti
            laboriosam
          </p> */}
        </div>
        <div className="w-full mt-8 flex flex-col md:flex-row gap-4">
          {WHATSAPP_USER_PAGE_DETAILS.map((data) => (
            <div
              className="min-h-[150px] rounded-xl border border-brand/pink/30 bg-brand/secondary p-4 relative "
              key={data.header}
            >
              <h1 className="text-xl font-bold mb-2">{data.header}</h1>
              <p className="text-sm text-slate-300">{data.text}</p>
              <div className="h-[140px] flex-1  bg-brand/pink/70  rounded-t-xl rounded-b-[100px] p-1 absolute top-0 right-0 left-0 blur-[10px]  -z-10" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing py-16" id="qrcode">
        <h1 className="text-2xl font-bold text-center">How to use</h1>
        <div className="mt-4">
          <div className="flex sm:flex-row flex-col">
            <div className="space-y-2 flex-1">
              {WHATSAPP_USER_PAGE_QRCODE.map((data) => (
                <p key={data.step} className="max-sm:text-sm">
                  {data.step}. {data.text}
                </p>
              ))}
            </div>
            <div className="flex-1 flex sm:justify-end">
              <div className="h-52 w-52 bg-white rounded-sm p-1 max-sm:mt-4">
                <Image
                  src={qrcode}
                  alt="qrcode"
                  height={675}
                  width={675}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
