import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import classes from "./Achivements.module.scss";

const BoxAchievements = props => {
  return (
    <div className={classes.Achivements}>
      <div className={classes.Section}>
        <div className={classes.Body}>
          <h4>
            <FontAwesomeIcon icon="tasks" size="lg" /> Mi Progreso
          </h4>
          <ul>
            <li>
              <Link to="/trainings">
                <span>Climafami</span>
                <div className={classes.Progress + " progress"}>
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
                Equifami <br />
                <div className={classes.Progress + " progress"}>
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
      {/* <div className="certificates">
        <div className="certificates-background-2">
          <h4>
            <FontAwesomeIcon icon="certificate" size="lg" /> Mis Certificados
          </h4>
          <ul>
            <li>
              <Link to="/trainings">
                Climafami <FontAwesomeIcon icon="download" size="lg" />
              </Link>
            </li>
            <li>
              <Link to="/trainings">
                Equfami <FontAwesomeIcon icon="download" size="lg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="medals">
        <div className="medals-background-2">
          <h4>
            <FontAwesomeIcon icon="medal" size="lg" /> Mis Medallas
          </h4>
          <ul>
            <li>Climafami</li>
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
            <li>Equfami</li>
            <ul>
              <li className="medal">
                <FontAwesomeIcon icon="medal" size="lg" />
              </li>
              <li className="medal">
                <FontAwesomeIcon icon="medal" size="lg" />
              </li>
            </ul>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default BoxAchievements;
