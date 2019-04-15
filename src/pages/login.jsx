import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "../components/common/form";
import auth from "../services/authService";

import "./login.scss";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Usuario"),
    password: Joi.string()
      .required()
      .label("Contraseña")
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
      <div className="row login-container">
        <div className="col offset-sm-2 col-sm-8 offset-lg-3 col-lg-6">
          <img
            className="mx-auto d-block"
            src={"/images/logo_edufami.svg"}
            alt="Logo de Edufami"
          />
          <div className="box">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput(
                "username",
                null,
                "Ingrese documeto o password"
              )}
              {this.renderInput(
                "password",
                null,
                "Ingrese su password",
                "password"
              )}
              {this.renderButton("Ingresar")}
            </form>
            <h6>¿No tienes cuenta?</h6>
            <Link
              to="/register"
              className="btn btn-primary bg-primary-dark btn-sm"
            >
              Crear Cuenta
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
