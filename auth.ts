import { db } from "@/lib/db";
import { getUserById } from "@/utils/server-actions/get-user-by-id";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ account, user }) {
      return true;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.userId = token.sub;
      }

      if (token.userRole) {
        session.user.userRole = token.userRole as UserRole;
      }

      if (token.onboarded) {
        session.user.onboarded = token.onboarded as boolean;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }

      const user = await getUserById(token.sub);
      if (!user) {
        return token;
      }

      token.userId = user.id;
      token.userRole = user.role;
      token.onboarded = user.onboarded;

      return token;
    },
  },
  secret: process.env.AUTH_SECRET || "123",
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
