import React, { Component } from "react";
import CardLesson from "../cards/cardLesson";

class BoxLessons extends Component {
  render() {
    const { unit, lessons } = this.props;
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
