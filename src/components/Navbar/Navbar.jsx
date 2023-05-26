import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav class="py-8">
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Experiences</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/">Skillsets</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
