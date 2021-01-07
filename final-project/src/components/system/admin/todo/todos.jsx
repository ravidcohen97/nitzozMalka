import React, { Component } from "react";
import { toast } from "react-toastify";
import {
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../../../../services/todoServices";
import { getCurrentUser } from "../../../../services/userServices";
import { Link } from "react-router-dom";
import Todo from "./todo";

class Todos extends Component {
  state = { todos: [], searchField: "" };
  async componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");
    try {
      let { data } = await getAllTodos();

      this.setState({ todos: data });
    } catch (err) {
      if (err.response) return toast(err.response.data);
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  update = async (todoId, favorite) => {
    try {
      await updateTodo({ _id: todoId, favorite });
      let newArr = [];

      this.state.todos.map((todo) => {
        let newOne = { ...todo };
        return newArr.push(newOne);
      });

      let todos = newArr.find((todo) => todo._id === todoId);
      todos.favorite = favorite;

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
    let filterTodos = this.state.todos.filter((todo) => {
      return todo.title
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="bgc" style={{ textAlign: "center", padding: "15px" }}>
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
          משימות
        </h1>
        <input
          type="text"
          placeholder="חיפוש לפי כותרת"
          onChange={this.onSearchChange}
          style={{
            width: "250px",
            textAlign: "center",
            margin: "20px",
          }}
        />
        <div className="flex">
          {filterTodos.map((todo) => {
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

export default Todos;
