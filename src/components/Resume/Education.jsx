import React from "react";
import Collapsible from "react-collapsible";
import "./EducationStyle.css";

const Education = () => {
  const ui = (
    <>
      <div className="flex">
        <h5 className="text-white-primary hover-resume">UNIVERSITY OF INDONESIA</h5>
      </div>
      <div className="flex flex-wrap justify-between">
        <p className="resume-sub">Computer Science, Bachelor Degree</p>
        <p className="resume-year">Aug 2021 - Jun 2025</p>
      </div>
    </>
  );

  const nus = (
    <>
      <div className="flex">
        <h5 className="text-white-primary hover-resume">
          NATIONAL UNIVERSITY OF SINGAPORE
        </h5>
      </div>
      <div className="flex flex-wrap justify-between">
        <p className="resume-sub">Computer Science, Exchange Semester</p>
        <p className="resume-year">Jan 2023 - May 2023</p>
      </div>
    </>
  );

  return (
    <>
      <div className="flex justify-start items-center pt-16 pb-8">
        <h3 className="text-gradient">Education</h3>
      </div>

      <Collapsible trigger={ui} transitionTime={300} easing="ease-in-out">
        <ul className="ml-4 text-white-primary">
          <li>
            <p>Bachelor of Computer Science / Sarjana Ilmu Komputer (S.Kom)</p>
          </li>
          <li>
            <p>
              Relevant Coursework: Data Structure & Algorithm, Platform Based
              Development, Database, Operating System, Computer Organization
            </p>
          </li>
        </ul>
      </Collapsible>

      <div className="line-horizontal" />

      <Collapsible trigger={nus} transitionTime={300} easing="ease-in-out">
        <ul className="ml-4 text-white-primary">
          <li>
            <p>Exchange students under ASEAN University Network Program</p>
          </li>
          <li>
            <p>
              Coursework: Design and Analysis of Algorithm, Interaction Design,
              Computer Network, Software Engineering & OOP, Programming
              Methodology II
            </p>
          </li>
        </ul>
      </Collapsible>
    </>
  );
};

export default Education;
