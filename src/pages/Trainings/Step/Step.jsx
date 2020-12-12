import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import trainingService from "../../../services/trainingService";
import QuestionInfo from "../../../components/Questions/QuestionInfo/QuestionInfo";
import QuestionMultipleOptions from "../../../components/Questions/QuestionMultipleOptions/QuestionMultipleOptions";
import QuestionPairs from "../../../components/Questions/QuestionPairs/QuestionPairs";
import QuestionOrder from "../../../components/Questions/QuestionOrder/QuestionOrder";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: {},
      nextStep: {},
      orderId: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.orderId !== prevState.orderId) {
      const { orderId } = nextProps.match.params;
      const { currentStep, nextStep } = trainingService.getCurrentSteps(orderId);
      const totalQuestions = trainingService.getNumberOfStepsofCurrentLesson();
      return { currentStep, nextStep, orderId, totalQuestions };
    }
    return null;
  }

  finishLesson = () => {
    const { history } = this.props;
    trainingService.finishLesson();
    history.push("/lesson/end");
  };

  handleExit = () => {
    const { history } = this.props;
    trainingService.finishLesson();
    history.push("/");
  };

  handleGoNext = () => {
    const { nextStep } = this.state;
    const { history } = this.props;
    if (nextStep) return history.push(`/step/${nextStep.order}`);
    this.finishLesson();
    return null;
  };

  chooseQuestion() {
    const { currentStep, nextStep, totalQuestions } = this.state;
    const option = parseInt(currentStep.type, 10);
    switch (option) {
      case 1:
        return (
          <QuestionInfo
            currentStep={currentStep}
            nextStep={nextStep}
            onExit={this.handleExit}
            onGoNext={this.handleGoNext}
            totalQuestions={totalQuestions}
          />
        );
      case 2:
        return (
          <QuestionMultipleOptions
            currentStep={currentStep}
            nextStep={nextStep}
            onExit={this.handleExit}
            onGoNext={this.handleGoNext}
            totalQuestions={totalQuestions}
          />
        );

      case 3:
        return (
          <QuestionMultipleOptions
            currentStep={currentStep}
            nextStep={nextStep}
            onExit={this.handleExit}
            onGoNext={this.handleGoNext}
            totalQuestions={totalQuestions}
          />
        );

      case 4:
        return (
          <QuestionMultipleOptions
            currentStep={currentStep}
            nextStep={nextStep}
            onExit={this.handleExit}
            onGoNext={this.handleGoNext}
            totalQuestions={totalQuestions}
          />
        );
      case 5:
        return (
          <QuestionPairs
            currentStep={currentStep}
            nextStep={nextStep}
            onExit={this.handleExit}
            onGoNext={this.handleGoNext}
            totalQuestions={totalQuestions}
          />
        );
      case 6:
        return (
          <QuestionOrder
            currentStep={currentStep}
            nextStep={nextStep}
            onExit={this.handleExit}
            onGoNext={this.handleGoNext}
            totalQuestions={totalQuestions}
          />
        );

      default:
        return this.handleGoNext();
    }
  }

  render() {
    const { currentStep } = this.state;
    if (!currentStep) return <Redirect to="/" />;
    return this.chooseQuestion();
  }
}

export default Step;
