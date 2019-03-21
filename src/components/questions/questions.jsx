import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuestionMultipleOptions from "./questionMultipleOptions";
import trainingService from "../../services/trainingService";
import "./questions.scss";

class Questions extends Component {
  state = {
    totalQuestions: 0
  };

  componentDidMount() {
    this.setState({
      totalQuestions: trainingService.getNumberOfStepsofCurrentLesson()
    });
  }

  chooseQuestion(type) {
    const { currentStep, onGoNext } = this.props;
    switch (parseInt(type)) {
      case 1:
        return onGoNext();
      case 2:
        return (
          <QuestionMultipleOptions
            currentStep={currentStep}
            onGoNext={onGoNext}
          />
        );
      case 3:
        return (
          <QuestionMultipleOptions
            currentStep={currentStep}
            onGoNext={onGoNext}
          />
        );
      case 4:
        return (
          <QuestionMultipleOptions
            currentStep={currentStep}
            onGoNext={onGoNext}
          />
        );
      default:
        return <h1>Error</h1>;
    }
  }
  render() {
    const { currentStep, onExit } = this.props;
    const { totalQuestions } = this.state;
    return (
      <div className="row question">
        <div className="col col-lg-12">
          <div className="box bg-primary">
            <button className="btn btn-secondary btn-exit" onClick={onExit}>
              <FontAwesomeIcon icon="times" size="lg" />
            </button>
            <div className="box-title" style={{ backgroundColor: "#ffffff" }}>
              <div className="box-title-background-2">
                <h4>{currentStep.instruction}</h4>
              </div>
              <div className="box-body">
                {this.chooseQuestion(currentStep.type)}
              </div>
            </div>
            <div className="box-footer">
              <div className="box-progress">
                <span>{`${currentStep.order}/${totalQuestions}`}</span>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{
                      width: (currentStep.order / totalQuestions) * 100 + "%"
                    }}
                    aria-valuenow={currentStep.order}
                    aria-valuemin="0"
                    aria-valuemax={totalQuestions}
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
