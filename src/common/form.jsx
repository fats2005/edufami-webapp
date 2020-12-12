import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
  }

  validate = () => {
    const { data } = this.state;
    const options = { abortEarly: false };

    const { error } = Joi.validate(data, this.schema, options);
    if (!error) return null;

    const errors = {};
    // for (let item of error.details) {
    //   errors[item.path[0]] = item.message;
    // }
    return errors;
  };

  validateProperty = (input) => {
    const { name, value, checked, type } = input;
    const obj = type === "checkbox" ? { [name]: checked } : { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate({});
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const { errors, data } = this.state;
    const erroMessage = this.validateProperty(input);
    if (erroMessage) errors[input.name] = erroMessage;
    else delete errors[input.name];

    data[input.name] = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary" type="button">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, placeholder = "", type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        placeholder={placeholder}
        error={errors[name]}
      />
    );
  }

  renderCheckbox(name, label) {
    const { data, errors } = this.state;

    return (
      <Input
        type="checkbox"
        name={name}
        defaultChecked={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
