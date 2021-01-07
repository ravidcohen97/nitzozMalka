const Joi = require("@hapi/joi");
const mongo = require("mongoose");

const todoSchema = new mongo.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 35,
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 1024,
  },
  favorite: {
    type: Boolean,
    default: false,
  },

  createAt: { type: Date, default: Date.now },
});
const Todo = mongo.model("todo", todoSchema);

function validTodo(todo) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(35).required(),
    description: Joi.string().min(2).max(1024),
    favorite: Joi.boolean(),
  });
  return schema.validate(todo);
}
module.exports = {
  Todo: Todo,
  validTodo: validTodo,
};
