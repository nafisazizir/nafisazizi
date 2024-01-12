import React from "react";
import Layout from "../app-components/Layout/Layout";
import Hero from "../containers/Hero/Hero";
import Featured from "../containers/Featured/Featured";
import MarqueeSlider from "../containers/MarqueeSlider/MarqueeSlider";
import Works from "../containers/Works/Works";
import HeroNew from "../containers/HeroNew/HeroNew";

const Home = () => {
  return (
    <Layout>
      <HeroNew />
      {/* <Hero /> */}
      <Featured />
      <MarqueeSlider />
      <Works />
    </Layout>
  );
};

export default Home;
