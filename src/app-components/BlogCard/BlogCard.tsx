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
        <div className="featured-img-container">
          <Img fluid={image.childImageSharp.fluid} className="featured-img" />
        </div>
        <div className="details">
          <div className="text-xl md:text-2xl text-black-900 font-medium">
            {title}
          </div>
          <div className="text-sm md:text-md text-neutral-600 details-wrapper">
            {description}
          </div>
          <div className="text-sm text-neutral-600">{formattedDate}</div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
