import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BoxAchievements from "../../../components/boxes/boxAchievements";
import trainingService from "../../../services/trainingService";

import classes from "./LessonEnd.module.scss";

class LessonEnd extends Component {
  state = {
    lesson: {}
  };
  componentDidMount() {
    const lesson = trainingService.getCurrentLesson();
    console.log(lesson);
    this.setState({ lesson });
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className={classes.LessonEnd + " col-9"}>
            <h4>¡Felicitaciones!</h4>
            <h5>
              Completaste esta lección <br /> y obtuviste una medalla
            </h5>
            <img
              src={`/images/icons/medal_big.svg`}
              height="190px"
              alt="Medal"
            />
            <h5>
              Recuerda que para obtener tu diploma debes completar
              <br /> todos los módulos de la unidad
            </h5>
            <h5>¡Adelante!</h5>
            <Link
              to={`/unit/${this.state.lesson.unitId}`}
              className="btn btn-secondary bg-secondary-dark secondary-text-color"
            >
              Continuar <FontAwesomeIcon icon="angle-right" size="lg" />
            </Link>
          </div>
          <div className="col-3">
            <BoxAchievements />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LessonEnd;