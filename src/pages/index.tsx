import React from "react";
import Layout from "../app-components/Layout/Layout";
import Featured from "../containers/Featured/Featured";
import Works from "../containers/Works/Works";
import Hero from "../containers/Hero/Hero";

const Home = () => {
  return (
    <Layout page="landing">
      <Hero />
      <Featured />
      <Works />
    </Layout>
  );
};

export default Home;
