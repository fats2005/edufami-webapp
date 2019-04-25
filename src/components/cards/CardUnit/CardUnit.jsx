import React from "react";
import { Link } from "react-router-dom";

import Img from "../../common/img";

import classes from "./CardUnit.module.scss";

const cardUnit = props => {
  const { unit, numberOfLessons } = props;
  return (
    <div className="col-12 col-md-6">
      <Link
        className={classes.Card + " bg-secondary-light secondary-text-color"}
        to={`/unit/${unit.id}`}
      >
        <Img src={unit.image} className={classes.Img} alt={unit.name} />
        <div className={classes.Body}>
          <p className={classes.Text}>{unit.name}</p>
          <div className={classes.CardProgress}>
            <span>{`0 / ${numberOfLessons}`}</span>
            <div className={classes.Progress + " progress"}>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{
                  width: (0 / numberOfLessons) * 100 + "%"
                }}
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax={numberOfLessons}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default cardUnit;
