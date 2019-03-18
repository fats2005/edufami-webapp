import React, { Component } from "react";

import CardUnit from "../cards/cardUnit";

class BoxUnits extends Component {
  state = {
    training: {},
    units: []
  };

  render() {
    const { training, units } = this.props;
    return (
      <div className="box">
        <div className="box-title" style={{ backgroundColor: "#ffffff" }}>
          <div className="box-title-background-2">
            <h4>{training.name} / Unidades</h4>
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
