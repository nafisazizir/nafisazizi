import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <a href="/#home">Home</a>
        </li>
        <li>
          <a href="/#experiences">Experiences</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
