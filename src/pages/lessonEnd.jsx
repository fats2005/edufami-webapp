import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import trainingService from "../services/trainingService";
class LessonEnd extends Component {
  state = {};
  componentDidMount() {
    console.log("LessonENd cdm");
    trainingService.finishLesson();
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default LessonEnd;
