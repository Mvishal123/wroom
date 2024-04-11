import Header from "@/components/header";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;
