import React from "react";
import "./style.css";
import Img from "gatsby-image";
import { navigate } from "gatsby";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  image: any;
  date: string;
  type: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
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
    <>
      <div
        className="blog-card-container"
        onClick={() => navigate("/" + type + "/" + slug)}
      >
        <Img fluid={image.childImageSharp.fluid} className="featured-img" />
        <div className="details">
          <div className="label-large">{title}</div>
          <div className="paragraph-medium details-wrapper">{description}</div>
          <div className="paragraph-small">{formattedDate}</div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;