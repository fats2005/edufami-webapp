import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBarLink from "./navBarLink";

const NavBarDropdown = ({ label }) => {
  return (
    <div className="nav-item dropdown">
      <button
        className="nav-link btn btn-link"
        id="profileDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        type="button"
      >
        {label} <FontAwesomeIcon icon="user-circle" size="lg" />
      </button>
      <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="profileDropdown">
        {/* <NavBarLink className="dropdown-item" label="Mi Perfil" to="/profile" />
        <NavBarLink
          className="dropdown-item"
          label="Configuración"
          to="/settings"
        /> */}
        {/* <div className="dropdown-divider" /> */}
        <NavBarLink className="dropdown-item" label="Cerrar Sesión" to="/logout" />
      </div>
    </div>
  );
};

export default NavBarDropdown;
