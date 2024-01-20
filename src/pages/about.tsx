import React from "react";
import BlogLayout from "../app-components/BlogLayout/BlogLayout";
import { graphql, useStaticQuery } from "gatsby";
import "./AboutStyle.css";
import Img from "gatsby-image";

const about = () => {
  const data = useStaticQuery(graphql`
    query About {
      markdownRemark(frontmatter: { slug: { eq: "about" } }) {
        html
        frontmatter {
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const { html } = data.markdownRemark;
  return (
    <BlogLayout>
      <div className="about-profile-title">
        <div className="about-profile-pic">
          <Img
            fluid={
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .fluid
            }
            style={{ borderRadius: "100px" }}
          />
        </div>
        <h1>Nafis Azizi Riza</h1>
      </div>

      <div className="subtitle">
        Crafted, designed, and coded with passion by Nafis Azizi Riza,
        completing Computer Science undergraduate at The University of
        Queensland & University of Indonesia | Outdoor Enthusiast, Adventurer,
        Explorer 🥾🏄🏻‍♂️.
      </div>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </BlogLayout>
  );
};

export default about;
