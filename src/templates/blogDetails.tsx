import React from "react";
import BlogLayout from "../app-components/BlogLayout/BlogLayout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import BlogHeader from "../app-components/BlogHeader/BlogHeader";

const BlogDetails = ({ data }: { data: any }) => {
  const { html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;
  const featuredImage = data.markdownRemark.frontmatter.featuredImage;
  return (
    <BlogLayout>
      <h1>{title}</h1>
      <BlogHeader date={date} />

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

export default BlogDetails;

export const query = graphql`
  query BlogDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        date
        title
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
