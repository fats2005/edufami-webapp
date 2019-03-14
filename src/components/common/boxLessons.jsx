import React, { Component } from "react";
import { getLessonsByUnitId } from "../../services/fakeLessonService";
import CardLesson from "./cardLesson";

class BoxLessons extends Component {
  state = {
    lessons: []
  };

  componentDidMount() {
    const { unit } = this.props;
    const lessons = getLessonsByUnitId(unit.id);
    this.setState({ lessons });
  }
  render() {
    const { lessons } = this.state;
    const { unit } = this.props;
    return (
      <div className="box">
        <div className="box-title" style={{ backgroundColor: "#ffffff" }}>
          <div className="box-title-background-2">
            <h4>{unit.name} / Lecciones</h4>
          </div>
          <div className="box-body">
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
          </div>
        </div>
      </div>
    );
  }
}

export default BoxLessons;
