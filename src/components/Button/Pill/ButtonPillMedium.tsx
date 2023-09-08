import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  onClick: () => void;
  variant: ButtonVariant;
  text: string;
}

const ButtonPillMedium: React.FC<ButtonProps> = ({
  onClick,
  variant,
  text,
}) => {
  const classNames = `button-medium button-${variant}`;

  return (
    <div className={classNames} onClick={onClick}>
      <div className="label-medium" style={{ textAlign: "center" }}>
        {text}
      </div>
    </div>
  );
};

export default ButtonPillMedium;
