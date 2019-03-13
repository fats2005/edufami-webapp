import React from "react";
import { Link } from "react-router-dom";

import "./cardLesson.scss";

const CardLesson = ({ col, trainingId, unitId, lesson }) => {
  console.log(col, trainingId, unitId, lesson.id);
  return (
    <div className={"col col-" + col}>
      <Link to={`/trainings/${trainingId}/${unitId}/${lesson.id}`}>
        <div className="card card-lesson text-center bg-primary-light secondary-text-color">
          <div class="card-body">
            <img
              src={require(`../../images/${lesson.image}`)}
              className="card-lesson-img-top"
              alt={lesson.name}
            />
            <div className="card-title">
              <h5 className="align-middle">Special title treatment</h5>
            </div>
            <a href="#" className="btn btn-secondary">
              Iniciar
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

CardLesson.defaultProps = {
  col: 4
};

export default CardLesson;
