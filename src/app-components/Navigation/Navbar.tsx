import React, { useEffect, useState } from "react";
import NavigationItem from "../../components/NavigationItem/NavigationItem";
import Button from "../../components/Button/Button";
import XMark from "../../assets/icons/x-mark.svg";
import Sun from "../../assets/icons/sun.svg";
import Moon from "../../assets/icons/moon.svg";
import Bars3 from "../../assets/icons/bars-3.svg";

const Navbar = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : ""
  );

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
    <>
      <div className="relative flex h-[72px] px-12 py-8 z-[99] justify-between items-center bg-white-900 border-b border-neutral-200">
        <NavigationItem to="/" type="workspace" />

        <div className="hidden gap-8 sm:flex">
          <NavigationItem to="/" type="item" content="Home" />
          <NavigationItem to="/projects" type="item" content="Projects" />
          <NavigationItem to="/blogs" type="item" content="Blogs" />
          <NavigationItem to="/about" type="item" content="About" />
        </div>

        <div className="flex gap-6">
          <Button
            icon={theme === "light" ? <Sun /> : <Moon />}
            type="secondary"
            size="sm"
            onClick={switchTheme}
          />
          <div onClick={handleNav} className="flex sm:hidden">
            <Button
              icon={nav ? <XMark /> : <Bars3 />}
              type="secondary"
              size="sm"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 ${
          nav ? "top-[72px]" : "top-[-100%]"
        } flex flex-col px-12 py-8 gap-2 w-full z-50 justify-center bg-white-900 border-b border-neutral-200 transition-all ease-in-out duration-500`}
        onClick={handleLinkClick}
      >
        <NavigationItem to="/" type="item" content="Home" />
        <NavigationItem to="/projects" type="item" content="Projects" />
        <NavigationItem to="/blogs" type="item" content="Blogs" />
        <NavigationItem to="/about" type="item" content="About" />
      </div>
    </>
  );
};

export default Navbar;
