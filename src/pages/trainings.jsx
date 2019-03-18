import React, { Component } from "react";
import _ from "lodash";
import trainingService from "../services/trainingService";

import BoxAchievements from "../components/common/boxAchievements";
import BoxTrainings from "../components/common/boxTrainings";

class Trainings extends Component {
  state = {
    trainings: []
  };
  async componentDidMount() {
    const { data } = await trainingService.getTrainings();
    const trainings = _.orderBy(data, "created", "desc");
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
