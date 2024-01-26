import React, { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "../../styles/index.css";
import "../../styles/var.css";
import "../../styles/typography.css";
import "./style.css";

interface LayoutProps {
  children: ReactNode;
  page?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, page = "" }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nafis Azizi Riza</title>
      </Helmet>
      <Navbar />
      <div className={"page " + page}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
