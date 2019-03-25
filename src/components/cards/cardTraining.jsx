import React from "react";
import { Link } from "react-router-dom";

import Img from "../common/Img";

import "./cardTraining.scss";

const CardTraining = ({ col, data }) => {
  return (
    <div className={"card-training col col-" + col}>
      <Link
        className="card secondary-text-color bg-secondary"
        to={`/trainings/${data.id}`}
      >
        <Img srcName={data.image} className="card-img-top" alt={data.name} />
        <div className="card-body bg-secondary">
          <p className="card-text">{data.name}</p>
        </div>
        <div className="card-app">
          <img
            src={`/images/${data.app}_small_logo.svg`}
            alt={data.app}
            width="50"
          />
        </div>
        <div className="card-bottom bg-secondary-light" />
        <div className="card-bottom-2 bg-secondary-dark" />
      </Link>
    </div>
  );
};

CardTraining.defaultProps = {
  col: 4
};

export default CardTraining;
