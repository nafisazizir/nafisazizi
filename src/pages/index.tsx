import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../containers/Hero/Hero";
import Featured from "../containers/Featured/Featured";
import MarqueeSlider from "../containers/MarqueeSlider/MarqueeSlider";
import Works from "../containers/Works/Works";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Featured />
      <MarqueeSlider />
      <Works />
    </Layout>
  );
};

export default Home;
