import React, { Component } from "react";

import Loader from "../../../components/common/Loader/Loader";
import Box from "../../../components/common/Box/Box";
import CardLesson from "../../../components/cards/CardLesson/CardLesson";

import trainingService from "../../../services/trainingService";
import Layout from "../../../containers/Layout/Layout";

class Unit extends Component {
  state = {
    unit: {},
    lessons: []
  };

  async componentDidMount() {
    const unitId = this.props.match.params.unitId;
    const unit = trainingService.getUnit(unitId);
    const lessons = await trainingService.getLessonsByUnit(unitId);
    this.setState({ unit, lessons });
  }

  render() {
    const { unit, lessons } = this.state;
    return (
      <React.Fragment>
        <Loader show={!lessons.length} />
        <Layout>
          <Box label={unit.name + "/ Lecciones"}>
            <div className="row">
              {lessons.map(item => (
                <CardLesson
                  key={item.id}
                  trainingId={unit.trainingId}
                  unitId={unit.id}
                  lesson={item}
                />
              ))}
            </div>
          </Box>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Unit;
