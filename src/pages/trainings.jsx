import React, { Component } from "react";
import _ from "lodash";
import trainingService from "../services/trainingService";

import BoxAchievements from "../components/boxes/boxAchievements";
import BoxTrainings from "../components/boxes/boxTrainings";

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
