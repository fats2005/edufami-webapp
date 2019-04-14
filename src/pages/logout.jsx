import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return <p>Logout :)</p>;
  }
}

export default Logout;
