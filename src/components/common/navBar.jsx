import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "./navBarLink";
import NavBarDropdown from "./navBarDropdown";
import Language from "../Language";

const NavBar = ({ user, show }) => {
  return (
    <React.Fragment>
      {show && user && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            <img src={"/images/logo_edufami.svg"} alt="Logo de Edufami" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mr-auto">
              <NavBarLink label="Mis capacitaciones" to="/trainings" />
              <NavBarLink label="Mi progreso" to="/progress" />
              <NavBarLink label="¿Qué es Edufami?" to="/about" />
            </div>
            <div className="navbar-nav">
              <Language />
            </div>
            <div className="navbar-nav">
              <NavBarDropdown label={user.username} />
            </div>
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

export default NavBar;
