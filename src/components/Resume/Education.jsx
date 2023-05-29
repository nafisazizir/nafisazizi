import React from "react";
import Collapsible from "react-collapsible";
import "./EducationStyle.css";
import cv from "../../content/cv.json";

const Education = () => {
  const edus = cv.education;
  const sizeEdus = edus.length;

  return (
    <>
      <div className="flex justify-start items-center pt-16 pb-8">
        <h3 className="text-gradient">Education</h3>
      </div>

      {edus.map((edu, i) => {
        const triggerTitle = (
          <>
            <div className="flex">
              <h5 className="text-white-primary hover-resume">
                {edu.institution.toUpperCase()}
              </h5>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="resume-sub">{edu.degree}</p>
              <p className="resume-year">
                {edu.startDate} - {edu.endDate}
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
                {edu.highlights.map((highlight) => {
                  return (
                    <>
                      <li>{highlight}</li>
                    </>
                  );
                })}
              </ul>
            </Collapsible>
            {i < sizeEdus - 1 ? <div className="line-horizontal" /> : null}
          </>
        );
      })}
    </>
  );
};

export default Education;
