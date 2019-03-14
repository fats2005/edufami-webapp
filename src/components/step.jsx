import React, { Component } from "react";

class Step extends Component {
  state = { title: "Step" };
  render() {
    return <h3>{this.state.title}</h3>;
  }
}

export default Step;
