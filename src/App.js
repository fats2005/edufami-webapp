import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/common/navBar";
import Training from "./components/training";
import Trainings from "./components/trainings";
import About from "./components/about";
import Progress from "./components/progress";
import NotFound from "./components/notFound";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

library.add(faUserCircle);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/trainings/:id" component={Training} />
            <Route path="/trainings" component={Trainings} />
            <Route path="/about" component={About} />
            <Route path="/progress" component={Progress} />
            <Route path="/not-found" component={NotFound} />
            <Redirect path="/" exact to="/trainings" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
