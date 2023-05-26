import Navbar from "../components/Navbar/Navbar";
import HeroTitle from "../components/Hero/HeroTitle";
import Highlight from "../components/Hero/Highlight";
import HeroButtonPrimary from "../components/Hero/HeroButtonPrimary";
import HeroButtonSecondary from "../components/Hero/HeroButtonSecondary";
import Resume from "../components/Resume/Resume";
import ProjectsHome from "../components/ProjectsHome/ProjectsHome";
import EatSleepCode from "../components/Decorations/EatSleepCode";
import Footer from "../components/Footer/Footer";
import "./HomeStyle.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroTitle />

      <div class="px-1 lg:px-48 md:px-20 sm:px-16 flex flex-wrap justify-center items-center">
        <Highlight num="2+" desc="Years of Experience in Software Engineering" />
        <Highlight num="10+" desc="Successfully Projects Completed" />
        <Highlight num="5+" desc="Awards and Achievements" />
      </div>

      <div class="pt-12 pb-20 mx-8 flex flex-wrap justify-center items-center">
        <HeroButtonPrimary text="GET IN TOUCH" />
        <HeroButtonSecondary text="VIEW ALL WORKS" />
      </div>

      {/* <EatSleepCode /> */}

      <Resume />
      <ProjectsHome />

      <Footer />
    </>
  );
};

export default Home;
