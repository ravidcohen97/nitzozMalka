const express = require("express");
const router = express.Router();
const { validUser, User } = require("../models/users");
const bcrypt = require("bcrypt");
const { cheackAdmin, cheackMe } = require("../middleware/auth");

// Get my user
router.get("/me", cheackMe, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password -admin");
  res.send(user);
});

// get all users (admin only)
router.get("/all", cheackAdmin, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// delete user by id(for admin / my user)
router.delete("/delete", cheackMe, async (req, res) => {
  const user = await User.findById(req.body._id);
  if (!user) {
    return res.status(404).send("This user is undefined");
  }
  await User.deleteOne(user);
  return res.send("good bye, your account is removed");
});

// register new user
router.post("/", async (req, res) => {
  const { error } = validUser(req.body);
  if (error) res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(req.body);
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
  user.save();
  res
    .status(200)
    .send(
      `wellcome ${user.name}, you are registerd! your Email: ${user.email}`
    );
});

module.exports = router;
