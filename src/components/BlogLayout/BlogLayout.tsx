import React, { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
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
    <div className="layout-template">
      <Navbar />
      <div className="blog-layout">{children}</div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
