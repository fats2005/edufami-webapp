import React, { Component } from "react";

import Loader from "../../../common/loader";
import auth from "../../../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }

  render() {
    return <Loader show />;
  }
}

export default Logout;
