import Header from "@/components/header";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-min-height">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
