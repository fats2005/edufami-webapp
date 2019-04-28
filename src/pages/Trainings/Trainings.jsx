import React, { Component } from "react";

import Loader from "../../components/common/Loader/Loader";
import BoxAchievements from "../../components/boxes/boxAchievements";
import Box from "../../components/common/Box/Box";
import CardTraining from "../../components/cards/CardTraining/CardTraining";

import trainingService from "../../services/trainingService";

class Trainings extends Component {
  state = {
    trainings: []
  };

  async componentDidMount() {
    const trainings = await trainingService.getData("trainings");
    this.setState({ trainings });
  }
  render() {
    const { trainings } = this.state;

    return (
      <div>
        <Loader show={!trainings.length} />
        <div className="row">
          <div className="col-12 col-lg-9">
            <Box label="Mis Capacitaciones">
              {trainings.map(item => (
                <CardTraining key={item.id} data={item} />
              ))}
            </Box>
          </div>
          <div className="col col-lg-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Trainings;
