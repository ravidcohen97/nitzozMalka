const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const todos = require("./routes/todos");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users", users);
app.use("/cards", cards);
app.use("/todos", todos);
app.use("/auth", auth);

// mongoDb Connect
mongoose
  .connect("mongodb://localhost/nitzozdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connecting to mongodb!"))
  .catch((err) => console.error("Could not connect to mongodb", err));

let PORT = 8181;
app.listen(PORT, () => console.log("Server Listen on Port " + PORT));
