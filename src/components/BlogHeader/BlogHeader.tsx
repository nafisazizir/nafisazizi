import React from "react";
import "./style.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

interface BlogHeaderProps {
  date: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ date }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      imageSharp(fluid: { src: {}, originalName: { eq: "profile.jpeg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="blog-header">
      <div className="profile-pic">
        <Img fluid={data.imageSharp.fluid} style={{ borderRadius: "50px" }} />
      </div>
      <div className="info">
        <Link to="/about">
          <div className="label-medium">Nafis Azizi Riza</div>
        </Link>
        <div className="paragraph-small">{formattedDate}</div>
      </div>
    </div>
  );
};

export default BlogHeader;
