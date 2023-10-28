import React, { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from 'react-helmet'
import "../../styles/index.css";
import "../../styles/var.css";
import "../../styles/typography.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nafis Azizi Riza</title>
      </Helmet>
      <Navbar />
      <div className="page">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
