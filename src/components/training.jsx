import React, { Component } from "react";
import BoxAchievements from "./common/boxAchievements";
import BoxUnits from "./common/boxUnits";
import { getTraining } from "../services/fakeTrainingService";

class Training extends Component {
  state = {
    training: getTraining(this.props.match.params.id)
  };

  render() {
    const { training } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col col-9">
            <BoxUnits training={training} />
          </div>
          <div className="col col-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Training;
