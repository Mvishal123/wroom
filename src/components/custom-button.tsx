"use client";

import { signIn } from "next-auth/react";

interface CustomButtomProps {
  label: string;
}
const CustomButtom = ({ label }: CustomButtomProps) => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          redirectTo: "/",
        })
          .then((data) => {
            console.log("SUCCESS: ", data);
          })
          .catch((err) => {
            console.log("ERROR: ", err);
          })
      }
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0266_0%,#393BB2_50%,#ff0266_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {label}
      </span>
    </button>
  );
};

export default CustomButtom;
