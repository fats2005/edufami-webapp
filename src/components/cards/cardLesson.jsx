import React, { Component } from "react";
import { Link } from "react-router-dom";

import Img from "../common/Img";

import "./cardLesson.scss";

class CardLesson extends Component {
  render() {
    const { col, lesson } = this.props;
    return (
      <div className={"col col-" + col}>
        <Link
          className="card card-lesson text-center bg-secondary primary-text-color"
          to={`/lesson/${lesson.id}`}
        >
          <div className="card-body secondary-text-color">
            <Img
              src={lesson.image}
              className="card-lesson-img-top"
              alt={lesson.name}
            />
            <div className="card-title">
              <h5 className="align-middle">{lesson.name}</h5>
            </div>
            <button className="btn btn-primary bg-primary-dark  secondary-text-color">
              Iniciar
            </button>
          </div>
        </Link>
      </div>
    );
  }
}

CardLesson.defaultProps = {
  col: 4
};

export default CardLesson;
