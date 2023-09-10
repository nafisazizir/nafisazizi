import React from "react";
import BlogLayout from "../components/BlogLayout/BlogLayout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const ProjectDetails = ({ data }: { data: any }) => {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  const featuredImage = data.markdownRemark.frontmatter.featuredImage;

  return (
    <BlogLayout>
      <h1>{title}</h1>

      <Img
        fluid={featuredImage.childImageSharp.fluid}
        style={{ width: "100%" }}
      />

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </BlogLayout>
  );
};

export default ProjectDetails;

export const query = graphql`
  query ProjectDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        date
        title
        tags
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
`;
