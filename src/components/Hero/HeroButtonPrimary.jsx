import "./HeroButtonPrimaryStyle.css";
import { HashLink } from "react-router-hash-link";

const HeroButtonPrimary = (props) => {
  return (
    <>
      <div className="px-2 py-1">
        <HashLink to={props.to} target="_blank" rel="noopener noreferrer" smooth>
          <button>{props.text}</button>
        </HashLink>
      </div>
    </>
  );
};

export default HeroButtonPrimary;
