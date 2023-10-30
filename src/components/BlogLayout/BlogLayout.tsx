import React, { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "../../styles/index.css";
import "../../styles/var.css";
import "../../styles/typography.css";
import "./style.css";
import "../../styles/blog.css";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nafis Azizi Riza</title>
      </Helmet>
      <Navbar />
      <div className="blog-layout">{children}</div>
      <Footer />
    </>
  );
};

export default BlogLayout;
