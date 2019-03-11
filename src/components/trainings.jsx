import React, { Component } from "react";
import { getTrainings } from "../services/fakeTrainingService";
import ico from "../images/badgets/icons-gray/ico_gray_1.png"; // Tell Webpack this JS file uses this image
import medal from "../images/badgets/flags/ico_flag_1.png"; // Tell Webpack this JS file uses this image
import { getProgress } from "../services/fakeProgressService";
import { Link } from "react-router-dom";

class Trainings extends Component {
  state = {
    trainings: getTrainings(),
    progress: getProgress()
  };
  render() {
    const { trainings, progress } = this.state;
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
                          src={ico}
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
            <div className="card">
              <div className="card-body">
                <h4>Progreso</h4>
                {progress.map(p => (
                  <img
                    key={p.id}
                    className="m-1"
                    src={medal}
                    alt={p.name}
                    width="60px"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trainings;
