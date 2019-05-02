import React from "react";

import Question from "../Question/Question";

class QuestionInfo extends Question {
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentStep !== this.props.currentStep) {
      this.startTimer();
    }
  }
  render() {
    const { timerPosition } = this.state;
    const { phase, seconds } = this.timer;
    return (
      <React.Fragment>
        {this.renderQuestionBox(
          <div className="progress progress-info">
            <div
              className="progress-bar bg-primary-light"
              role="progressbar"
              style={{
                width: (timerPosition / ((1000 / phase) * seconds)) * 100 + "%"
              }}
              aria-valuenow={timerPosition}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>,
          "Continuar"
        )}
      </React.Fragment>
    );
  }
}

export default QuestionInfo;
