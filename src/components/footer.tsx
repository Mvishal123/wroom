import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 py-6 bg-brand/secondary">
      <div className="section-spacing flex justify-between">
        <h1 className="text-2xl font-bold">
          Wroom<span className="text-brand/pink">.</span>
        </h1>
        <div>
          <div className="flex flex-col">
            <Link href="/getstarted">
              <p className="text-sm hover:text-brand/pink">Get whatsapp bot</p>
            </Link>
            <Link href="/getstarted/business">
              <p className="text-sm hover:text-brand/pink">Become a partner</p>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
