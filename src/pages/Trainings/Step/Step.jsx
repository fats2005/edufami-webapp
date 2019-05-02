import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import trainingService from "../../../services/trainingService";
import QuestionInfo from "../../../components/Questions/QuestionInfo/QuestionInfo";
import QuestionMultipleOptions from "../../../components/Questions/QuestionMultipleOptions/QuestionMultipleOptions";
import QuestionPairs from "../../../components/Questions/QuestionPairs/QuestionPairs";
import QuestionOrder from "../../../components/Questions/QuestionOrder/QuestionOrder";

class Step extends Component {
  state = {
    currentStep: {},
    nextStep: {},
    orderId: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.orderId !== prevState.orderId) {
      const { orderId } = nextProps.match.params;
      const { currentStep, nextStep } = trainingService.getCurrentSteps(
        orderId
      );
      const totalQuestions = trainingService.getNumberOfStepsofCurrentLesson();
      return { currentStep, nextStep, orderId, totalQuestions };
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

  chooseQuestion() {
    const { currentStep, nextStep, totalQuestions } = this.state;
    const option = parseInt(currentStep.type);
    console.log(option);
    if (option === 1)
      return (
        <QuestionInfo
          currentStep={currentStep}
          nextStep={nextStep}
          onExit={this.handleExit}
          onGoNext={this.handleGoNext}
          totalQuestions={totalQuestions}
        />
      );
    else if (option === 2)
      return (
        <QuestionMultipleOptions
          currentStep={currentStep}
          nextStep={nextStep}
          onExit={this.handleExit}
          onGoNext={this.handleGoNext}
          totalQuestions={totalQuestions}
        />
      );
    else if (option === 3)
      return (
        <QuestionMultipleOptions
          currentStep={currentStep}
          nextStep={nextStep}
          onExit={this.handleExit}
          onGoNext={this.handleGoNext}
          totalQuestions={totalQuestions}
        />
      );
    else if (option === 4)
      return (
        <QuestionMultipleOptions
          currentStep={currentStep}
          nextStep={nextStep}
          onExit={this.handleExit}
          onGoNext={this.handleGoNext}
          totalQuestions={totalQuestions}
        />
      );
    else if (option === 5)
      return (
        <QuestionPairs
          currentStep={currentStep}
          nextStep={nextStep}
          onExit={this.handleExit}
          onGoNext={this.handleGoNext}
          totalQuestions={totalQuestions}
        />
      );
    else if (option === 6)
      return (
        <QuestionOrder
          currentStep={currentStep}
          nextStep={nextStep}
          onExit={this.handleExit}
          onGoNext={this.handleGoNext}
          totalQuestions={totalQuestions}
        />
      );
    else return this.handleGoNext();
  }

  render() {
    const { currentStep } = this.state;
    if (!currentStep) return <Redirect to="/" />;
    return this.chooseQuestion();
  }
}

export default Step;
