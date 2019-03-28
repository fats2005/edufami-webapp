import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Img from "../common/Img";

class QuestionInfo extends Component {
  state = {
    options: [],
    state: "initial",
    timerPosition: 0,
    disabledButton: false
  };

  componentDidMount() {
    console.log("cmd");
    this.startTimer();
  }

  startTimer() {
    this.setState({ disabledButton: true });
    let number = 0;
    let miliseconds = 200;
    let interval = setInterval(() => {
      this.setState({ timerPosition: number++ });
      if (number > 50) {
        clearInterval(interval);
        this.setState({ disabledButton: false });
      }
    }, miliseconds);
  }

  handleContinue = () => {
    this.props.onGoNext();
  };

  render() {
    const { currentStep } = this.props;
    const { disabledButton, timerPosition } = this.state;

    return (
      <div className="row">
        <div className="col col-lg-4">
          <Img src={currentStep.image} className="card-img-left" alt="Opcion" />
        </div>
        <div className="col col-lg-8">
          <div className="question">
            <div className="question-text">
              <p>{currentStep.question}</p>
            </div>
            <div className="progress progress-info bg-secondary">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{
                  width: (timerPosition / 50) * 100 + "%"
                }}
                aria-valuenow={timerPosition}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <div className="evaluate">
              <button
                className="btn btn-secondary bg-secondary-dark secondary-text-color"
                onClick={this.handleContinue}
                disabled={disabledButton}
              >
                Continuar <FontAwesomeIcon icon="angle-right" size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionInfo;
