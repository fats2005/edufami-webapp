import React, { Component } from "react";
import Img from "../common/Img";

class Question extends Component {
  state = {};

  renderImage(image) {
    return (
      <div className="col col-lg-4">
        <Img src={image} className="card-img-left" alt="Opcion" />
      </div>
    );
  }
}

export default Question;
