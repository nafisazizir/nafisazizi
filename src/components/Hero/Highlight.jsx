import "./HighlightStyle.css";

const Highlight = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <p className="h4">{props.num}</p>
        <p className="p">{props.desc}</p>
      </div>
    </>
  );
};

export default Highlight;
