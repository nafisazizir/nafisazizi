import React from "react";
import Layout from "../components/Layout/Layout";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { useStaticQuery, graphql } from "gatsby";

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
          Blogs
        </div>
        <div className="paragraph-xlarge">
          Get to know more about myself through my awe-inspiring stories
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
            type="blogs"
          />
        ))}
      </div>
    </Layout>
  );
};

export default blogs;
