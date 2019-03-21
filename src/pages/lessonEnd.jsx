import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import trainingService from "../services/trainingService";
class LessonEnd extends Component {
  state = {};
  componentDidMount() {
    // trainingService.finishLesson();
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default LessonEnd;
