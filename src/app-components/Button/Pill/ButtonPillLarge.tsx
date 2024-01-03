import React from "react";
import "./style.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  onClick: () => void;
  variant: ButtonVariant;
  text: string;
}

const ButtonPillLarge: React.FC<ButtonProps> = ({ onClick, variant, text }) => {
  const classNames = `button-large button-${variant}`;

  return (
    <div className={classNames} onClick={onClick}>
      <div className="label-large" style={{ textAlign: "center" }}>
        {text}
      </div>
    </div>
  );
};

export default ButtonPillLarge;
