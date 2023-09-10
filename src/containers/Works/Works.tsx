import React from "react";
import "./style.css";
import ButtonPillLarge from "../../components/Button/Pill/ButtonPillLarge";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useStaticQuery, graphql } from "gatsby";

const Works = () => {
  const projectsResponse = useStaticQuery(graphql`
    query ProjectHighlights {
      allMarkdownRemark(
        filter: {
          frontmatter: { slug: { in: ["matkulgue", "peopl", "seanema"] } }
        }
        sort: { frontmatter: { date: DESC } }
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
    <div className="works-container">
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
          Previous Works
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

      <ButtonPillLarge
        variant="primary"
        text="See all my works"
        onClick={() => console.log("")}
      />
    </div>
  );
};

export default Works;
