import React, { Component } from "react";
import Joi from "@hapi/joi";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../../../services/userServices";
import { newTodo } from "../../../../services/todoServices";
class Addtodo extends Component {
  state = {};
  componentDidMount() {
    let user = getCurrentUser();
    if (!user || !user.admin) return this.props.history.replace("/");
  }

  postTodo = async () => {
    let name = document.querySelector(".name");
    let description = document.querySelector(".description");

    const todo = {
      title: name.value,
      description: description.value,
    };

    try {
      await this.validtodo(todo);
    } catch (error) {
      if (error.details) {
        let err = error.details[0].message;
        this.setState({ errors: err });
        return toast(this.state.errors);
      }
    }

    await newTodo(todo)
      .then((res) => {
        toast(res.data);
        return this.props.history.replace("/todos");
      })
      .catch((err) => {
        if (err) {
          console.log(err.response.data);
        }
      });
  };

  validtodo(todo) {
    const schema = Joi.object({
      title: Joi.string().min(2).max(35).required(),
      description: Joi.string().min(2).max(1024),
    });
    return schema.validate(todo);
  }
  render() {
    return (
      <div className="bgc">
        <div
          className="newtodo"
          style={{
            width: "100%",
            maxWidth: "350px",
            backgroundColor: "#fff",
            direction: "rtl",
            margin: "10% auto",
            padding: "10px 20px",
            textAlign: "center",
          }}
        >
          <h2>יצירת משימה</h2>
          <label name="name" style={{ width: "100%" }}>
            כותרת
          </label>
          <input type="text" className="name" style={{ width: "100%" }} />
          <label name="description" style={{ width: "100%" }}>
            תיאור משימה
          </label>
          <textarea
            type="text"
            className="description"
            style={{ width: "100%", height: "50px" }}
          />
          <button
            className="btn btn-success"
            style={{ margin: "10px auto", width: "100px" }}
            onClick={this.postTodo}
          >
            צור
          </button>
        </div>
      </div>
    );
  }
}

export default Addtodo;
