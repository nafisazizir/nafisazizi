import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import ProjectCard from "../../app-components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import LightBulb from "../../assets/icons/light-bulb.svg";
import Reveal from "../../components/Reveal/Reveal";
import "./style.css";

const Works = () => {
  const projectsResponse = useStaticQuery(graphql`
    query ProjectHighlights {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            slug: { in: ["uquizzle", "matkulgue", "sparc", "alzheimersnet"] }
          }
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
    <Reveal>
      <div className="flex flex-col w-full justify-center items-center gap-16">
        <div className="w-11/12 lg:w-[800px] text-3xl md:text-4xl lg:text-5xl font-semibold text-black-900 text-center">
          Turning ideas to life through innovative and impactful{" "}
          <span className="text-primary-500">projects</span>
        </div>

        <div className="works-highlights-container">
          {projects.map((project: any, index: number) => (
            <ProjectCard
              title={project.frontmatter.title}
              description={project.frontmatter.description}
              slug={project.frontmatter.slug}
              image={project.frontmatter.featuredImage}
              date={project.frontmatter.date}
              type="projects"
              key={index}
            />
          ))}
        </div>

        <Button
          content="All projects"
          size="lg"
          icon={<LightBulb />}
          onClick={() => navigate("/projects/")}
        />
      </div>
    </Reveal>
  );
};

export default Works;
