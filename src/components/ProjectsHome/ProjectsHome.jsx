import React from "react";
import "./ProjectsHomeStyle.css";
import acb_ise from "../../assets/acb_isbe.png";
import sirest from "../../assets/sirest.png";
import starcraft from "../../assets/starcraft.png";
import climate_change from "../../assets/climate_change.png";
import cv from "../../content/cv.json";

const ProjectsHome = () => {
  const projects = cv.projects;
  const sizeProjects = projects.length;
  const projImg = [acb_ise, sirest, starcraft, climate_change];

  return (
    <div className="projects-home pt-16" id="projects">
      <div className="flex justify-start items-center pb-8">
        <h3 className="text-gradient">Selected Projects</h3>
      </div>

      {projects.map((project, i) => {
        return (
          <>
            <div className="flex flex-row justify-between items-center">
              <div className="projects-home-elem">
                <h5 className="text-white-primary mb-2">{project.name}</h5>
                <ul className="ml-4 text-white-primary">
                  {project.highlights.map((highlight) => {
                    return <li>{highlight}</li>;
                  })}
                </ul>
              </div>

              <img
                className="project-home-img"
                src={projImg[i]}
                alt={project.id}
              ></img>
            </div>
            {i < sizeProjects - 1 ? <div className="line-horizontal" /> : null}
          </>
        );
      })}
    </div>
  );
};

export default ProjectsHome;
