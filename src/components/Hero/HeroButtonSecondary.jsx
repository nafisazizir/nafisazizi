import "./HeroButtonSecondaryStyle.css";

const HeroButtonSecondary = (props) => {
  return (
    <>
      <div className="px-2 py-1">
        <button className="button-secondary">{props.text}</button>
      </div>
    </>
  );
};

export default HeroButtonSecondary;
