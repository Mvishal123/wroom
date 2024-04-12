import NewHeader from "@/components/new-header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <NewHeader/>
      {children}
    </div>
  );
};

export default Layout;
