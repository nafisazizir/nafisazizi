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
      <div className="flex flex-col place-content-center h-96">
        <div class="flex justify-center items-center">
          <p class="hero-title-gradient">Hello, I’m Nafis!</p>
        </div>

        <div class="flex justify-center items-center min-h-max">
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
