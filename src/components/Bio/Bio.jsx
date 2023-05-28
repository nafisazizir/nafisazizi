import React from "react";
import "./BioStyle.css";
import PhotoMe from "../../assets/photo_me_squre.png";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Bio = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-8">
        <img className="bio-photo" src={PhotoMe}></img>
        <div className="flex flex-col gap-2">
          <p className="text-white-primary">
            Crafted, designed, and coded with passion by Nafis Azizi Riza,
            completing Computer Science 💻🏫 undergraduate at the Universitas
            Indonesia | Outdoor Enthusiast, Adventurer, Explorer 🥾🏄🏻‍♂️.
          </p>
          <div className="flex flex-row items-center gap-4">
            <div className="icon-bio-container">
              <a
                href="https://www.linkedin.com/in/nafisazizi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedinOption className="icon-bio" />
              </a>
            </div>
            <div className="icon-bio-container">
              <a
                href="https://github.com/nafisazizir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub className="icon-bio" />
              </a>
            </div>
            <div className="icon-bio-container">
              <a
                href="mailto:nafisredzone@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail className="icon-bio" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bio;
