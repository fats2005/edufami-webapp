import React, { Component } from "react";
import trainingService from "../services/trainingService";

import BoxAchievements from "../components/boxes/boxAchievements";
import BoxTrainings from "../components/boxes/boxTrainings";

class Trainings extends Component {
  state = {
    trainings: []
  };

  async componentDidMount() {
    trainingService.finishLesson();
    await trainingService.getTrainingsData();
    const trainings = trainingService.getTrainings();
    this.setState({ trainings });
  }
  render() {
    const { trainings } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col-9">
            <BoxTrainings trainings={trainings} />
          </div>
          <div className="col-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Trainings;
