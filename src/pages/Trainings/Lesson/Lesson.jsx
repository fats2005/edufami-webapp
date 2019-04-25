import React, { Component } from "react";
import trainingService from "../../../services/trainingService";

class Lesson extends Component {
  componentDidMount() {
    const lessonId = this.props.match.params.lessonId;
    const nextStep = trainingService.getStepsByLesson(lessonId)[0];

    if (nextStep) this.props.history.push(`/step/${nextStep.order}`);
    else this.props.history.goBack();
  }

  render() {
    return <p />;
  }
}

export default Lesson;
