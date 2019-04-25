import React from "react";
import { Link } from "react-router-dom";

import Img from "../../common/img";

import classes from "./CardLesson.module.scss";

const cardLesson = props => {
  const { lesson } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link
        className={
          classes.Card + " card text-center bg-secondary primary-text-color"
        }
        to={`/lesson/${lesson.id}`}
      >
        <div className="card-body secondary-text-color">
          <Img src={lesson.image} className={classes.Img} alt={lesson.name} />
          <div className={classes.Title}>
            <h5 className="align-middle">{lesson.name}</h5>
          </div>
          <button className="btn btn-primary bg-primary-dark  secondary-text-color">
            Iniciar
          </button>
        </div>
      </Link>
    </div>
  );
};

export default cardLesson;
