import React from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi-browser";

import auth from "../../../services/authService";

import Form from "../../../components/common/form";
import classes from "../Auth.module.scss";

class Register extends Form {
  state = {
    data: {
      username: "",
      firstName: "",
      lastName: "",
      terms: false
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
    terms: Joi.boolean()
      .valid(true)
      .label("Términos")
  };

  doSubmit = async () => {
    try {
      const { data: user } = await auth.register(this.state.data);
      console.log(user);
      await auth.login(this.state.data.username, "abc12345");
      auth.setCurrentUser(user);
      window.location = "/";
    } catch (ex) {
      console.log(ex);
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
      if (ex.response && ex.response.status === 422) {
        toast.error(
          "El número de usuario ya existe! Eliga otro e inténtelo de nuevo",
          {
            position: toast.POSITION.BOTTOM_RIGHT
          }
        );
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className={classes.Auth}>
        <div className={"row " + classes.Container}>
          <div className="col offset-sm-2 col-sm-8 offset-lg-3 col-lg-6">
            <img
              className="mx-auto d-block"
              src={"/images/logo_edufami.svg"}
              alt="Logo de Edufami"
            />
            <div className={classes.Box}>
              <form onSubmit={this.handleSubmit}>
                {this.renderInput(
                  "username",
                  null,
                  "Ingrese el número de documento de identidad"
                )}

                {this.renderInput("firstName", null, "Ingrese su nombre")}
                {this.renderInput("lastName", null, "Ingrese su apellido")}
                {this.renderCheckbox(
                  "terms",
                  "Acepto los terminos y condiciones, políticas de privacidad"
                )}
                {this.renderButton("Crear Cuenta")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
