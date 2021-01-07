import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, getCurrentUser } from "../../services/userServices";
import Joi from "@hapi/joi";
import { toast } from "react-toastify";
class Login extends Component {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };
  componentDidMount() {
    if (getCurrentUser()) this.props.history.replace("/cards");
  }

  validLogin(data) {
    const schema = Joi.object({
      email: Joi.string().required().email().label("Email"),
      password: Joi.string().required().min(6).label("Password"),
    });
    return schema.validate(data);
  }

  onLogin = async () => {
    let email = document.querySelector('input[name="email"]');
    let password = document.querySelector('input[name="password"]');
    email = email.value.trim();
    password = password.value.trim();
    try {
      await this.validLogin({ email, password });
      this.setState({ data: { email, password }, errors: {} });
    } catch (error) {
      let err = error.details[0].message;
      this.setState({ errors: err });
      return toast(this.state.errors);
    }
    try {
      await login(email, password);
      return (window.location = "/cards");
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
            <h1>Login</h1>
            <label> Email </label>
            <br />

            <input type="text" name="email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" autoComplete="on" />
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onLogin}
            >
              Login
            </button>
            <Link to="/register" className="btn btn-secondary">
              Register
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
