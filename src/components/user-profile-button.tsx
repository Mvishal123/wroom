"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useClientSession } from "@/utils/server-actions/get-client-session";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

const UserProfileButton = () => {
  const session = useClientSession();

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={session?.image ?? ""} />
            <AvatarFallback>
              <FaUser />
            </AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="max-w-[150px] bg-brand/secondary"
        >
          <Link
            href="/getstarted"
            className={buttonVariants({
              className: "hidden max-md:flex items-center w-full mb-4",
            })}
          >
            Get bot <FaWhatsapp className="h-5 w-5 ml-2" />
          </Link>
          <Button
            className="w-full"
            onClick={() => {
              signOut().then(() => {
                console.log("SUCCESS: LOG OUT");
              });
            }}
          >
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserProfileButton;
