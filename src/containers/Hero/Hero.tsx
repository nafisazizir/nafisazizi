import React, { useState } from "react";
import "./style.css";
import Typist from "react-typist";
import styled from "styled-components";
import ButtonPillLarge from "../../app-components/Button/Pill/ButtonPillLarge";
import VerticalLine from "../../assets/icons/vertical-line.svg";
import { navigate } from "gatsby";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const desc = [
    "a junior CS UI student",
    "an aspiring software engineer",
    "adventurer, explorer!",
  ];

  const onComplete = () => {
    if (index + 1 === desc.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const HeroSubtitle = styled.div`
    width: 720px;
    text-align: center;

    @media (max-width: 768px) {
      width: 90%;
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    @media (max-width: 560px) {
      gap: 18px;
    }

    @media (max-width: 380px) {
      flex-direction: column;
      gap: 8px;
    }
  `;

  const highlightItem = (quant: string, desc: string) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="display-medium">{quant}</div>
        <div
          className="label-small"
          style={{ color: "var(--typography-tertiary)" }}
        >
          {desc}
        </div>
      </div>
    );
  };

  return (
    <div className="hero">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div className="display-large" style={{ textAlign: "center" }}>
          Hello, I’m Nafis
        </div>
        <div className="hero-terminal">
          <div className="hero-terminal-text">{">>"}</div>
          <Typist
            className="hero-terminal-text"
            onTypingDone={onComplete}
            stdTypingDelay={20}
            key={index}
          >
            {desc[index]}
            <Typist.Backspace count={desc[index].length} delay={1000} />
          </Typist>
        </div>
      </div>

      <HeroSubtitle>
        <div className="paragraph-xlarge">
          Welcome to where I bring my ideas to life through coding,
          problem-solving, and a passion for technology
        </div>
      </HeroSubtitle>

      <ButtonContainer>
        <ButtonPillLarge
          text="MY RESUME (.PDF)"
          variant="primary"
          onClick={() => window.open("https://resume.nafisazizi.com/")}
        />
        <ButtonPillLarge
          text="GET IN TOUCH"
          variant="tertiary"
          onClick={() => navigate("/about")}
        />
      </ButtonContainer>

      <div className="highlights">
        {highlightItem("2+", "EXP. IN SWE")}
        <VerticalLine className="vertical-line" />
        {highlightItem("10+", "PROJECTS")}
        <VerticalLine className="vertical-line" />
        {highlightItem("5+", "AWARDS")}
      </div>
    </div>
  );
};

export default Hero;
