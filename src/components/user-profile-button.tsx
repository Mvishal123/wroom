"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useClientSession } from "@/utils/get-client-session";
import { FaUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

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
