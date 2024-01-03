import React, { ReactNode } from "react";
import Layout from "../app-components/Layout/Layout";
import "../styles/index.css";
import "../styles/var.css";
import "../styles/typography.css";

const NotFound = () => {
  return (
    <Layout>
      <div
        style={{
          minHeight: "calc(100vh - 64.5px - 207.5px - 72px - 72px)",
        }}
      >
        <div className="display-large" style={{ textAlign: "center" }}>
          404
        </div>
        <div className="label-xlarge" style={{ textAlign: "center" }}>
          It looks like you're lost...
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
