import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faMedal,
  faCertificate,
  faShare,
  faTasks,
  faDownload,
  faTimes,
  faClipboardCheck,
  faAngleRight,
  faRedo
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "./components/common/navBar";
import Footer from "./components/common/Footer";
import Trainings from "./pages/trainings";
import Training from "./pages/training";
import Unit from "./pages/unit";
import Lesson from "./pages/lesson";
import Step from "./pages/step";
import LessonEnd from "./pages/lessonEnd";
import About from "./components/about";
import Progress from "./components/progress";
import NotFound from "./components/notFound";

import "./App.scss";

library.add(
  faUserCircle,
  faMedal,
  faCertificate,
  faShare,
  faTasks,
  faDownload,
  faTimes,
  faClipboardCheck,
  faAngleRight,
  faRedo
);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/step/:orderId(\d+)" component={Step} />
            <Route path="/lesson/end" component={LessonEnd} />
            <Route path="/lesson/:lessonId(\d+)" component={Lesson} />
            <Route path="/unit/:unitId(\d+)" component={Unit} />
            <Route path="/trainings/:trainingId(\d+)" component={Training} />
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
