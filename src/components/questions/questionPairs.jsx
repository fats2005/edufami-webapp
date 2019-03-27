import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import Feedback from "./feedback";
import trainingService from "../../services/trainingService";
import Img from "../common/Img";

class QuestionPairs extends Component {
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

  onOptionSelected(option) {
    let options = [...this.state.options];
    const index = _.findIndex(options, option);
    const columnCounter = [...this.state.columnCounter];
    if (option.selected) {
      columnCounter[option.column]--;
    } else {
      columnCounter[option.column]++;
      option["order"] = columnCounter[option.column];
    }

    option["selected"] = !option.selected;

    options.splice(index, 1, option);
    this.updateEvaluateBottom();

    this.setState({ options, columnCounter });
  }

  updateEvaluateBottom() {
    const { options } = this.state;
    const { true: selectedOptions } = _.countBy(options, rec => rec.selected);
    const canEvaluate = selectedOptions === options.length ? true : false;
    this.setState({ canEvaluate });
  }

  handleEvaluate = () => {
    const { options } = this.state;
    // Counting the wrong answers
    const columnA = _.filter(options, o => o.column === 0);
    const columnB = _.filter(options, o => o.column === 1);

    const columnAMapped = _.map(columnA, item => {
      return { order: item.order, pair: item.pair };
    });
    const columnBMapped = _.map(columnB, item => {
      return { order: item.order, pair: item.pair };
    });

    const columnAOrdered = _.orderBy(columnAMapped, "order", "asc");
    const columnBOrdered = _.orderBy(columnBMapped, "order", "asc");

    const feedback = this.updateFeedback(
      _.isEqual(columnAOrdered, columnBOrdered)
    );

    this.setState({ feedback });
  };

  updateFeedback = isOk => {
    const { options } = this.state;
    // Filtring the options to extract the feedbacks
    const filtered = _.filter(options, o => o.isCorrect === isOk);

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
            <div className="options pairs">
              <div className="column-a">
                <h6>Columna A</h6>
                {options.map(option => {
                  if (!option.column) {
                    return (
                      <button
                        key={option.id}
                        className={
                          "btn btn-primary bg-primary-light option " +
                          (option.selected ? "active " : " ") +
                          ("order-" + option.order)
                        }
                        onClick={() => this.onOptionSelected(option)}
                        disabled={option.selected}
                      >
                        {option.text}
                      </button>
                    );
                  } else {
                    return;
                  }
                })}
              </div>

              <div className="column-b">
                <h6>Columna B</h6>
                {options.map(option => {
                  if (option.column) {
                    return (
                      <button
                        key={option.id}
                        className={
                          "btn btn-primary bg-primary-light option " +
                          (option.selected ? "active " : " ") +
                          ("order-" + option.order)
                        }
                        onClick={() => this.onOptionSelected(option)}
                        disabled={option.selected}
                      >
                        {option.text}
                      </button>
                    );
                  } else {
                    return;
                  }
                })}
              </div>
            </div>

            <div className="evaluate">
              <button
                className="btn btn-secondary bg-secondary-dark secondary-text-color"
                onClick={this.handleEvaluate}
                disabled={!canEvaluate}
              >
                Calificar
                <img src={`/images/icons/evaluate.svg`} height="25px" alt="." />
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

export default QuestionPairs;
