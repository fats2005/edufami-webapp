import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div className="certificates">
      <div className="certificates-background-2">
        <h4>
          <FontAwesomeIcon icon="certificate" size="lg" /> Mis Certificados
        </h4>
        <ul>
          <li>
            <Link to="/trainings">
              Climafami para Todos <FontAwesomeIcon icon="download" size="lg" />
            </Link>
          </li>
          <li>
            <Link to="/trainings">
              Equifami para Todos <FontAwesomeIcon icon="download" size="lg" />
            </Link>
          </li>

          <li>
            <Link to="/trainings">
              Nutrifami para Todos <FontAwesomeIcon icon="download" size="lg" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certificates;
