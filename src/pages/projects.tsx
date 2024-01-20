import React from "react";
import Layout from "../app-components/Layout/Layout";
import BlogCard from "../app-components/BlogCard/BlogCard";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  const projectsResponse = useStaticQuery(graphql`
    query ProjectsList {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { type: { eq: "project" } } }
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
  const projects = projectsResponse.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="w-11/12 lg:w-[800px] text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-500 text-center">
          Previous Projects
        </div>
        <div className="w-11/12 lg:w-[700px] text-lg md:text-xl lg:text-2xl text-neutral-600 text-center">
          I turned ideas to life through innovative and impactful projects!
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
            type="projects"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
