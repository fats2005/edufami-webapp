import React from "react";
import { Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Form from "../../../common/form";
import auth from "../../../services/authService";

import classes from "../Auth.module.scss";

class Login extends Form {
  state = {
    data: { username: "" },
    errors: {}
  };

  schema = {
    username: Joi.number()
      .integer()
      .min(0)
      .required()
      .label("Usuario")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, "abc12345");
      await auth.getUser();
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/trainings";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("El Usuario no existe!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className={classes.Auth}>
        <div className={`row ${classes.Container}`}>
          <div className="col offset-sm-2 col-sm-8 offset-lg-3 col-lg-6">
            <img className="mx-auto d-block" src="/images/logo_edufami.svg" alt="Logo de Edufami" />
            <div className={classes.Box}>
              <h4>¡Aprenda Jugando con Edufami!</h4>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", null, "Ingrese número de usuario")}
                {this.renderButton("Ingresar")}
              </form>
              <h6>¿No tienes cuenta?</h6>
              <Link to="/register" className="btn btn-primary bg-primary-dark btn-sm">
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
