import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faMedal,
  faCertificate,
  faShare,
  faTasks,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

import Trainings from "./pages/trainings";
import NavBar from "./components/common/navBar";
import Footer from "./components/common/Footer";
import Training from "./components/training";
import Unit from "./components/unit";
import Step from "./components/step";
import About from "./components/about";
import Progress from "./components/progress";
import NotFound from "./components/notFound";

import "./App.scss";

library.add(faUserCircle, faMedal, faCertificate, faShare, faTasks, faDownload);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route
              path="/trainings/:trainingId/:unitId/:stepId"
              component={Step}
            />
            <Route path="/trainings/:trainingId/:unitId" component={Unit} />
            <Route path="/trainings/:trainingId" component={Training} />
            <Route path="/trainings" component={Trainings} />
            <Route path="/about" component={About} />
            <Route path="/progress" component={Progress} />
            <Route path="/not-found" component={NotFound} />
            <Redirect path="/" exact to="/trainings" />
            <Redirect to="/not-found" />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
