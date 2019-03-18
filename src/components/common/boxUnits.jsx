import React, { Component } from "react";
import { getUnitsByTrainingId } from "../../services/fakeUnitService";
import CardUnit from "./cardUnit";

class BoxUnits extends Component {
  state = {
    units: []
  };

  componentDidMount() {
    const { training } = this.props;
    const units = getUnitsByTrainingId(training.id);
    this.setState({ units });
  }
  render() {
    const { units } = this.state;
    const { training } = this.props;
    return (
      <div className="box">
        <div className="box-title" style={{ backgroundColor: "#ffffff" }}>
          <div className="box-title-background-2">
            {/* <h4>{training.name} / Unidades</h4> */}
          </div>
          <div className="box-body">
            <div className="row">
              {units.map(item => (
                <CardUnit key={item.id} unit={item} trainingId={training.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxUnits;
