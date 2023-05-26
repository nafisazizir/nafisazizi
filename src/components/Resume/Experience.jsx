import React from "react";
import Collapsible from "react-collapsible";
import "./ExperienceStyle.css";

const Experience = () => {
  const ta = (
    <>
      <div class="flex">
        <h5 class="text-white-primary hover-resume">UNIVERSITY OF INDONESIA</h5>
      </div>
      <div class="flex flex-wrap justify-between">
        <p class="resume-sub">
          Teaching Assistant Foundations of Programming 1
        </p>
        <p class="resume-year">Aug 2022 - Jan 2023</p>
      </div>
    </>
  );

  return (
    <>
      <div class="flex justify-start items-center pt-16 pb-8">
        <h3>Experience</h3>
      </div>

      <Collapsible trigger={ta} transitionTime={300} easing="ease-in-out">
        <ul class="ml-4 text-white-primary">
          <li>
            <p>
              Tutoring 8-9 students in introduction to programming in Python
            </p>
          </li>
          <li>
            <p>Create and assessed labs and programming assignments</p>
          </li>
          <li>
            <p>Conduct weekly lab meetings with approximately 30 students</p>
          </li>
        </ul>
      </Collapsible>
    </>
  );
};

export default Experience;
