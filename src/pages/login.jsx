import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../components/common/form";
import auth from "../services/authService";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      await auth.getUser();
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/trainings";
    } catch (ex) {
      console.log(ex.response.status);
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("El Usuario y/o Contraseña no son correctos!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
