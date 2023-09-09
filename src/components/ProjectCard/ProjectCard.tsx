import React from "react";
import "./style.css";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="cover" />
      <div className="details">
        <div className="label-large">
          ACB-ISBE, Conference Proceeding App, Web & Mobile App Version
        </div>
        <div className="paragraph-medium details-wrapper">
          Built a MERN stack web application enabling 200+ users across 7
          countries to access a personalized course catalog and timetabling
          tool. Successfully scraped 14K+ courses from the university’s official
          websites, and populating database.
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
