import React from "react";
import "./style.css";
import ButtonPillLarge from "../../components/Button/Pill/ButtonPillLarge";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Works = () => {
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

      <ProjectCard />

      <ButtonPillLarge
        variant="primary"
        text="See all my works"
        onClick={() => console.log("")}
      />
    </div>
  );
};

export default Works;
