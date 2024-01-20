import React, { useState } from "react";
import "./FeaturedStyle.css";
import Button from "../../component/Button/Button";
import { graphql, navigate, useStaticQuery } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import Newspaper from "../../assets/icons/newspaper.svg";
import Reveal from "../../component/Reveal/Reveal";

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
                "featured-8.jpeg"
                "featured-9.jpeg"
                "featured-10.jpeg"
                "featured-11.jpeg"
                "featured-12.jpeg"
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
    "Scenic view while motorbiking across the Ha Giang Loop",
    "Catch some great waves at Lombok, Indonesia",
    "Koh Phi Phi 🤿 Pristine beaches with clear turqoise water!",
    "Stunning sunrise hike 🥾 and definitely, rock climbing 🧗🏻 - Krabi",
    "After lots of stairs 🏞️ - Ninh Binh",
    "Cruise trip 🛳️ seeing ranges incredibly limestones - Ha Long Bay",
  ];

  const imagesMap = featuredImages.allImageSharp.edges.reduce(
    (
      result: Record<number, FluidObject>,
      { node }: { node: ImageQuery["allImageSharp"]["edges"][0]["node"] }
    ) => {
      const pathSegments = node.fluid.src.split("/");
      const imagePath = pathSegments[pathSegments.length - 1];
      const match = imagePath.match(/\d+/);
      const numberPart = match ? parseInt(match[0], 10) : 0;

      result[numberPart - 1] = node.fluid;
      return result;
    },
    {}
  );

  const slides = imagesAlt.map((alt, index) => ({
    image1: imagesMap[index * 2],
    image2: imagesMap[index * 2 + 1],
    alt,
  }));

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <Reveal>
      <div className="featured">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="w-11/12 lg:w-[800px] text-3xl md:text-4xl lg:text-5xl font-semibold text-black-900 text-center">
            Get to know more about myself through my{" "}
            <span className="text-primary-500">awe-inspiring</span> stories
          </div>
          <div className="w-11/12 lg:w-[700px] text-lg md:text-xl lg:text-2xl text-neutral-600 text-center">
            Bonds and Adventures of a Lifetime at NUS - our shared travel
            experiences forged unforgettable bonds.
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-12">
          <div className="flex flex-row self-stretch justify-between items-center gap-18">
            <Button
              icon={<ArrowLeft />}
              type="secondary"
              size="sm"
              onClick={prevSlide}
              className="hidden md:flex"
            />

            {slides.map((item: any, index: any) => {
              return (
                <div
                  className={
                    index === slide ? "flex flex-col w-full gap-10" : "hidden"
                  }
                >
                  <div className="flex md:hidden flex-col items-center justify-center gap-4">
                    <div className="text-2xl font-medium text-center text-black-900">
                      {item.alt}
                    </div>
                    <Button
                      content="Read full story"
                      size="sm"
                      icon={<Newspaper />}
                      onClick={() => navigate("/blogs/nus-exchange/")}
                    />
                  </div>

                  <div className="featured-card w-full">
                    <div className="hidden md:flex flex-col gap-10 justify-center items-start">
                      <div className="text-3xl md:text-xl lg:text-3xl font-medium text-black-900">
                        {item.alt}
                      </div>
                      <Button
                        content="Read full story"
                        size="sm"
                        icon={<Newspaper />}
                        onClick={() => navigate("/blogs/nus-exchange/")}
                        className="lg:hidden"
                      />
                      <Button
                        content="Read full story"
                        size="md"
                        icon={<Newspaper />}
                        onClick={() => navigate("/blogs/nus-exchange/")}
                        className="hidden lg:flex"
                      />
                    </div>
                    <div className="image-container rounded-2xl">
                      <Img
                        fluid={item.image1}
                        alt={item.alt}
                        key={0}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                    <div className="image-container rounded-2xl">
                      <Img
                        fluid={item.image2}
                        alt={item.alt}
                        key={1}
                        className="w-full h-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            <Button
              icon={<ArrowRight />}
              type="secondary"
              size="sm"
              onClick={nextSlide}
              className="hidden md:flex"
            />
          </div>

          <div className="flex flex-row gap-10 items-center justify-center">
            <Button
              icon={<ArrowLeft />}
              type="secondary"
              size="xs"
              onClick={prevSlide}
              className="flex md:hidden"
            />
            <div className="flex flex-row gap-3 items-center justify-center">
              {slides.map((item: any, index: any) => {
                return (
                  <div
                    className={
                      index == slide
                        ? "w-16 h-4 rounded-full bg-primary-500"
                        : "w-4 h-4 rounded-full bg-neutral-300"
                    }
                  />
                );
              })}
            </div>
            <Button
              icon={<ArrowRight />}
              type="secondary"
              size="xs"
              onClick={nextSlide}
              className="flex md:hidden"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Featured;
