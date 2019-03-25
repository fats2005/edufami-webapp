import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import Feedback from "./feedback";
import trainingService from "../../services/trainingService";
import Img from "../common/Img";

class QuestionMultipleOptions extends Component {
  state = {
    options: [],
    state: "initial",
    canEvaluate: false,
    feedback: {
      show: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.state === "initial") {
      const options = trainingService.getOptionsByStep(
        nextProps.currentStep.id
      );
      return { options, state: "process", canEvaluate: false };
    }
    return null;
  }

  onOptionSelected(option) {
    let options = [...this.state.options];
    const index = _.findIndex(options, option);
    option["selected"] = option.selected ? !option.selected : true;
    options.splice(index, 1, option);
    this.updateEvaluateBottom();
    this.setState({ options });
  }

  updateEvaluateBottom() {
    const { options } = this.state;
    const { true: correctOptions } = _.countBy(options, rec => rec.isCorrect);
    const { true: selectedOptions } = _.countBy(options, rec => rec.selected);
    const canEvaluate = correctOptions === selectedOptions ? true : false;
    this.setState({ canEvaluate });
  }

  handleEvaluate = () => {
    const { options } = this.state;
    // Counting the wrong answers
    const { false: wrongAnswers } = _.countBy(
      options,
      op => op.isCorrect === (op.selected ? true : false)
    );
    // Parse to boolean
    const feedback = this.updateFeedback(!Boolean(wrongAnswers));

    this.setState({ feedback });
  };

  updateFeedback = isOk => {
    const { options } = this.state;
    // Filtring the options to extract the feedbacks
    const filtered = _.filter(options, o => o.isCorrect === isOk && o.selected);

    let feedback = {
      show: true,
      text: filtered[0].feedback, // CHoosing the first feedback
      status: isOk ? "good" : "bad"
    };

    return feedback;
  };

  handleFeedbackButton = () => {
    const { feedback } = this.state;
    feedback.show = false;
    this.setState({ state: "initial" });
    if (feedback.status === "good") {
      this.props.onGoNext();
    }

    this.setState({ feedback });
  };

  render() {
    const { currentStep } = this.props;
    const { options, canEvaluate, feedback } = this.state;

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
            <div className="options">
              {options.map(option => (
                <button
                  key={option.id}
                  className={
                    "btn btn-primary bg-primary-light option " +
                    (option.selected ? "active" : "")
                  }
                  onClick={() => this.onOptionSelected(option)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className="evaluate">
              <button
                className="btn btn-secondary bg-secondary-dark secondary-text-color"
                onClick={this.handleEvaluate}
                disabled={!canEvaluate}
              >
                Calificar <FontAwesomeIcon icon="clipboard-check" size="lg" />
              </button>
            </div>
            <Feedback
              feedback={feedback}
              buttonAction={this.handleFeedbackButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionMultipleOptions;
