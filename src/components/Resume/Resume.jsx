import React from "react";
import Education from "./Education";
import "./ResumeStyle.css";
import Experience from "./Experience";
import Activities from "./Activities";

const Resume = () => {
  return (
    <div class="resume">
      <div class="resume-container">
        <Education />
        <Experience />
        <Activities />
      </div>
    </div>
  );
};

export default Resume;
