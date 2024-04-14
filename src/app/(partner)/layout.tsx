import Header from "@/components/header";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="page-min-height">
      <Header />
      {children}
    </div>
  );
};

export default layout;
