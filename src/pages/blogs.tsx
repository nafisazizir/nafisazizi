import React from "react";
import Layout from "../app-components/Layout/Layout";
import { useStaticQuery, graphql } from "gatsby";
import BlogCard from "../app-components/BlogCard/BlogCard";

const blogs = () => {
  const blogResponse = useStaticQuery(graphql`
    query BlogLists {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        nodes {
          frontmatter {
            date
            description
            title
            slug
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
    }
  `);
  const projects = blogResponse.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="w-11/12 lg:w-[800px] text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-500 text-center">
          Personal Blogs
        </div>
        <div className="w-11/12 lg:w-[700px] text-lg md:text-xl lg:text-2xl text-neutral-600 text-center">
          Talks about personal experiences, software engineering, and tech!
        </div>
      </div>

      <div className="project-highlights-container">
        {projects.map((project: any) => (
          <BlogCard
            title={project.frontmatter.title}
            description={project.frontmatter.description}
            slug={project.frontmatter.slug}
            image={project.frontmatter.featuredImage}
            date={project.frontmatter.date}
            type="blogs"
          />
        ))}
      </div>
    </Layout>
  );
};

export default blogs;
