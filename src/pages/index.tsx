import React from "react";
import Layout from "../app-components/Layout/Layout";
import Featured from "../containers/Featured/Featured";
import MarqueeSlider from "../containers/MarqueeSlider/MarqueeSlider";
import Works from "../containers/Works/Works";
import Hero from "../containers/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
      {/* <MarqueeSlider /> */}
      <Works />
    </Layout>
  );
};

export default Home;
