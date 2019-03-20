import React, { Component } from "react";
import trainingService from "../services/trainingService";

class Lesson extends Component {
  componentDidMount() {
    const lessonId = this.props.match.params.lessonId;
    const nextStep = trainingService.getStepsByLesson(lessonId)[0];
    trainingService.startLesson();
    window.location = `/step/${nextStep.order}`;
  }

  render() {
    return <p />;
  }
}

export default Lesson;
