import SignedHeader from "@/components/signed-header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SignedHeader />
      {children}
    </div>
  );
};

export default Layout;
