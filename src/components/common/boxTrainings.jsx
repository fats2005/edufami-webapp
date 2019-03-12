import React, { Component } from "react";
import { getTrainings } from "../../services/fakeTrainingService";
import CardTraining from "./cardTraining";

class BoxTrainings extends Component {
  state = {
    trainings: getTrainings()
  };
  render() {
    const { trainings } = this.state;
    return (
      <div className="box">
        <div className="box-title" style={{ backgroundColor: "#ffffff" }}>
          <div className="box-title-background-2">
            <h4>Mis Capacitaciones</h4>
          </div>
          <div className="box-body">
            <div className="row">
              {trainings.map(item => (
                <CardTraining key={item.id} col="4" data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxTrainings;
