import React from "react";
import "./style.css";
import Typed from "react-typed";
import styled from "styled-components";
import ButtonPillLarge from "../../components/Button/Pill/ButtonPillLarge";
import VerticalLine from "../../assets/icons/vertical-line.svg";

const Hero = () => {
  const desc = [
    "a junior CS UI student",
    "an aspiring software engineer",
    "adventurer, explorer!",
  ];

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
          <Typed
            className="hero-terminal-text"
            strings={desc}
            typeSpeed={80}
            backSpeed={70}
            loop
          />
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
          onClick={() => {
            console.log("");
          }}
        />
        <ButtonPillLarge
          text="GET IN TOUCH"
          variant="tertiary"
          onClick={() => {
            console.log("");
          }}
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
