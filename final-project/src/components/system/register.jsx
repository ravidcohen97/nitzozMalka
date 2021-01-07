import React, { Component } from "react";
import { Link } from "react-router-dom";
import { register, getCurrentUser } from "../../services/userServices";
import Joi from "@hapi/joi";
import { toast } from "react-toastify";
class Login extends Component {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  componentDidMount() {
    if (getCurrentUser()) this.props.history.replace("/cards");
  }

  validRegister(data) {
    const schema = Joi.object({
      email: Joi.string().required().email().label("Email"),
      password: Joi.string().min(6).required().label("Password"),
      name: Joi.string().min(2).max(20).required(),
    });
    return schema.validate(data);
  }

  onRegister = async () => {
    let email = document.querySelector('input[name="email"]');
    let name = document.querySelector('input[name="name"]');
    let password = document.querySelector('input[name="password"]');
    email = email.value.trim();
    password = password.value.trim();
    name = name.value.trim();
    try {
      await this.validRegister({ email, password, name });
      this.setState({ data: { email, password, name }, errors: {} });
    } catch (error) {
      if (error.details) {
        let err = error.details[0].message;
        this.setState({ errors: err });
        return toast(this.state.errors);
      }
    }
    try {
      await register(email, password, name);
      return (window.location = "/login");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        toast(err.response.data);
      }
    }
  };
  render() {
    return (
      <div className="bgc">
        <div className="login">
          <form autoComplete="on">
            <h1>Register</h1>
            <label> Email </label>
            <br />

            <input type="text" name="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" autoComplete="on" />
            <label> Name </label>
            <br />

            <input type="text" name="name" />
            <br />
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onRegister}
            >
              Register
            </button>
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
