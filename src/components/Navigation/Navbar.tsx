import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../assets/icons/logo.svg";
import Night from "../../assets/icons/night.svg";
import Outline from "../../assets/icons/outline.svg";
import XMark from "../../assets/icons/x-mark.svg";
import ButtonCircleXSmall from "../Button/Circle/ButtonCircleXSmall";
import { Link } from "gatsby";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    if (nav) {
      setNav(false);
    }
  };

  return (
    <div className="nav-container">
      <div className="navbar">
        <Link to="/">
          <Logo className="nav-logo" />
        </Link>

        <div className="nav-menu">
          <Link className="navlink" to="/" activeClassName="active">
            Home
          </Link>
          <Link
            className="navlink"
            to="/projects"
            activeClassName="active"
            partiallyActive
          >
            Projects
          </Link>
          <Link
            className="navlink"
            to="/blogs"
            activeClassName="active"
            partiallyActive
          >
            Blog
          </Link>
          <Link
            className="navlink"
            to="/about"
            activeClassName="active"
            partiallyActive
          >
            About
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <ButtonCircleXSmall
            children={
              <Night
                style={{
                  width: "16px",
                  height: "16px",
                  color: "var(--typography-primary)",
                }}
              />
            }
            onClick={switchTheme}
          />

          <div onClick={handleNav} className="block hamburger">
            {nav ? (
              <ButtonCircleXSmall
                children={
                  <XMark
                    style={{
                      width: "18px",
                      height: "18px",
                    }}
                  />
                }
                onClick={handleNav}
              />
            ) : (
              <ButtonCircleXSmall
                children={
                  <Outline
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                }
                onClick={handleNav}
              />
            )}
          </div>
        </div>
      </div>

      <ul className={nav ? "nav-mobile-active" : "nav-mobile-inactive"}>
        <li>
          <Link
            className="navlink"
            to="/"
            onClick={handleLinkClick}
            activeClassName="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="navlink"
            to="/projects"
            onClick={handleLinkClick}
            activeClassName="active"
            partiallyActive
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navlink"
            to="/blogs"
            onClick={handleLinkClick}
            activeClassName="active"
            partiallyActive
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="navlink"
            to="/about"
            onClick={handleLinkClick}
            activeClassName="active"
            partiallyActive
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
