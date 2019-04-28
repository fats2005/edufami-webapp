import React, { Component } from "react";
import trainingService from "../../services/trainingService";

import BoxAchievements from "../../components/boxes/boxAchievements";
import Box from "../../components/common/Box/Box";
import CardTraining from "../../components/cards/CardTraining/CardTraining";

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
    if (!trainings.length) return null;
    return (
      <div>
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
