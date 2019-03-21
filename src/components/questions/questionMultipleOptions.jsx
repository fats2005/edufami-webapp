import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import trainingService from "../../services/trainingService";

class QuestionMultipleOptions extends Component {
  state = {
    options: [],
    state: "initial",
    canEvaluate: false,
    feedback: {
      show: false,
      isGood: false
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (prevState.state === "initial") {
      console.log("recargaPreguntas");
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
    const { false: wrongAnswers } = _.countBy(
      options,
      op => op.isCorrect === (op.selected ? true : false)
    );

    const feedback = this.updateFeedback(wrongAnswers ? true : false);

    this.setState({ feedback });
  };

  updateFeedback = isWrong => {
    let feedback = {
      show: true,
      label: "¡Correcto!",
      text: "text",
      buttonText: "Continuar",
      icon: "step_correct.svg",
      isGood: true
    };

    if (isWrong) {
      feedback.label = "¡Intentar de Nuevo!";
      feedback.text = "Feedback Negativo";
      feedback.buttonText = "Volver a Intentar";
      feedback.icon = "step_incorrect.svg";
      feedback.isGood = false;
    }
    return feedback;
  };

  handleFeedbackButton = () => {
    const { feedback } = this.state;
    feedback.show = false;
    this.setState({ state: "initial" });
    if (feedback.isGood) {
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
          <img
            src={`/images/${currentStep.image}`}
            className="card-img-left"
            alt="Opcion"
          />
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
            <div className={"feedback " + (feedback.show ? "isVisible" : "")}>
              <h3>{feedback.label}</h3>
              {/* <p>{feedback.text}</p> */}
              <p>
                <img
                  src={`/images/icons/${feedback.icon}`}
                  height="75px"
                  alt="Opcion"
                />
              </p>
              <button
                className="btn btn-secondary btn-lg"
                onClick={this.handleFeedbackButton}
              >
                {feedback.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionMultipleOptions;
