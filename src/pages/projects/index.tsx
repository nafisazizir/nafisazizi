import React from "react";
import Layout from "../../components/Layout/Layout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <div
          className="display-medium"
          style={{ color: "var(--primary-default)" }}
        >
          Previous Projects
        </div>
        <div className="paragraph-xlarge">
          learn more about my innovative and impactful projects
        </div>
      </div>

      <div className="project-highlights-container">
        {projects.map((project: any) => (
          <ProjectCard
            title={project.frontmatter.title}
            description={project.frontmatter.description}
            slug={project.frontmatter.slug}
            image={project.frontmatter.featuredImage}
            date={project.frontmatter.date}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
