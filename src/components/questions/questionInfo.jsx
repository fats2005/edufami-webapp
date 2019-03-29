import React from "react";

import Question from "./question";

class QuestionInfo extends Question {
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentStep !== this.props.currentStep) {
      this.startTimer();
    }
  }

  startTimer() {
    let number = 0;
    let miliseconds = 200;
    let interval = setInterval(() => {
      this.setState({ timerPosition: number++ });
      if (number > 50) {
        clearInterval(interval);
        this.setState({ canEvaluate: true });
      }
    }, miliseconds);
  }

  handleEvaluate = () => {
    this.setState({ state: "initial" });
    this.props.onGoNext();
  };

  render() {
    const { currentStep } = this.props;
    const { timerPosition } = this.state;

    return (
      <div className="row">
        {this.renderImage(currentStep.image, currentStep.text)}
        <div className="col col-lg-8">
          <div className="question">
            {this.renderQuestion(currentStep.question)}
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
            {this.renderEvaluate()}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionInfo;
