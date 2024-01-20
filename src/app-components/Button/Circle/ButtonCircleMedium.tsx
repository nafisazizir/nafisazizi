import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

const ButtonCircleMedium: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`button-circle button-circle-medium ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonCircleMedium;
