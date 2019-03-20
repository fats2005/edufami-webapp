import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import trainingService from "../services/trainingService";
import Questions from "../components/questions/question";

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

  handleFinishLesson() {
    trainingService.finishLesson();
    window.location = "/lesson/end";
  }

  render() {
    const { currentStep, nextStep } = this.state;
    if (!currentStep) return <Redirect to="/" />;
    return <Questions currentStep={currentStep} nextStep={nextStep} />;
  }
}

export default Step;
