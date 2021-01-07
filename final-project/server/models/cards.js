const Joi = require("@hapi/joi");
const mongo = require("mongoose");

const cardSchema = new mongo.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 35,
  },
  color: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  size: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 1024,
  },
  status: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 2,
    default: 0,
  },
  user_id: { type: String, required: true },

  createAt: { type: Date, default: Date.now },
});
const Card = mongo.model("card", cardSchema);

function validCard(card) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(35).required(),
    color: Joi.string().min(2).max(1024).required(),
    size: Joi.string().min(1).max(255).required(),
    description: Joi.string().min(2).max(1024),
    status: Joi.number().min(0).max(5),
    user_id: Joi.string().required(),
    _id: Joi.string(),
  });
  return schema.validate(card);
}
module.exports = {
  Card: Card,
  validCard: validCard,
};
