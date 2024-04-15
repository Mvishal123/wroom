import Header from "@/components/new-header";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="mt-28">{children}</div>
    </div>
  );
};

export default Layout;
