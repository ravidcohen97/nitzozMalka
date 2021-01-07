const express = require("express");
const router = express.Router();
const { cheackAdmin } = require("../middleware/auth");
const { Todo, validTodo } = require("../models/todos");

// the todos is for admin only
// post new todo
router.post("/new", cheackAdmin, async (req, res) => {
  const { error } = validTodo(req.body.todo);
  if (error) return res.status(400).send(error.details[0].message);
  let todo = new Todo({
    title: req.body.todo.title,
    description: req.body.todo.description,
  });

  await todo.save();
  return res.status(200).send("Your Todo is Created");
});

// delete todo
router.delete("/delete", cheackAdmin, async (req, res) => {
  let remove = await Todo.findOneAndDelete({ _id: req.body.todoId._id });
  if (remove) res.status(200).send("Your Todo is removed");
});

// get all todos
router.get("/", cheackAdmin, async (req, res) => {
  let todos = await Todo.find({});
  return res.status(200).send(todos);
});

// get favorite todos
router.get("/favorite", cheackAdmin, async (req, res) => {
  let todos = await Todo.find({ favorite: true });
  return res.status(200).send(todos);
});

// update todo
router.patch("/update", cheackAdmin, async (req, res) => {
  await Todo.findOneAndUpdate(
    { _id: req.body.todo._id },
    { favorite: req.body.todo.favorite }
  );
  res.status(200).send("Your todo is update");
});

module.exports = router;
