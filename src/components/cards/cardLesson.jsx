import React from "react";
import { Link } from "react-router-dom";

import "./cardLesson.scss";

const CardLesson = ({ col, trainingId, unitId, lesson }) => {
  return (
    <div className={"col col-" + col}>
      <Link
        className="card card-lesson text-center bg-secondary primary-text-color"
        to={`/trainings/${trainingId}/${unitId}/${lesson.id}`}
      >
        <div className="card-body">
          <img
            src={`/images/ico_gray_${lesson.order}.png`}
            className="card-lesson-img-top"
            alt={lesson.name}
          />
          <div className="card-title">
            <h5 className="align-middle">{lesson.name}</h5>
          </div>
          <button
            href="#"
            className="btn btn-primary bg-primary-dark  secondary-text-color"
          >
            Iniciar
          </button>
        </div>
      </Link>
    </div>
  );
};

CardLesson.defaultProps = {
  col: 4
};

export default CardLesson;
