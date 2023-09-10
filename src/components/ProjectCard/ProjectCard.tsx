import React from "react";
import "./style.css";
import Img from "gatsby-image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: any;
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  slug,
  image,
  date,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="project-card-container">
        <Img fluid={image.childImageSharp.fluid} className="featured-img" />
        <div className="details">
          <div className="label-large">{title}</div>
          <div className="paragraph-medium details-wrapper">{description}</div>
        </div>
        <div className="paragraph-small">{formattedDate}</div>
      </div>
    </>
  );
};

export default ProjectCard;
