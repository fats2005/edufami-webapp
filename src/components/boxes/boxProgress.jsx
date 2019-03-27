import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BoxProgress = () => {
  return (
    <div className="mi-progress">
      <div className="mi-progress-background-2">
        <h4>
          <FontAwesomeIcon icon="tasks" size="lg" /> Mi Progreso
        </h4>
        <ul>
          <li>
            <Link to="/trainings">
              Climafami <br />
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/trainings">
              Equfami <br />
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxProgress;
