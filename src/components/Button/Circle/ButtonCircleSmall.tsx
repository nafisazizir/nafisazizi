import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const ButtonCircleSmall: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <div
      className={`button-circle button-circle-small ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonCircleSmall;
