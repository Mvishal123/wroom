import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SignedHeader = () => {
  return (
    <header className="section-spacing flex justify-between items-center py-4 bg-brand/secondary/10">
      <Link href="/" className="text-brand/pink text-2xl font-bold">
        Wroom.
      </Link>
      <nav className="">
        <Avatar>
          <AvatarFallback>
            <FaUser />
          </AvatarFallback>
          <AvatarImage />
        </Avatar>
      </nav>
    </header>
  );
};

export default SignedHeader;
