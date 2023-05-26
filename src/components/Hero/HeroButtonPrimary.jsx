import "./HeroButtonPrimaryStyle.css";

const HeroButtonPrimary = (props) => {
  return (
    <>
      <div class="px-2 py-1">
        <button>{props.text}</button>
      </div>
    </>
  );
};

export default HeroButtonPrimary;
