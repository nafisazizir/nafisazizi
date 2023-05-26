import React from "react";
import "./FooterStyle.css";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container flex justify-between items-center">
        <h4 className="text-gradient">Nafis.</h4>
        <div className="flex flex-row items-center text-white-primary">
          <a
            href="https://www.linkedin.com/in/nafisazizi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption className="icon" />
          </a>
          <a
            href="https://github.com/nafisazizir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="icon" />
          </a>
          <a
            href="mailto:nafisredzone@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
