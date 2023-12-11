import React, { useState } from "react";
import "./CarouselStyle.css";
import ButtonCircleXSmall from "../Button/Circle/ButtonCircleXSmall";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import Img from "gatsby-image";

interface CarouselProps {
  data: any;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      <div className="slide-container">
        {data.map((item: any, index: any) => {
          return (
            <Img
              fluid={item.src}
              alt={item.alt}
              key={index}
              className={slide === index ? "slide" : "slide-hidden"}
            />
          );
        })}
      </div>
      <ButtonCircleXSmall
        children={
          <ArrowLeft
            style={{
              width: "16px",
              height: "16px",
              color: "var(--typography-primary)",
            }}
          />
        }
        onClick={prevSlide}
        className="carousel-arrow-left"
      />
      <ButtonCircleXSmall
        children={
          <ArrowRight
            style={{
              width: "16px",
              height: "16px",
              color: "var(--typography-primary)",
            }}
          />
        }
        onClick={nextSlide}
        className="carousel-arrow-right"
      />

      <div className="badge" style={{ position: "absolute", top: "16px" }}>
        <div
          className="label-small"
          style={{ color: "var(--typography-info)" }}
        >
          {data[slide].alt}
        </div>
      </div>

      <span className="indicators">
        {data.map((_: any, index: any) => {
          return (
            <div
              key={index}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(index)}
            ></div>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
