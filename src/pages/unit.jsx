import React, { Component } from "react";
import trainingService from "../services/trainingService";
import BoxAchievements from "../components/boxes/boxAchievements";
import BoxLessons from "../components/boxes/boxLessons";

class Unit extends Component {
  state = {
    unit: {},
    lessons: []
  };

  async componentDidMount() {
    const unitId = this.props.match.params.unitId;
    const unit = trainingService.getUnit(unitId);
    const lessons = trainingService.getLessonsByUnit(unitId);

    this.setState({ unit, lessons });
  }

  render() {
    const { unit, lessons } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col-12 col-lg-9">
            <BoxLessons unit={unit} lessons={lessons} />
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
