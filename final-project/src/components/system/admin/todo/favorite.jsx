import React, { Component } from "react";
import { toast } from "react-toastify";
import {
  getFavoriteTodos,
  updateTodo,
  deleteTodo,
} from "../../../../services/todoServices";
import { getCurrentUser } from "../../../../services/userServices";
import { Link } from "react-router-dom";

import Todo from "./todo";

class Favorite extends Component {
  state = { todos: [] };

  async componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");

    try {
      let { data } = await getFavoriteTodos();

      this.setState({ todos: data });
    } catch (err) {
      if (err.response) return toast(err.response.data);
    }
  }

  update = async (todoId, favorite) => {
    try {
      await updateTodo({ _id: todoId, favorite });

      let newArr = this.state.todos.filter((todo) => {
        return todo._id !== todoId;
      });

      this.setState({ todos: newArr });
    } catch (err) {
      if (err.response) toast(err.response.data);
    }
  };

  deleteOne = async (todoId) => {
    try {
      await deleteTodo({ _id: todoId });

      let newArr = this.state.todos.filter((todo) => {
        return todo._id !== todoId;
      });

      this.setState({ todos: newArr });
      toast("The Todo is removed");
    } catch (err) {
      if (err.response) toast(err.response.data);
    }
  };

  render() {
    return (
      <div className="bgc">
        <Link
          className="btn btn-primary"
          to="/newtodo"
          style={{ margin: "10px", position: "fixed", left: 10, top: 120 }}
        >
          + משימה חדשה
        </Link>
        <h1
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: "3.5em",
            textShadow: "5px 5px black",
          }}
        >
          מועדפים
        </h1>
        <div className="flex">
          {this.state.todos.map((todo) => {
            return (
              <Todo
                key={todo._id}
                todo={todo}
                update={this.update}
                deleteOne={this.deleteOne}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Favorite;
