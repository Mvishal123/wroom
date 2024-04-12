import { NAV_LINKS } from "@/lib/constants";
import { getServerSession } from "@/utils/get-server-session";
import clsx from "clsx";
import Link from "next/link";
import CustomButtom from "./custom-button";
import UserProfileButton from "./user-profile-button";
import { Button, buttonVariants } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

const Header = async () => {
  const session = await getServerSession();
  return (
    <header className="absolute z-10 section-spacing w-full top-6">
      <div className="z-10 bg-brand/secondary flex justify-between items-center py-2 px-6 rounded-full">
        <Link href="/" className="text-brand/pink text-2xl font-bold">
          Wroom<span className="text-white">.</span>
        </Link>
        {session ? (
          <div className="flex items-center gap-6">
            <Link
              href="/getstarted"
              className={buttonVariants({
                size: "sm",
                className: "md:flex hidden items-center",
              })}
            >
              Get bot <FaWhatsapp className="h-5 w-5 ml-2" />
            </Link>
            <UserProfileButton />
          </div>
        ) : (
          <nav className="flex items-center gap-12">
            <div className="hidden sm:block">
              {NAV_LINKS.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.label}
                    className={clsx(
                      "text-sm text-slate-400 px-4 hover:text-brand/pink/75"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <CustomButtom label="Sign up" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
