import React, { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/index.css";
import "../../styles/var.css";
import "../../styles/typography.css";
import "./style.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-template">
      <Navbar />
      <div className="page">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
