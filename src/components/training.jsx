import React, { Component } from "react";
import { getTraining } from "../services/fakeTrainingService";

class Training extends Component {
  state = {
    training: getTraining(this.props.match.params.id)
  };
  handleSave = () => {
    this.props.history.replace("/trainings");
  };

  render() {
    const { training } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <h1>
                      {this.props.match.params.id} - {training.name}
                    </h1>
                    <p>{training.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Training;
