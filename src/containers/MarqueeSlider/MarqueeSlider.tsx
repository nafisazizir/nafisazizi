import React from "react";
import "./style.css";
import Pizza from "../../assets/icons/pizza.svg";
import Sleep from "../../assets/icons/sleep.svg";
import Code from "../../assets/icons/code.svg";
import Repeat from "../../assets/icons/repeat.svg";
import styled, { keyframes } from "styled-components";

const Marquee = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  user-select: none;

  -webkit-mask: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  padding: 32px 0px;
  justify-content: center;
  align-items: center;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeSlider = () => {
  const itemsToRepeat = [
    {
      text: "eat",
      icon: <Pizza style={{ color: "var(--typography-light)" }} />,
    },
    {
      text: "sleep",
      icon: <Sleep style={{ color: "var(--typography-light)" }} />,
    },
    {
      text: "code",
      icon: <Code style={{ color: "var(--typography-light)" }} />,
    },
    {
      text: "repeat",
      icon: <Repeat style={{ color: "var(--typography-light)" }} />,
    },
  ];
  return (
    <Marquee className="marquee-container">
      <MarqueeGroup>
        {itemsToRepeat.map((item, index) => (
          <React.Fragment key={index}>
            <h3>{item.text}</h3>
            <div className="marquee-icon-container">{item.icon}</div>
          </React.Fragment>
        ))}
        {itemsToRepeat.map((item, index) => (
          <React.Fragment key={index}>
            <h3>{item.text}</h3>
            <div className="marquee-icon-container">{item.icon}</div>
          </React.Fragment>
        ))}
      </MarqueeGroup>
      <MarqueeGroup>
        {itemsToRepeat.map((item, index) => (
          <React.Fragment key={index}>
            <h3>{item.text}</h3>
            <div className="marquee-icon-container">{item.icon}</div>
          </React.Fragment>
        ))}
        {itemsToRepeat.map((item, index) => (
          <React.Fragment key={index}>
            <h3>{item.text}</h3>
            <div className="marquee-icon-container">{item.icon}</div>
          </React.Fragment>
        ))}{" "}
      </MarqueeGroup>
    </Marquee>
  );
};

export default MarqueeSlider;
