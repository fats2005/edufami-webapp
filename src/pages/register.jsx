import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../components/common/form";
import auth from "../services/authService";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Nombre"),
    lastName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .label("Apellido"),
    username: Joi.number()
      .integer()
      .min(0)
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    email: Joi.string().email()
  };

  doSubmit = async () => {
    try {
      const { data: user } = await auth.register(this.state.data);
      console.log(user);
      await auth.login(this.state.data.username, this.state.data.password);
      auth.setCurrentUser(user);
      window.location = "/";
    } catch (ex) {
      console.log(ex);
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
            <form onSubmit={this.handleSubmit}>
              {this.renderInput(
                "username",
                null,
                "Ingrese el número de documento de identidad"
              )}
              {this.renderInput(
                "password",
                null,
                "Ingrese su contraseña",
                "password"
              )}
              {this.renderInput("firstName", null, "Ingrese su nombre")}
              {this.renderInput("lastName", null, "Ingrese su apellido")}
              {this.renderInput("email", null, "Ingrese su email")}
              {this.renderButton("Crear Cuenta")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
