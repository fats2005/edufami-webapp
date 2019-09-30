/* eslint-disable */
import React, { Component } from "react";
import { Route } from "react-router-dom";

class PublicRoute extends Component {
  render() {
    const { path, component: Component, render, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return Component ? (
            <div className="public">
              <div className="container">
                <Component {...props} />
              </div>
            </div>
          ) : (
            render(props)
          );
        }}
      />
    );
  }
}

export default PublicRoute;
