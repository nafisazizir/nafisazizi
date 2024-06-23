import React from "react";
import "./style.css";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";
import Button from "../../components/Button/Button";
import NavigationItem from "../../components/NavigationItem/NavigationItem";
import Envelope from "../../assets/icons/envelope.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <NavigationItem to="/" type="workspace" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <Button
            type="secondary"
            size="sm"
            icon={<LinkedIn />}
            onClick={() =>
              window.open("https://www.linkedin.com/in/nafisazizi/")
            }
          />
          <Button
            type="secondary"
            size="sm"
            icon={<Github />}
            onClick={() => window.open("https://github.com/nafisazizir")}
          />
          <Button
            type="secondary"
            size="sm"
            icon={<Envelope />}
            onClick={() =>
              (window.location.href = "mailto:hello@nafisazizi.com")
            }
          />
        </div>
      </div>

      <div className="paragraph-small">© 2024 Nafis Azizi Riza.</div>
    </div>
  );
};

export default Footer;
