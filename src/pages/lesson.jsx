import React, { Component } from "react";
import trainingService from "../services/trainingService";

class Lesson extends Component {
  componentDidMount() {
    const lessonId = this.props.match.params.lessonId;
    const nextStep = trainingService.getStepsByLesson(lessonId)[0];
    this.props.history.replace(`/step/${nextStep.order}`);
  }

  render() {
    return <h1>Lesson</h1>;
  }
}

export default Lesson;
