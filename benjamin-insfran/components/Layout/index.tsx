import { ReactNode } from "react";
import Header from "../Header";

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
