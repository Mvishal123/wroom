import { useSession } from "next-auth/react";

export const useClientSession = () => {
  const session = useSession();

  return session?.data?.user;
};
