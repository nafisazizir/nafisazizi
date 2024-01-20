import React from "react";
import "./style.css";

const Gridbackground = () => {
  const rows = 100;
  const cols = 13;

  const gridStyle: React.CSSProperties = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  const cells = Array.from({ length: rows * cols }, (_, index) => (
    <div key={index} />
  ));

  return (
    <div className="grid-background" style={gridStyle}>
      {cells}
    </div>
  );
};

export default Gridbackground;
