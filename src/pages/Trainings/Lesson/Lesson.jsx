import React, { Component } from "react";

import Loader from "../../../components/common/Loader/Loader";

import trainingService from "../../../services/trainingService";

class Lesson extends Component {
  async componentDidMount() {
    const lessonId = this.props.match.params.lessonId;
    const nextStep = await trainingService.getStepsByLesson(lessonId);
    if (nextStep) this.props.history.push(`/step/${nextStep[0].order}`);
    else this.props.history.goBack();
  }

  render() {
    return <Loader show={true} />;
  }
}

export default Lesson;
