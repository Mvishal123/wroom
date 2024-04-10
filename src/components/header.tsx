import { NAV_LINKS } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
import CustomButtom from "./custom-button";

const Header = async () => {
  return (
    <header className="section-spacing flex justify-between items-center py-4 bg-brand/secondary/10">
      <Link href="/" className="text-brand/pink text-2xl font-bold">
        Wroom.
      </Link>
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
        <CustomButtom
          label="Sign up"
        />
      </nav>
    </header>
  );
};

export default Header;
