import Header from "@/components/new-header";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      < Header/>
      {children}
    </div>
  );
};

export default Layout;
