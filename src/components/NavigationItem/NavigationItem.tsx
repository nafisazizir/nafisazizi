import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { Link } from "gatsby";
import "./style.css";

type NavigationItemProps = {
  to: string;
  type?: "item" | "button" | "workspace";
  state?: "default" | "selected";
  content?: string;
  icon?: React.ReactNode;
};
const NavigationItem: React.FC<NavigationItemProps> = ({
  to,
  type = "item",
  state = "default",
  content,
  icon,
}) => {
  const classNames = ["nav-item", type && type, state && state]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      className={classNames}
      to={to}
      activeClassName="active"
      partiallyActive={content === "Home" ? false : true}
    >
      {type == "workspace" && (
        <span className="icon">
          <Logo />
        </span>
      )}
      {icon && <span className="icon">{icon}</span>}
      {content && <span className="content">{content}</span>}
    </Link>
  );
};

export default NavigationItem;
