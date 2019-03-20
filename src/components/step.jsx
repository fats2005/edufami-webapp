import React, { Component } from "react";
import { Link } from "react-router-dom";
import trainingService from "../services/trainingService";

class Step extends Component {
  state = {
    currentStep: {},
    nextStep: {},
    orderId: 0
  };

  componentDidMount() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.match.params.orderId, prevState.orderId);
    if (nextProps.match.params.orderId !== prevState.orderId) {
      console.log("entra");
      const { orderId } = nextProps.match.params;
      const { currentStep, nextStep } = trainingService.getCurrentSteps(
        orderId
      );
      return { currentStep, nextStep, orderId };
    }
    return null;
  }

  render() {
    const { currentStep, nextStep } = this.state;
    console.log(nextStep);
    return (
      <div>
        <h3>currentStep</h3>
        <p>{currentStep.question}</p>
        <h3>nextStep</h3>
        <p>
          {nextStep && (
            <Link to={`/step/${nextStep.order}`}>Ir al siguiente paso</Link>
          )}
        </p>
      </div>
    );
  }
}

export default Step;
