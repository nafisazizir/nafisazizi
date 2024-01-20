import React from "react";
import "./FeaturedStyle.css";
import styled from "styled-components";
import ButtonPillMedium from "../../app-components/Button/Pill/ButtonPillMedium";
import Carousel from "../../app-components/Carousel/Carousel";
import { graphql, navigate, useStaticQuery } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

interface ImageQuery {
  allImageSharp: {
    edges: {
      node: {
        id: string;
        fluid: FluidObject;
      };
    }[];
  };
}

const Featured = () => {
  const Title = styled.div`
    width: 650px;
    text-align: center;

    @media (max-width: 768px) {
      width: 80%;
    }
  `;
  const featuredImages: ImageQuery = useStaticQuery(graphql`
    query FeaturedImages {
      allImageSharp(
        filter: {
          fluid: {
            originalName: {
              in: [
                "featured-1.jpeg"
                "featured-2.jpeg"
                "featured-3.jpeg"
                "featured-4.jpeg"
                "featured-5.jpeg"
                "featured-6.jpeg"
                "featured-7.jpeg"
              ]
            }
          }
        }
      ) {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const imagesAlt = [
    "Say cheese 📸 to the jaw-dropping canyon!",
    "Catch some great waves 🤙🏻 - Lombok",
    "Conquering Ha Giang Loop on a motorbike 🏍️",
    "The famous Koh Phi Phi 🤿",
    "Stunning sunrise hike 🥾 - Krabi",
    "After lots of stairs 🏞️ - Ninh Binh",
    "Cruise trip 🛳️ - Ha Long Bay",
  ];

  const slides = featuredImages.allImageSharp.edges.map(
    (
      { node }: { node: ImageQuery["allImageSharp"]["edges"][0]["node"] },
      index: number
    ) => ({
      src: node.fluid,
      alt: imagesAlt[index],
    })
  );

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
