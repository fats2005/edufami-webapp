import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./question.scss";

class Questions extends Component {
  state = {};
  render() {
    const { currentStep, nextStep } = this.props;
    return (
      <div className="row question">
        <div className="col col-lg-12">
          <div className="box bg-primary">
            <button className="btn btn-secondary btn-exit">
              <FontAwesomeIcon icon="times" size="lg" />
            </button>
            <div className="box-title" style={{ backgroundColor: "#ffffff" }}>
              <div className="box-title-background-2">
                <h4>{currentStep.instruction}</h4>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col col-lg6">Imagen</div>
                  <div className="col col-lg6">Opciones</div>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <div className="card-progress">
                <span>{`0 / ${0}`}</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{
                      width: (0 / 0) * 100 + "%"
                    }}
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
