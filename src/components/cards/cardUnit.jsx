import React, { Component } from "react";
import { Link } from "react-router-dom";

import trainingService from "../../services/trainingService";

import "./cardUnit.scss";

class CardUnit extends Component {
  state = {
    numberOfLessons: 1
  };

  componentDidMount() {
    const { unit } = this.props;
    const numberOfLessons = trainingService.getNumberOfLessonsByUnit(unit.id);
    this.setState({ numberOfLessons });
  }

  render() {
    const { unit, col } = this.props;
    const { numberOfLessons } = this.state;
    return (
      <div className={"col col-" + col}>
        <Link
          className="card-unit bg-secondary-light secondary-text-color"
          to={`/unit/${unit.id}`}
        >
          <img
            src={`/images/${unit.image}`}
            className="card-img-left"
            alt={unit.name}
          />
          <div className="card-body">
            <p className="card-text">{unit.name}</p>
            <div className="card-progress">
              <span>{`0 / ${numberOfLessons}`}</span>
              <div className="progress">
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
  }
}

CardUnit.defaultProps = {
  col: 6
};

export default CardUnit;
