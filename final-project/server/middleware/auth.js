const jwt = require("jsonwebtoken");
const config = require("config");

const cheackUser = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

const cheackMe = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded;
    if (decoded.id === req.user.id || decoded.admin === true) {
      return next();
    }
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

const cheackAdmin = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, config.get("jwtKey"));
    req.user = decoded;
    if (req.user && decoded.admin === true) {
      return next();
    } else {
      res.status(400).send("You are not admin");
    }
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
module.exports = { cheackUser, cheackAdmin, cheackMe };
