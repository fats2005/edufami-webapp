import React, { Component } from "react";
import { getUnit } from "../services/fakeUnitService";
import BoxAchievements from "./common/boxAchievements";
import BoxLessons from "./common/boxLessons";

class Unit extends Component {
  state = {
    unit: getUnit(this.props.match.params.unitId)
  };

  render() {
    const { unit } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col col-9">
            <BoxLessons unit={unit} />
          </div>
          <div className="col col-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Unit;
