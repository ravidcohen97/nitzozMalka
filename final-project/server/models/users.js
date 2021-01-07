const Joi = require("@hapi/joi");
const mongo = require("mongoose");

const userSchema = new mongo.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
  createAt: { type: Date, default: Date.now },
  admin: { type: Boolean, default: true },
});
const User = mongo.model("user", userSchema);

function validUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(user);
}

module.exports = {
  User: User,
  validUser: validUser,
};
