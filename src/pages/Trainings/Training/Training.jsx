import React, { Component } from "react";

import Loader from "../../../components/common/Loader/Loader";
import BoxAchievements from "../../../components/boxes/boxAchievements";
import Box from "../../../components/common/Box/Box";
import CardUnit from "../../../components/cards/CardUnit/CardUnit";

import trainingService from "../../../services/trainingService";

class Training extends Component {
  state = {
    training: {},
    units: []
  };

  async componentDidMount() {
    await trainingService.getData("units");
    await trainingService.getData("lessons");
    const id = this.props.match.params.trainingId;
    const training = trainingService.getTraining(id);
    const units = await trainingService.getUnitsByTraining(id);
    this.setState({ training, units });
  }

  render() {
    const { training, units } = this.state;
    return (
      <div className="trainings">
        <Loader show={!units.length} />
        <div className="row">
          <div className="col-12 col-lg-9">
            <Box label={training.name + " / Unidades"}>
              {units.map(item => (
                <CardUnit
                  key={item.id}
                  unit={item}
                  numberOfLessons={trainingService.getNumberOfLessonsByUnit(
                    item.id
                  )}
                />
              ))}
            </Box>
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
