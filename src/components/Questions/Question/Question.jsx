import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import Feedback from "../Feedback/Feedback";
import Img from "../../../common/img";
import Modal from "../../../common/Modal/Modal";

import trainingService from "../../../services/trainingService";
import classes from "../Question/Question.module.scss";

class Question extends Component {
  state = {
    options: [],
    state: "initial",
    canEvaluate: false,
    columnCounter: [0, 0],
    timerPosition: 0,

    feedback: {
      show: false
    }
  };

  timer = {
    phase: 200,
    seconds: 5,
    instance: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("getDerived");
    if (prevState.state === "initial") {
      const options = trainingService.getOptionsByStep(nextProps.currentStep.id);
      return {
        options,
        state: "process",
        canEvaluate: false,
        columnCounter: [0, 0]
      };
    }
    return null;
  }

  startTimer() {
    let number = 0;
    let { phase, seconds } = this.timer;
    this.timer.instance = setInterval(() => {
      this.setState({ timerPosition: number++ });
      if (number > (1000 / phase) * seconds) {
        clearInterval(this.timer.instance);
        this.setState({ canEvaluate: true });
      }
    }, phase);
  }

  handleEvaluate = () => {
    this.setState({ state: "initial" });
    this.props.onGoNext();
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

  updateFeedback = isOk => {
    const { options } = this.state;
    const filtered = _.filter(options, o => Boolean(o.isCorrect) === isOk && o.selected);

    let feedback = {
      show: true,
      text: filtered[0].feedback,
      status: isOk ? "good" : "bad"
    };

    return feedback;
  };

  // Render methods
  renderQuestionBox(content, labelEvaluate, hasFeedback = true) {
    const { currentStep } = this.props;
    return (
      <div className={classes.Container}>
        <div className={classes.Box + " bg-primary"} id="questionBox">
          {this.renderModalExit()}
          <div className={classes.Body}>
            <div className={classes.Instruction + " bg-secondary-light"}>
              <h4 id="questionInstruction">{currentStep.instruction}</h4>
            </div>
            <div className={classes.Row}>
              {this.renderImage(currentStep.image, currentStep.text)}
              <div className={classes.Question}>
                {this.renderQuestion(currentStep.question)}
                {/* TODO -- Add audio and icon */}
                {content}
                {this.renderEvaluate(labelEvaluate)}
                {hasFeedback && this.renderFeedback()}
              </div>
            </div>
          </div>
          {this.renderProgress()}
        </div>
      </div>
    );
  }

  renderImage(image, alt) {
    return <Img src={image} className={classes.Img} alt={alt} />;
  }

  renderQuestion(text) {
    return (
      <div id="questionText">
        <p>{text}</p>
      </div>
    );
  }

  renderOptions(options, isPair = false, label) {
    return (
      <div className={classes.Options}>
        {label && <h6>{label}</h6>}
        {options.map(option => (
          <button
            key={option.id}
            className={
              classes.Option +
              " btn btn-primary bg-primary-light " +
              (option.selected ? "active " : " ") +
              classes["Order" + option.order]
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

  renderEvaluate(label = "Calificar") {
    return (
      <div className={classes.Evaluate}>
        <button
          className={classes.Btn + " btn btn-secondary bg-secondary-dark secondary-text-color"}
          onClick={this.handleEvaluate}
          disabled={!this.state.canEvaluate}
          id="evaluateButton"
        >
          {label}
          <img src={`/images/icons/evaluate.svg`} height="25px" alt="." />
        </button>
      </div>
    );
  }

  renderFeedback() {
    return <Feedback feedback={this.state.feedback} buttonAction={this.handleFeedbackButton} />;
  }

  renderModalExit() {
    const { onExit } = this.props;
    const modalButtons = [
      {
        label: "Salir",
        className: "btn btn-secondary",
        onClick: onExit,
        "data-dismiss": "modal"
      },
      {
        label: "Continuar",
        className: "btn btn-primary",
        "data-dismiss": "modal"
      }
    ];
    return (
      <React.Fragment>
        <button
          type="button"
          className={classes.Exit + " btn btn-secondary"}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <Modal
          id="modalExit"
          title={"¿Está seguro de salir?"}
          text={"Si sale perderá el progreso"}
          closeButton={false}
          buttons={modalButtons}
        />
      </React.Fragment>
    );
  }

  renderProgress() {
    const { currentStep, totalQuestions } = this.props;
    return (
      <div className={classes.Footer}>
        <div className={classes.BoxProgress}>
          <span>{`${currentStep.order}/${totalQuestions}`}</span>
          <div className={classes.Progress + " progress"}>
            <div
              className="progress-bar bg-secondary"
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
    );
  }
}

export default Question;
