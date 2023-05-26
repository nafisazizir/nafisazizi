import "./HeroButtonSecondaryStyle.css";

const HeroButtonSecondary = (props) => {
  return (
    <>
      <div class="px-2 py-1">
        <button class="button-secondary">{props.text}</button>
      </div>
    </>
  );
};

export default HeroButtonSecondary;
