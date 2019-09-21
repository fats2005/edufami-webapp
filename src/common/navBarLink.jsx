import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLink = ({ label, to, className }) => {
  return (
    <NavLink className={className} to={to}>
      {label}
    </NavLink>
  );
};

NavBarLink.defaultProps = {
  className: "nav-item nav-link"
};

export default NavBarLink;
