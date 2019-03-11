import React from "react";
import NavBarLink from "./navBarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarDropdown = ({ label }) => {
  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link btn btn-link"
        id="profileDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label} <FontAwesomeIcon icon="user-circle" size="lg" />
      </button>
      <div
        className="dropdown-menu dropdown-menu-lg-right"
        aria-labelledby="profileDropdown"
      >
        <NavBarLink className="dropdown-item" label="Mi Perfil" to="/profile" />
        <NavBarLink
          className="dropdown-item"
          label="Mis capacitaciones"
          to="/trainings"
        />
        <div className="dropdown-divider" />
        <NavBarLink
          className="dropdown-item"
          label="Cerrar Sesión"
          to="/logout"
        />
      </div>
    </div>
  );
};

export default NavBarDropdown;
