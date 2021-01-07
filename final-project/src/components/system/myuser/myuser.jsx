import React, { Component } from "react";
import {
  getMyUser,
  getCurrentUser,
  removeUser,
  logout,
} from "../../../services/userServices";
class Myuser extends Component {
  state = { user: "" };

  async componentDidMount() {
    let me = await getCurrentUser();
    if (!me) this.props.history.replace("/");
    // console.log(me);
    try {
      let { data } = await getMyUser();
      this.setState({ user: data });
      // console.log(this.state);
    } catch (err) {
      if (err.response) console.log(err.response.data);
    }
  }

  remove = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      let { data } = await removeUser(id);
      logout();
    } catch (err) {
      if (err.response) return console.log(err.response.data);
    }
  };

  render() {
    let { user } = this.state;
    return (
      <React.Fragment>
        {user && (
          <div className="bgc">
            <div className="myUser">
              <h2>My User</h2>
              <h3>
                <span style={{ color: "#96090e" }}>Name:</span> {user.name}
              </h3>
              <h3>
                <span style={{ color: "#96090e" }}>Email:</span> {user.email}
              </h3>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.remove(user._id);
                }}
              >
                Delete My User
              </button>
            </div>
          </div>
        )}

        {!user && (
          <div className="bgc">
            <h1
              style={{ textAlign: "center", marginTop: "15%", color: "#fff" }}
            >
              Loading...
            </h1>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Myuser;
