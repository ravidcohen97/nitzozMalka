import { Component } from "react";
import { logout } from "../services/userServices";
class Logout extends Component {
  componentDidMount() {
    logout();
  }
  render() {
    return null;
  }
}

export default Logout;
