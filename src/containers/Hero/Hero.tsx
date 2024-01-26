import React, { useState } from "react";
import "./style.css";
import Typist from "react-typist";
import Reveal from "../../components/Reveal/Reveal";
import Button from "../../components/Button/Button";
import ArrowDownTray from "../../assets/icons/arrow-down-tray.svg";
import HandRaised from "../../assets/icons/hand-raised.svg";
import { navigate } from "gatsby";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const desc = [
    "A penultimate CS UQ student",
    "An aspiring software engineer 🧑🏻‍💻",
    "Adventurer, explorer!",
  ];

  const onComplete = () => {
    if (index + 1 === desc.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <Reveal width="100%">
      <div className="hero-new w-full flex flex-col items-center justify-evenly sm:justify-center sm:gap-16">
        <div className="flex flex-col w-full h-1/3 items-center justify-center text-4xl sm:text-5xl lg:text-6xl text-center font-semibold text-black-900">
          <div className="w-9/12 sm:w-full">
            Hey, it’s <span className="text-primary-500">Nafis Azizi</span>{" "}
            here!
          </div>
          <Typist
            className="w-11/12 sm:w-10/12 lg:w-7/12 h-full"
            onTypingDone={onComplete}
            stdTypingDelay={20}
            key={index}
          >
            {desc[index]}
            <Typist.Backspace count={desc[index].length} delay={2500} />
          </Typist>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <div className="w-11/12 md:w-[720px] text-center text-lg md:text-2xl text-neutral-600 font-normal">
            Welcome to where I bring my ideas to life through{" "}
            <span className="font-mono text-md md:text-xl p-3 bg-neutral-100 rounded-md border border-black-alpha-10">
              {"<coding/>"}
            </span>
            , problem-solving, and a passion for technology
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Button
              content="My Resume"
              size="xl"
              type="primary"
              icon={<ArrowDownTray />}
              onClick={() => window.open("https://resume.nafisazizi.com/")}
              className="hidden sm:flex"
            />
            <Button
              content="About Me"
              size="xl"
              type="secondary"
              icon={<HandRaised />}
              onClick={() => navigate("/about")}
              className="hidden sm:flex"
            />
            <Button
              content="My Resume"
              size="md"
              type="primary"
              icon={<ArrowDownTray />}
              onClick={() => window.open("https://resume.nafisazizi.com/")}
              className="flex sm:hidden"
            />
            <Button
              content="About Me"
              size="md"
              type="secondary"
              icon={<HandRaised />}
              onClick={() => navigate("/about")}
              className="flex sm:hidden"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Hero;
