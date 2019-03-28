import React, { Component } from "react";
import _ from "lodash";

import trainingService from "../../services/trainingService";
import Feedback from "./feedback";
import Img from "../common/Img";

class Question extends Component {
  state = {
    options: [],
    state: "initial",
    canEvaluate: false,
    columnCounter: [0, 0],
    feedback: {
      show: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.state === "initial") {
      const options = trainingService.getOptionsByStep(
        nextProps.currentStep.id
      );
      return {
        options,
        state: "process",
        canEvaluate: false,
        columnCounter: [0, 0]
      };
    }
    return null;
  }

  updateFeedback = isOk => {
    const { options } = this.state;
    const filtered = _.filter(options, o => o.isCorrect === isOk && o.selected);

    let feedback = {
      show: true,
      text: filtered[0].feedback,
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

  renderImage(image, alt) {
    return (
      <div className="col col-lg-4">
        <Img src={image} className="card-img-left" alt={alt} />
      </div>
    );
  }

  renderQuestion(text) {
    return (
      <div className="question-text">
        <p>{text}</p>
      </div>
    );
  }

  renderOptions(options, isPair = false, label) {
    return (
      <div className="options">
        {label && <h6>{label}</h6>}
        {options.map(option => (
          <button
            key={option.id}
            className={
              "btn btn-primary bg-primary-light option " +
              (option.selected ? "active " : " ") +
              ("order-" + option.order)
            }
            onClick={() => this.onOptionSelected(option)}
            disabled={isPair && option.selected}
          >
            {option.text}
          </button>
        ))}
      </div>
    );
  }

  renderEvaluate() {
    return (
      <div className="evaluate">
        <button
          className="btn btn-secondary bg-secondary-dark secondary-text-color"
          onClick={this.handleEvaluate}
          disabled={!this.state.canEvaluate}
        >
          Calificar
          <img src={`/images/icons/evaluate.svg`} height="25px" alt="." />
        </button>
      </div>
    );
  }

  renderFeedback() {
    return (
      <Feedback
        feedback={this.state.feedback}
        buttonAction={this.handleFeedbackButton}
      />
    );
  }
}

export default Question;
