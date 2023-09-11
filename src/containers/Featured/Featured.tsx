import React from "react";
import "./FeaturedStyle.css";
import styled from "styled-components";
import Featured1 from "../../assets/images/featured-1.jpeg";
import Featured2 from "../../assets/images/featured-2.jpeg";
import Featured3 from "../../assets/images/featured-3.jpeg";
import Featured4 from "../../assets/images/featured-4.jpeg";
import Featured5 from "../../assets/images/featured-5.jpeg";
import Featured6 from "../../assets/images/featured-6.jpeg";
import Featured7 from "../../assets/images/featured-7.jpeg";
import ButtonPillMedium from "../../components/Button/Pill/ButtonPillMedium";
import Carousel from "../../components/Carousel/Carousel";
import { navigate } from "gatsby";

const Featured = () => {
  const Title = styled.div`
    width: 650px;
    text-align: center;

    @media (max-width: 768px) {
      width: 80%;
    }
  `;

  const slides = [
    { src: Featured1, alt: "Say cheese 📸 to the jaw-dropping canyon!" },
    { src: Featured2, alt: "Catch some great waves 🤙🏻 - Lombok" },
    { src: Featured3, alt: "Conquering Ha Giang Loop on a motorbike 🏍️" },
    { src: Featured4, alt: "The famous Koh Phi Phi 🤿" },
    { src: Featured5, alt: "Stunning sunrise hike 🥾 - Krabi" },
    { src: Featured6, alt: "After lots of stairs 🏞️ - Ninh Binh" },
    { src: Featured7, alt: "Cruise trip 🛳️ - Ha Long Bay" },
  ];

  return (
    <div className="featured">
      <Title>
        <div className="display-xsmall">
          Get to know more about myself through my{" "}
          <span style={{ color: "var(--primary-default)" }}>awe-inspiring</span>{" "}
          stories
        </div>
      </Title>

      <div className="featured-card">
        <div className="info">
          <div
            className="display-small"
            style={{ color: "var(--typography-light)" }}
          >
            Creating Lifelong Memories: Bonds and Adventures of a Lifetime at
            NUS
          </div>
          <div
            className="paragraph-xlarge"
            style={{ color: "var(--typography-light)" }}
          >
            Embarking on thrilling adventures across diverse landscapes, from
            conquering mountain peaks on a motorbike to exploring pristine
            island beaches, our shared travel experiences forged unforgettable
            bonds.
          </div>
          <ButtonPillMedium
            text="Read full story"
            variant="tertiary"
            onClick={() => navigate("/blogs/nus-exchange")}
          />
        </div>
        <Carousel data={slides} />
      </div>
    </div>
  );
};

export default Featured;
