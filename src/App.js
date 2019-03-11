import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import Training from "./components/training";
import NotFound from "./components/notFound";
import "./App.css";
import Trainings from "./components/trainings";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/trainings/:id" component={Training} />
            <Route path="/trainings" component={Trainings} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
