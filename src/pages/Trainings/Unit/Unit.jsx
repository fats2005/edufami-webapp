import React, { Component } from "react";
import trainingService from "../../../services/trainingService";
import BoxAchievements from "../../../components/boxes/boxAchievements";
import Box from "../../../components/common/Box/Box";
import CardLesson from "../../../components/cards/CardLesson/CardLesson";

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
      <div className="trainings">
        <div className="row">
          <div className="col-12 col-lg-9">
            <Box label={unit.name + "/ Lecciones"}>
              {lessons.map(item => (
                <CardLesson
                  key={item.id}
                  trainingId={unit.trainingId}
                  unitId={unit.id}
                  lesson={item}
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

export default Unit;
