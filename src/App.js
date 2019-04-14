import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
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
import Footer from "./components/common/footer";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Trainings from "./pages/trainings";
import Training from "./pages/training";
import Unit from "./pages/unit";
import Lesson from "./pages/lesson";
import Step from "./pages/step";
import LessonEnd from "./pages/lessonEnd";
import About from "./components/about";
import Progress from "./components/progress";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/common/protectedRoute";

import auth from "./services/authService";

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
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <ToastContainer />
        <NavBar user={user || ""} />
        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/step/:orderId(\d+)" component={Step} />
            <ProtectedRoute path="/lesson/end" component={LessonEnd} />
            <ProtectedRoute path="/lesson/:lessonId(\d+)" component={Lesson} />
            <ProtectedRoute path="/unit/:unitId(\d+)" component={Unit} />
            <ProtectedRoute
              path="/trainings/:trainingId(\d+)"
              component={Training}
            />
            <ProtectedRoute path="/trainings" component={Trainings} />
            <Route path="/about" component={About} />
            <ProtectedRoute path="/progress" component={Progress} />
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
