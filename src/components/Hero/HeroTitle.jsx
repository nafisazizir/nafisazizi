import "./HeroTitleStyle.css";
import Typed from "react-typed";

const HeroTitle = () => {
  const desc = [
    "a third year CSUI student",
    "an aspiring software engineer",
    "adventurer, explorer!",
  ];

  return (
    <>
      <div className="flex flex-col place-content-center h-96" id="home">
        <div className="flex justify-center items-center">
          <p className="hero-title-gradient">Hello, I’m Nafis!</p>
        </div>

        <div className="flex justify-center items-center min-h-max">
          <Typed
            className="hero-title-white"
            strings={desc}
            typeSpeed={100}
            backSpeed={70}
            loop
          />
        </div>
      </div>
    </>
  );
};

export default HeroTitle;
