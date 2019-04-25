import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";
import NavBar from "../../components/common/navBar";
import Footer from "../../components/common/footer";

class ProtectedRoute extends Component {
  render() {
    const { path, component: Component, render, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (!auth.getCurrentUser())
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          return Component ? (
            <React.Fragment>
              <NavBar user={""} />
              <div className="container">
                <Component {...props} />
              </div>
              <Footer />
            </React.Fragment>
          ) : (
            render(props)
          );
        }}
      />
    );
  }
}

export default ProtectedRoute;
