import React from "react";
import "./style.css";
import Logo from "../../assets/icons/logo.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import Email from "../../assets/icons/email.svg";
import ButtonCircleSmall from "../Button/Circle/ButtonCircleSmall";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <Logo className="nav-logo" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <ButtonCircleSmall
            children={
              <LinkedIn
                style={{
                  width: "32px",
                  height: "32px",
                  color: "var(--typography-primary)",
                }}
              />
            }
            onClick={() =>
              window.open("https://www.linkedin.com/in/nafisazizi/")
            }
          />
          <ButtonCircleSmall
            children={
              <Github
                style={{
                  width: "18px",
                  height: "18px",
                  color: "var(--typography-primary)",
                }}
              />
            }
            onClick={() => window.open("https://github.com/nafisazizir")}
          />
          <ButtonCircleSmall
            children={
              <Email
                style={{
                  width: "22px",
                  height: "22px",
                  color: "var(--typography-primary)",
                }}
              />
            }
            onClick={() =>
              (window.location.href = "mailto:nafisredzone@gmail.com")
            }
          />
        </div>
      </div>

      <div className="paragraph-small">
        © 2023 Nafis Azizi Riza. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
