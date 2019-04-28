import React, { Component } from "react";

import Loader from "../../../components/common/Loader/Loader";
import auth from "../../../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
  render() {
    return <Loader show={true} />;
  }
}

export default Logout;
