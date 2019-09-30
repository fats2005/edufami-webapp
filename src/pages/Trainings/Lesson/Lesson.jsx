import React, { Component } from "react";

import Loader from "../../../common/loader";

import trainingService from "../../../services/trainingService";

class Lesson extends Component {
  async componentDidMount() {
    const { match, history } = this.props;
    const nextStep = await trainingService.getStepsByLesson(match.params.lessonId);
    if (nextStep) history.push(`/step/${nextStep[0].order}`);
    else history.goBack();
  }

  render() {
    return <Loader show />;
  }
}

export default Lesson;
