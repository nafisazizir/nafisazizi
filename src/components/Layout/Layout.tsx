import React, { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import "../../styles/index.css";
import "../../styles/var.css";
import "../../styles/typography.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
