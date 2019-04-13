import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuestionInfo from "./questionInfo";
import QuestionMultipleOptions from "./questionMultipleOptions";
import QuestionPairs from "./questionPairs";
import Modal from "../common/Modal";
import trainingService from "../../services/trainingService";
import "./questionBox.scss";

class QuestionBox extends Component {
  state = {
    totalQuestions: 0
  };

  componentDidMount() {
    this.setState({
      totalQuestions: trainingService.getNumberOfStepsofCurrentLesson()
    });
  }

  renderModal() {
    const { onExit } = this.props;
    const modalButtons = [
      {
        label: "Salir",
        className: "btn btn-secondary",
        onClick: onExit
      },
      {
        label: "Continuar",
        className: "btn btn-primary",
        "data-dismiss": "modal"
      }
    ];
    return (
      <Modal
        title={"¿Está seguro de salir?"}
        text={"Si sale perderá el progreso"}
        closeButton={false}
        buttons={modalButtons}
      />
    );
  }

  chooseQuestion(type) {
    const { currentStep, onGoNext } = this.props;
    switch (parseInt(type)) {
      case 1:
        return <QuestionInfo currentStep={currentStep} onGoNext={onGoNext} />;
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
      case 5:
        return <QuestionPairs currentStep={currentStep} onGoNext={onGoNext} />;
      default:
        return onGoNext();
    }
  }
  render() {
    const { currentStep, onExit } = this.props;
    const { totalQuestions, modalButtons } = this.state;
    return (
      <div className="row question-container">
        <div className="col-12">
          <div className="question-box bg-primary">
            {/* <div className="question-info bg-secondary">
              <Img
                src={currentStep.image}
                className="card-lesson-img-top"
                alt={currentStep.name}
              />
            </div> */}
            <button
              type="button"
              className="btn btn-secondary btn-exit"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <FontAwesomeIcon icon="times" />
            </button>
            <div className="question-body">
              <div className="instruction bg-secondary-light">
                <h4>{currentStep.instruction}</h4>
              </div>
              {this.chooseQuestion(currentStep.type)}
            </div>
            <div className="question-footer">
              <div className="box-progress">
                <span>{`${currentStep.order}/${totalQuestions}`}</span>
                <div className="progress">
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
          </div>
        </div>
        {this.renderModal()}
      </div>
    );
  }
}

export default QuestionBox;
