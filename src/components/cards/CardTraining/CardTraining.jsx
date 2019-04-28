import React from "react";
import { Link } from "react-router-dom";

import Img from "../../common/img";

import classes from "./CardTraining.module.scss";

const CardTraining = props => {
  const { data } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link
        className={classes.Card + " secondary-text-color bg-secondary"}
        to={`/trainings/${data.id}`}
      >
        <Img src={data.image} className="card-img-top" alt={data.name} />
        <div className={classes.Body + " bg-secondary"}>
          <p>{data.name}</p>
        </div>
        {/* <div className={classes.App}>
          <img
            src={`/images/${data.app}_small_logo.svg`}
            alt={data.app}
            width="50"
          />
        </div>
        <div className={classes.Bottom + " bg-secondary-light"} />
        <div className={classes.Bottom2 + " bg-secondary-dark"} /> */}
      </Link>
    </div>
  );
};

export default CardTraining;
