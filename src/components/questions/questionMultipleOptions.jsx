import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import trainingService from "../../services/trainingService";

class QuestionMultipleOptions extends Component {
  state = {
    options: [],
    state: "initial",
    canEvaluate: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.state === "initial") {
      console.log("recargaPreguntas");
      const options = trainingService.getOptionsByStep(
        nextProps.currentStep.id
      );
      return { options, state: "process" };
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

  render() {
    const { currentStep, onGoNext } = this.props;
    const { options, canEvaluate } = this.state;

    return (
      <div className="row">
        <div className="col col-lg-4">
          <img
            src={`/images/options/1_u1l1_cf.svg`}
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
                onClick={onGoNext}
                disabled={!canEvaluate}
              >
                Calificar <FontAwesomeIcon icon="clipboard-check" size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionMultipleOptions;
