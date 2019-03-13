import React from "react";
import { Link } from "react-router-dom";

import "./cardUnit.scss";

const CardUnit = ({ col, unit, trainingId }) => {
  return (
    <div className={"col col-" + col}>
      <Link to={`/trainings/${trainingId}/${unit.id}`}>
        <div className="card-unit bg-secondary-light secondary-text-color">
          <img
            src={require(`../../images/${unit.image}`)}
            className="card-img-left"
            alt={unit.name}
          />
          <div className="card-body">
            <p className="card-text">{unit.name}</p>
            <div className="card-progress">
              <span>{`${unit.lessonsFinished} / ${unit.numberOfLessons}`}</span>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{
                    width:
                      (unit.lessonsFinished / unit.numberOfLessons) * 100 + "%"
                  }}
                  aria-valuenow={unit.lessonsFinished}
                  aria-valuemin="0"
                  aria-valuemax={unit.numberOfLessons}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

CardUnit.defaultProps = {
  col: 6
};

export default CardUnit;
