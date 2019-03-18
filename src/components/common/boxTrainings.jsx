import React from "react";
import CardTraining from "./cardTraining";

const BoxTrainings = ({ trainings }) => {
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
};

export default BoxTrainings;
