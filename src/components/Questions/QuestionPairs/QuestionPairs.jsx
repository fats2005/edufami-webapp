import React from "react";
import _ from "lodash";

import Question from "../Question/Question";
import classes from "../Question/Question.module.scss";

class QuestionPairs extends Question {
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

  render() {
    const { options } = this.state;
    const columnA = _.filter(options, o => o.column === 0);
    const columnB = _.filter(options, o => o.column === 1);

    return (
      <React.Fragment>
        {this.renderQuestionBox(
          <div className={classes.Pairs}>
            {this.renderOptions(columnA, true, "Columna A")}
            {this.renderOptions(columnB, true, "Columna B")}
          </div>,
          "Calificar"
        )}
      </React.Fragment>
    );
  }
}

export default QuestionPairs;
