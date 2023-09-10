import React from "react";
import "./style.css";
import Img from "gatsby-image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  image: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  slug,
  image,
}) => {
  return (
    <>
      <div className="project-card-container">
        <Img fluid={image.childImageSharp.fluid} className="featured-img" />
        <div className="details">
          <div className="label-large">{title}</div>
          <div className="paragraph-medium details-wrapper">{description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
