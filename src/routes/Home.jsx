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
      <HeroTitle />

      <div className="px-1 lg:px-48 md:px-20 sm:px-16 flex flex-wrap justify-center items-center">
        <Highlight
          num="2+"
          desc="Years of Experience in Software Engineering"
        />
        <Highlight num="10+" desc="Successfully Projects Completed" />
        <Highlight num="5+" desc="Awards and Achievements" />
      </div>

      <div className="pt-12 pb-20 mx-8 flex flex-wrap justify-center items-center">
        <HeroButtonPrimary to="https://resume.nafisazizi.com/" text="MY RESUME (.PDF)" />
        <HeroButtonSecondary to="/about" text="GET IN TOUCH" />
      </div>

      {/* <EatSleepCode /> */}

      <Resume />
      <ProjectsHome />

      <Footer />
    </>
  );
};

export default Home;
