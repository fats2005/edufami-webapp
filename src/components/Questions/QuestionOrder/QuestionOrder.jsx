/* eslint-disable */
import React from "react";

import _ from "lodash";

import Question from "../Question/Question";
import classes from "../Question/Question.module.scss";

class QuestionOrder extends Question {
  constructor(state) {
    super(state);
    this.state.selectedCounter = 0;
  }
  onOptionSelected(option) {
    const options = [...this.state.options];
    const index = _.findIndex(options, option);

    option.selected = !option.selected;

    let selectedCounter = null;
    if (option.selected) {
      selectedCounter = this.state.selectedCounter + 1;
      option.selectedOrder = selectedCounter;
      options.splice(index, 1, option);
    } else {
      selectedCounter = this.state.selectedCounter - 1;
      const optionDeselected = option.selectedOrder;
      option.selectedOrder = null;
      options.splice(index, 1, option);
      options.map((o) => {
        if (o.selectedOrder > optionDeselected) return (o.selectedOrder = o.selectedOrder - 1);
        else return o.selectedOrder;
      });
    }

    const optionsOrdered = _.orderBy(options, "selectedOrder", "asc");

    this.updateEvaluateBottom();
    this.setState({ options: optionsOrdered, selectedCounter });
  }

  handleEvaluate = () => {
    const { options } = this.state;
    const { false: wrongAnswers } = _.countBy(
      options,
      (op) => Boolean(op.isCorrect) === (op.selected ? true : false)
    );
    // Parse to boolean
    const feedback = this.updateFeedback(!Boolean(wrongAnswers));
    this.setState({ feedback });
  };

  updateEvaluateBottom() {
    const { options } = this.state;
    const { true: selectedOptions } = _.countBy(options, (rec) => rec.selected);
    const canEvaluate = options.length === selectedOptions;
    this.setState({ canEvaluate });
  }

  renderOptions = (options) => {
    return (
      <div className={classes.Options}>
        {options.map((option) => (
          <button
            key={option.id}
            className={
              classes.Option +
              " btn btn-primary bg-primary-light " +
              (option.selected ? "active " : " ") +
              classes["Order" + option.order]
            }
            onClick={() => this.onOptionSelected(option)}
          >
            {option.selectedOrder} {option.text}
          </button>
        ))}
      </div>
    );
  };
  render() {
    const { options } = this.state;
    return <React.Fragment>{this.renderQuestionBox(this.renderOptions(options))}</React.Fragment>;
  }
}

export default QuestionOrder;
