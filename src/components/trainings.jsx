import React, { Component } from "react";

import BoxAchievements from "./common/boxAchievements";
import BoxTrainings from "./common/boxTrainings";

class Trainings extends Component {
  render() {
    return (
      <div className="trainings">
        <div className="row">
          <div className="col-9">
            <BoxTrainings />
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
