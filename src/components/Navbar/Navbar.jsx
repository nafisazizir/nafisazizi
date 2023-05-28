import { HashLink } from "react-router-hash-link";
import "./NavbarStyle.css";

const Navbar = () => {
  const screenWidth = window.innerWidth;
  let margin = 88;

  if (screenWidth <= 280) {
    margin = 55;
  } else if (screenWidth <= 480) {
    margin = 59;
  }

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <HashLink to="/#" smooth>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink to="/#experiences" scroll={el => scrollWithOffset(el, margin)}>
            Experiences
          </HashLink>
        </li>
        <li>
          <HashLink to="/#projects"  scroll={el => scrollWithOffset(el, margin)}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink to="/about" smooth>
            About
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
