import React, { Component } from "react";

import Layout from "../../../containers/Layout/Layout";
import Loader from "../../../components/common/Loader/Loader";
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
      <React.Fragment>
        <Loader show={!units.length} />
        <Layout>
          <Box label={training.name + " / Unidades"} backgroundColor="#ffffff">
            <div className="row">
              {units.map(item => (
                <CardUnit
                  key={item.id}
                  unit={item}
                  numberOfLessons={trainingService.getNumberOfLessonsByUnit(
                    item.id
                  )}
                />
              ))}
            </div>
          </Box>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Training;
