import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  userRole: UserRole;
  userId: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
