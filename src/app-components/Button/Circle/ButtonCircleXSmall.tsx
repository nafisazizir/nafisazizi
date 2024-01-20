import React, { ReactNode } from "react";
import "./style.css";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const ButtonCircleXSmall: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={`button-circle button-circle-xsmall ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonCircleXSmall;
