import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import trainingService from "../../../services/trainingService";

import classes from "./LessonEnd.module.scss";
import Layout from "../../../common/layout";

class LessonEnd extends Component {
  constructor() {
    super();
    this.state = {
      lesson: {}
    };
  }

  componentDidMount() {
    const lesson = trainingService.getCurrentLesson();
    this.setState({ lesson });
  }

  render() {
    const { lesson } = this.state;
    return (
      <>
        <Layout>
          <div className={classes.LessonEnd}>
            <h4>¡Felicitaciones!</h4>
            <h5>
              Completaste esta lección <br /> y obtuviste una medalla
            </h5>
            <img src="/images/icons/medal_big.svg" height="190px" alt="Medal" />
            <h5>
              Recuerda que para obtener tu diploma debes completar
              <br /> todos los módulos de la unidad
            </h5>
            <h5>¡Adelante!</h5>
            <Link
              to={`/unit/${lesson.unitId}`}
              className="btn btn-secondary bg-secondary-dark secondary-text-color"
            >
              Continuar <FontAwesomeIcon icon="angle-right" size="lg" />
            </Link>
          </div>
        </Layout>
      </>
    );
  }
}

export default LessonEnd;
