import React, { Component } from "react";

import Layout from "../../containers/Layout/Layout";
import Loader from "../../components/common/Loader/Loader";
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
      <React.Fragment>
        <Loader show={!trainings.length} />
        <Layout>
          <Box label="Mis Capacitaciones" backgroundColor="#ffffff">
            <div className="row">
              {trainings.map(item => (
                <CardTraining key={item.id} data={item} />
              ))}
            </div>
          </Box>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Trainings;
