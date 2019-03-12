import React from "react";
import { Link } from "react-router-dom";

const CardTraining = ({ col, data }) => {
  console.log(data);
  return (
    <div className={"col col-" + col}>
      <Link to={`/trainings/${data.id}`}>
        <div className="card">
          <img
            src={require("../../images/" + data.image)}
            className="card-img-top"
            alt={data.name}
          />
          <div className="card-body">
            <p className="card-text">{data.name}</p>
          </div>
          <div className="card-app">
            <img
              src={require(`../../images/${data.app}_small_logo.svg`)}
              alt={data.app}
              width="50"
            />
          </div>
          <div className="card-bottom" />
          <div className="card-bottom-2" />
        </div>
      </Link>
    </div>
  );
};

export default CardTraining;
