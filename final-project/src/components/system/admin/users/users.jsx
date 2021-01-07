import React, { Component } from "react";
import {
  getAllUser,
  getCurrentUser,
  removeUser,
} from "../../../../services/userServices";
class Users extends Component {
  state = { users: "" };
  async componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");
    try {
      let { data } = await getAllUser();
      this.setState({ users: data });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log("some error");
      }
    }
  }

  remove = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      let { data } = await removeUser(id);
    } catch (err) {
      if (err.response) return console.log(err.response.data);
    }

    let newArr = this.state.users.filter((card) => {
      return card._id !== id;
    });

    this.setState({ users: newArr });
  };
  render() {
    let { users } = this.state;

    return (
      <React.Fragment>
        {users && (
          <table border="1" style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center", padding: "10px" }}>Id</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Email</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Name</th>
                <th style={{ textAlign: "center", padding: "10px" }}>date</th>
                <th style={{ textAlign: "center", padding: "10px" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td style={{ textAlign: "center", padding: "10px" }}>
                      {user._id}
                    </td>
                    <td style={{ textAlign: "center", padding: "10px" }}>
                      {user.email}
                    </td>
                    <td style={{ textAlign: "center", padding: "10px" }}>
                      {user.name}
                    </td>
                    <td style={{ textAlign: "center", padding: "10px" }}>
                      {user.createAt}
                    </td>
                    <td style={{ textAlign: "center", padding: "10px" }}>
                      <button
                        style={{ textAlign: "center", padding: "10px" }}
                        className="btn btn-danger"
                        onClick={() => {
                          this.remove(user._id);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}

export default Users;
