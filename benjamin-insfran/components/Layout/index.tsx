import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default Layout;
