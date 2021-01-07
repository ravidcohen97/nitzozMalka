import Like from "../../../../Image/like.png";
import Unlike from "../../../../Image/unlike.png";
import React from "react";

const Todo = (todo, update, deleteOne) => {
  return (
    <div
      className="card"
      style={{
        width: "100%",
        maxWidth: "350px",
        textAlign: "center",
        margin: "15px",
        minHeight: "200px",
        padding: "25px",
        border: "5px solid black",
        borderRadius: "20px",
        boxShadow: "2px 2px 5px white",
      }}
    >
      <div
        className="btn btn-danger"
        onClick={() => todo.deleteOne(todo.todo._id)}
        style={{
          width: "25px",

          padding: "0px 0px 5px 0px",
          height: "25px",
        }}
      >
        X
      </div>
      <h3 style={{ width: "100%", color: "#96090e" }}>{todo.todo.title}</h3>
      <h5 style={{ width: "100%" }}>{todo.todo.description} </h5>
      <br />
      {todo.todo.favorite && (
        <img
          src={Like}
          alt="like"
          onClick={() => todo.update(todo.todo._id, false)}
          style={{ width: "50px", margin: "0 auto" }}
        />
      )}
      {!todo.todo.favorite && (
        <img
          src={Unlike}
          alt="Unlike"
          onClick={() => todo.update(todo.todo._id, true)}
          style={{ width: "50px", margin: "0 auto" }}
        />
      )}
    </div>
  );
};

export default Todo;
