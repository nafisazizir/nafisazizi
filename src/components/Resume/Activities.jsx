import React from "react";
import Collapsible from "react-collapsible";
import "./ActivitiesStyle.css";
import cv from "../../content/cv.json";

const Activities = () => {
  const activities = cv.activities;
  const sizeActivities = activities.length;

  return (
    <>
      <div className="flex justify-start items-center pt-16 pb-8">
        <h3 className="text-gradient">Activities</h3>
      </div>

      {activities.map((activity, i) => {
        const triggerTitle = (
          <>
            <div className="flex">
              <h5 className="text-white-primary hover-resume">
                {activity.organization.toUpperCase()}
              </h5>
            </div>
            <div className="flex flex-wrap justify-between">
              <p className="resume-sub">{activity.title}</p>
              <p className="resume-year">
                {activity.startDate} - {activity.endDate}
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
                {activity.highlights.map((highlight) => {
                  return (
                    <>
                      <li>{highlight}</li>
                    </>
                  );
                })}
              </ul>
            </Collapsible>
            {i < sizeActivities - 1 ? <div className="line-horizontal" /> : null}
          </>
        );
      })}
    </>
  );
};

export default Activities;
