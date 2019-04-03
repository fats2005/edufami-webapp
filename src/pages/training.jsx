import React, { Component } from "react";

import BoxAchievements from "../components/boxes/boxAchievements";
import BoxUnits from "../components/boxes/boxUnits";

import trainingService from "../services/trainingService";

class Training extends Component {
  state = {
    training: {},
    units: []
  };

  async componentDidMount() {
    const id = this.props.match.params.trainingId;
    const training = trainingService.getTraining(id);
    const units = trainingService.getUnitsByTraining(id);
    this.setState({ training, units });
  }

  render() {
    const { training, units } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col-12 col-lg-9">
            <BoxUnits training={training} units={units} />
          </div>
          <div className="col-12 col-lg-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Training;
