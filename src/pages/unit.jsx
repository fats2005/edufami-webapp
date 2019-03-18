import React, { Component } from "react";
import unitService from "../services/unitService";
import BoxAchievements from "../components/boxes/boxAchievements";
import BoxLessons from "../components/boxes/boxLessons";

class Unit extends Component {
  state = {
    unit: {},
    lessons: []
  };

  async componentDidMount() {
    const { data: unit } = await unitService.getUnit(
      this.props.match.params.unitId
    );

    const { data: lessons } = await unitService.getLessonsbyUnit(unit.id);
    this.setState({ unit, lessons });
  }

  render() {
    const { unit, lessons } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col col-9">
            <BoxLessons unit={unit} lessons={lessons} />
          </div>
          <div className="col col-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Unit;
