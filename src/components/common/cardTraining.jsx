import React from "react";
import { Link } from "react-router-dom";

import "./cardTraining.scss";

const CardTraining = ({ col, data }) => {
  return (
    <div className={"card-training col col-" + col}>
      <Link to={`/trainings/${data.id}`}>
        <div className="card secondary-text-color">
          <img
            src={require("../../images/" + data.image)}
            className="card-img-top"
            alt={data.name}
          />
          <div className="card-body bg-secondary">
            <p className="card-text">{data.name}</p>
          </div>
          <div className="card-app">
            <img
              src={require(`../../images/${data.app}_small_logo.svg`)}
              alt={data.app}
              width="50"
            />
          </div>
          <div className="card-bottom bg-secondary-light" />
          <div className="card-bottom-2 bg-secondary-dark" />
        </div>
      </Link>
    </div>
  );
};

CardTraining.defaultProps = {
  col: 4
};

export default CardTraining;
