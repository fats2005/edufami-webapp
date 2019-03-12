import React, { Component } from "react";
import { getTrainings } from "../services/fakeTrainingService";
import { getProgress } from "../services/fakeProgressService";
import { Link } from "react-router-dom";
import BoxAchievements from "./common/boxAchievements";

class Trainings extends Component {
  state = {
    trainings: getTrainings(),
    progress: getProgress()
  };
  render() {
    const { trainings } = this.state;
    return (
      <div className="trainings">
        <div className="row">
          <div className="col-9">
            <div className="card">
              <div className="card-body">
                <h3>Capacitaciones Activas</h3>
                <div className="row">
                  {trainings.map(training => (
                    <div key={training.id} className="col-4">
                      <div className="card card-training">
                        <img
                          className="mx-auto"
                          alt={training.name}
                          width="40%"
                        />
                        <div className="card-body">
                          <h6 className="card-title">{training.name}</h6>
                          <div className="card-text">
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{ width: training.progress + "%" }}
                                aria-valuenow={training.progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </div>
                          <Link
                            to={"/trainings/" + training.id}
                            className="btn btn-primary"
                          >
                            INICIAR
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <BoxAchievements />
          </div>
        </div>
      </div>
    );
  }
}

export default Trainings;
