import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getUserById } from "@/utils/get-user-by-id";
import { UserRole } from "@prisma/client";

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

      return token;
    },
  },
  secret: process.env.AUTH_SECRET || "123",
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
