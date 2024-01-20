import React from "react";
import "./style.css";
import ChevronDown from "../../assets/icons/chevron-down.svg";

type ButtonProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "error"
    | "success"
    | "warning"
    | "clear";
  state?: "default" | "hover" | "focus" | "disabled";
  dropdown?: boolean;
  content?: string;
  icon?: React.ReactNode;
  leftIcon?: boolean;
  rightIcon?: boolean;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  type = "primary",
  state = "default",
  dropdown,
  content,
  icon,
  leftIcon = false,
  rightIcon = true,
  onClick,
  className = "",
}) => {
  const classNames = [
    "button flex",
    size && size,
    type && type,
    state && state,
    content ? "" : "icon-only",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {leftIcon && icon && <span className="icon">{icon}</span>}
      {content && <span className="content">{content}</span>}
      {rightIcon && icon && <span className="icon">{icon}</span>}
      {dropdown && (
        <span className="icon">
          <ChevronDown />
        </span>
      )}
    </button>
  );
};

export default Button;
