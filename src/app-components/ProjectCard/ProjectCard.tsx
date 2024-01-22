import React from "react";
import Img from "gatsby-image";
import { navigate } from "gatsby";
import Button from "../../component/Button/Button";
import Newspaper from "../../assets/icons/newspaper.svg";
import "./style.css";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: any;
  date: string;
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  slug,
  image,
  date,
  type,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="project-card flex flex-row items-center justify-center gap-9 cursor-pointer"
      onClick={() => navigate("/" + type + "/" + slug)}
    >
      <div className="relative image-cobaya flex w-40 h-40 md:w-60 md:h-60 justify-center items-center overflow-hidden rounded-xl md:rounded-2xl">
        <div className="image-overlay flex justify-center items-center">
          <Button
            content="Learn more"
            onClick={() => navigate("/" + type + "/" + slug)}
            type="secondary"
            icon={<Newspaper />}
          />
        </div>
        <Img
          fluid={image.childImageSharp.fluid}
          className="image w-full h-full rounded-xl md:rounded-2xl"
        />
      </div>
      <div className="content-container">
        <div className="title flex items-center top-0 bottom-0 text-start text-black-900 text-sm sm:text-xl md:text-2xl font-medium">
          {title}
        </div>
        <div className="description flex items-center top-0 bottom-0 text-neutral-600 text-start text-md">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
