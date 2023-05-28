import React from "react";
import "./ProjectsHomeStyle.css";
import acb_ise from "../../assets/acb_isbe.png";
import sirest from "../../assets/sirest.png";
import starcraft from "../../assets/starcraft.png";
import climate_change from "../../assets/climate_change.png";

const ProjectsHome = () => {
  return (
    <div className="projects-home pt-16" id="projects">
      <div className="flex justify-start items-center pb-8">
        <h3 className="text-gradient">Selected Projects</h3>
      </div>

      <div className="line-horizontal" />

      <div className="flex flex-row justify-between items-center">
        <div className="projects-home-elem">
          <h5 className="text-white-primary mb-2">
            ACB-ISBE, Conference Proceeding App, Web & Mobile App Version
          </h5>
          <ul className="ml-4 text-white-primary">
            <li>
              <p>
                Designed and developed a conference proceeding mobile & web app,
                app for conference participants to see their submitted papers,
                conference information, chairs, schedule, events, and speakers.
              </p>
            </li>
            <li>
              <p>
                Utilized Python Django (web app), and Flutter (mobile app) to
                develop the applications and handling the database
              </p>
            </li>
            <li>
              <p>
                Implemented search feature and display all the submitted paper
                data
              </p>
            </li>
          </ul>
        </div>

        <img className="project-home-img" src={acb_ise} alt="acb_isbe"></img>
      </div>

      <div className="line-horizontal" />

      <div className="flex flex-row justify-between items-center">
        <div className="projects-home-elem">
          <h5 className="text-white-primary mb-2">
            SIREST, Fullstack Web App for Restaurant Order and Delivery
          </h5>
          <ul className="ml-4 text-white-primary">
            <li>
              <p>
                Designed and implemented the database schema using PostgreSQL for different roles:
                restaurant, customer, driver
              </p>
            </li>
            <li>
              <p>
                Build and deployed the websites.
              </p>
            </li>
          </ul>
        </div>

        <img className="project-home-img" src={sirest} alt="sirest"></img>
      </div>

      <div className="line-horizontal" />

      <div className="flex flex-row justify-between items-center">
        <div className="projects-home-elem">
          <h5 className="text-white-primary mb-2">
            Prediction Starcraft II Matches, Generate ML Model to Predict
            Matchup of Each Games
          </h5>
          <ul className="ml-4 text-white-primary">
            <li>
              <p>
                Exploratory Data Analysis of Starcraft II dataset, analyzing
                such as characteristic of each race, win rate, resource
                statistics, and etc.
              </p>
            </li>
            <li>
              <p>
                Build a predictive machine learning model to predict matchup of
                Starcraft II’s matches
              </p>
            </li>
            <li>
              <p>
                Stack used : Python, Pandas, Seaborn, NumPy, Matplotlib,
                Scikit-learn, Catboost.
              </p>
            </li>
          </ul>
        </div>

        <img className="project-home-img" src={starcraft} alt="starcraft"></img>
      </div>

      <div className="line-horizontal" />

      <div className="flex flex-row justify-between items-center">
        <div className="projects-home-elem">
          <h5 className="text-white-primary mb-2">
            Climate Change Analysis, Data Analysis (EDA) Dashboard About Climate
            Change in Indonesia
          </h5>
          <ul className="ml-4 text-white-primary">
            <li>
              <p>
                Exploratory Data Analysis of climate change dataset in
                Indonesia, analyzing such as precipitation, temperature over the
                years, correlation to other factors, etc.
              </p>
            </li>
            <li>
              <p>Stack used : Python, Pandas, Seaborn, NumPy, Matplotlib.</p>
            </li>
          </ul>
        </div>

        <img className="project-home-img" src={climate_change} alt="climate_change"></img>
      </div>

      <div className="line-horizontal" />
    </div>
  );
};

export default ProjectsHome;
