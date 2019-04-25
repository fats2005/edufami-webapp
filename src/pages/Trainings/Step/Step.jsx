import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import trainingService from "../../../services/trainingService";
import QuestionBox from "../../../components/questions/questionBox";

class Step extends Component {
  state = {
    currentStep: {},
    nextStep: {},
    orderId: 0
  };

  componentDidMount() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.orderId !== prevState.orderId) {
      const { orderId } = nextProps.match.params;
      const { currentStep, nextStep } = trainingService.getCurrentSteps(
        orderId
      );
      return { currentStep, nextStep, orderId };
    }
    return null;
  }

  finishLesson = () => {
    trainingService.finishLesson();
    this.props.history.push("/lesson/end");
  };

  handleExit = () => {
    trainingService.finishLesson();
    this.props.history.push("/");
  };

  handleGoNext = () => {
    const { nextStep } = this.state;
    if (nextStep) return this.props.history.push(`/step/${nextStep.order}`);

    this.finishLesson();
  };

  render() {
    const { currentStep, nextStep } = this.state;
    if (!currentStep) return <Redirect to="/" />;
    return (
      <QuestionBox
        currentStep={currentStep}
        nextStep={nextStep}
        onExit={this.handleExit}
        onGoNext={this.handleGoNext}
      />
    );
  }
}

export default Step;
