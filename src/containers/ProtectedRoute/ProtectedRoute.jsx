import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";
import NavBar from "../../common/NavBar/NavBar";
import Footer from "../../common/footer";

class ProtectedRoute extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { path, component: Component, render, hideNavBar, ...rest } = this.props;
    const { user } = this.state;
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
              {!hideNavBar && <NavBar user={user} />}
              <div className="container">
                <Component {...props} />
              </div>
              {!hideNavBar && <Footer />}
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
