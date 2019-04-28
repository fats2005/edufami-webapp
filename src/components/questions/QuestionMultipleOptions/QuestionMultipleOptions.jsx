import React from "react";
import _ from "lodash";

import Question from "../Question/Question";

class QuestionMultipleOptions extends Question {
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
    // Parse to boolean
    const feedback = this.updateFeedback(!Boolean(wrongAnswers));
    this.setState({ feedback });
  };

  render() {
    const { options } = this.state;
    return (
      <React.Fragment>
        {this.renderQuestionBox(this.renderOptions(options), "Calificar")}
      </React.Fragment>
    );
  }
}

export default QuestionMultipleOptions;
