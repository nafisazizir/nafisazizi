import React from "react";
import Collapsible from "react-collapsible";
import "./ActivitiesStyle.css";

const Activities = () => {
  const aiesec = (
    <>
      <div class="flex">
        <h5 class="text-white-primary hover-resume">
          AIESEC IN UNIVERSITY OF INDONESIA
        </h5>
      </div>
      <div class="flex flex-wrap justify-between">
        <p class="resume-sub">Project Dev Intern, Business Dev Dept.</p>
        <p class="resume-year">Oct 2022 - Dec 2022</p>
      </div>
    </>
  );

  const bem = (
    <>
      <div class="flex">
        <h5 class="text-white-primary hover-resume">
          BEM (STUDENT UNION) FASILKOM UI
        </h5>
      </div>
      <div class="flex flex-wrap justify-between">
        <p class="resume-sub">Public Relation</p>
        <p class="resume-year">Mar 2022 - Dec 2022</p>
      </div>
    </>
  );

  const oh = (
    <>
      <div class="flex">
        <h5 class="text-white-primary hover-resume">OPEN HOUSE FASILKOM UI</h5>
      </div>
      <div class="flex flex-wrap justify-between">
        <p class="resume-sub">Vice Project Officer</p>
        <p class="resume-year">Mar 2022 - Dec 2022</p>
      </div>
    </>
  );

  const compfest = (
    <>
      <div class="flex">
        <h5 class="text-white-primary hover-resume">
          DATA SCIENCE ACADEMY - COMPFEST 14
        </h5>
      </div>
      <div class="flex flex-wrap justify-between">
        <p class="resume-sub">Data Science Academy Staff</p>
        <p class="resume-year">Apr 2022 - Nov 2022</p>
      </div>
    </>
  );

  return (
    <>
      <div class="flex justify-start items-center pt-16 pb-8">
        <h3>Activities</h3>
      </div>

      <Collapsible trigger={aiesec} transitionTime={300} easing="ease-in-out">
        <ul class="ml-4 text-white-primary">
          <li>
            <p>
              Analyze, and give recommendation/suggestion about the AIESEC in UI
              program, namely Lead Series
            </p>
          </li>
          <li>
            <p>
              Conduct planning to make a new initiative "scholarship program"
            </p>
          </li>
          <li>
            <p>Create a deck and proposal for the "scholarship program"</p>
          </li>
        </ul>
      </Collapsible>

      <div class="line-horizontal" />

      <Collapsible trigger={bem} transitionTime={300} easing="ease-in-out">
        <ul class="ml-4 text-white-primary">
          <li>
            <p>
              Conducting one of the Public Relation Bureau namely, Open House
              Fasilkom UI 2022
            </p>
          </li>
          <li>
            <p>
              Being as Humas Partner to the other Bureau and Department in BEM
              Fasilkom UI
            </p>
          </li>
        </ul>
      </Collapsible>

      <div class="line-horizontal" />

      <Collapsible trigger={oh} transitionTime={300} easing="ease-in-out">
        <ul class="ml-4 text-white-primary">
          <li>
            <p>
              Open House Fasilkom UI is an annual event held by BEM Fasilkom UI
              to promote and intrduce Fasilkom UI to the high school students,
              and help them to dispel doubts of major that they will take in the
              university
            </p>
          </li>
          <li>
            <p>
              Manage and supervised day to day activities of several divisions:
              Creative, Web Development, Documentation and Cinematography, and
              Operational.
            </p>
          </li>
        </ul>
      </Collapsible>

      <div class="line-horizontal" />

      <Collapsible trigger={compfest} transitionTime={300} easing="ease-in-out">
        <ul class="ml-4 text-white-primary">
          <li>
            <p>
            Created pre-module for the Data Science Academy, ToR for the speakers
            </p>
          </li>
          <li>
            <p>
            Criticizing the curriculum that will be delivered in the academy
            </p>
          </li>
          <li>
            <p>
            Liaison Officer to the one of the mentor
            </p>
          </li>
          <li>
            <p>
            Conducting administration process registration of the applicants
            </p>
          </li>
        </ul>
      </Collapsible>
    </>
  );
};

export default Activities;
