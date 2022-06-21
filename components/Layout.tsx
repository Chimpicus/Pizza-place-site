import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <Navbar />
      <div className="page">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
