import { HashLink } from "react-router-hash-link";
import "./HeroButtonSecondaryStyle.css";

const HeroButtonSecondary = (props) => {
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
    <>
      <div className="px-2 py-1">
        <HashLink to={props.to} scroll={(el) => scrollWithOffset(el, margin)}>
          <button className="button-secondary">{props.text}</button>
        </HashLink>
      </div>
    </>
  );
};

export default HeroButtonSecondary;
