import React from "react";
import Collapsible from "react-collapsible";
import "./ExperienceStyle.css";
import cv from "../../content/cv.json";

const Experience = () => {
  const experiences = cv.experiences;
  const sizeExps = experiences.length;

  return (
    <>
      <div className="flex justify-start items-center pt-16 pb-8">
        <h3 className="text-gradient">Experiences</h3>
      </div>

      {experiences.map((exp, i) => {
        const triggerTitle = (
          <>
            <div className="flex">
              <h5 className="text-white-primary hover-resume">
                {exp.organization.toUpperCase()}
              </h5>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="resume-sub">{exp.title}</p>
              <p className="resume-year">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
          </>
        );
        return (
          <>
            <Collapsible
              trigger={triggerTitle}
              transitionTime={300}
              easing="ease-in-out"
            >
              <ul className="ml-4 text-white-primary">
                {exp.highlights.map((highlight) => {
                  return (
                    <>
                      <li>{highlight}</li>
                    </>
                  );
                })}
              </ul>
            </Collapsible>
            {i < sizeExps - 1 ? <div className="line-horizontal" /> : null}
          </>
        );
      })}
    </>
  );
};

export default Experience;
