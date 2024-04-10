import { auth } from "../../auth";

export const getServerSession = async () => {
  const user = await auth();
  return user?.user;
};
