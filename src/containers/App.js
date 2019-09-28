import React from "react";
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

import UnitPage from "../unit/unitPage";

import Login from "../pages/Auth/Login/Login";
import Logout from "../pages/Auth/Logout/Logout";
import Register from "../pages/Auth/Register/Register";
import TrainingsPage from "../trainings/trainingsPage";
import TrainingPage from "../trainings/trainingPage";
import Lesson from "../pages/Trainings/Lesson/Lesson";
import Step from "../pages/Trainings/Step/Step";
import LessonEnd from "../pages/Trainings/LessonEnd/LessonEnd";
import About from "../components/about";
import Progress from "../components/progress";
import NotFound from "../components/notFound";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

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

const App = () => {
  return (
    <>
      <ToastContainer />
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <ProtectedRoute path="/logout" component={Logout} />
        <PublicRoute path="/register" component={Register} />
        <ProtectedRoute path="/step/:orderId(\d+)" component={Step} hideNavBar />
        <ProtectedRoute path="/lesson/end" component={LessonEnd} />
        <ProtectedRoute path="/lesson/:lessonId(\d+)" component={Lesson} />
        <ProtectedRoute path="/unit/:unitId(\d+)" component={UnitPage} />
        <ProtectedRoute path="/trainings/:trainingId(\d+)" component={TrainingPage} />
        <ProtectedRoute path="/trainings" component={TrainingsPage} />
        <Route path="/about" component={About} />
        <ProtectedRoute path="/progress" component={Progress} />
        <Route path="/not-found" component={NotFound} />
        <Redirect path="/" exact to="/trainings" />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

export default App;
