import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxMedals = () => {
  return (
    <div className="medals">
      <div className="medals-background-2">
        <h4>
          <FontAwesomeIcon icon="medal" size="lg" /> Mis Medallas
        </h4>
        <ul>
          <li>Climafami para Todos</li>
          <ul>
            <li className="medal">
              <FontAwesomeIcon icon="medal" size="lg" />
            </li>
            <li className="medal">
              <FontAwesomeIcon icon="medal" size="lg" />
            </li>
            <li className="medal">
              <FontAwesomeIcon icon="medal" size="lg" />
            </li>
          </ul>
          <li>Equifami para todos</li>
          <ul>
            <li className="medal">
              <FontAwesomeIcon icon="medal" size="lg" />
            </li>
            <li className="medal">
              <FontAwesomeIcon icon="medal" size="lg" />
            </li>
          </ul>
          <li>Nutrifami para todos</li>
          <ul>
            <li className="medal">
              <FontAwesomeIcon icon="medal" size="lg" />
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default BoxMedals;
