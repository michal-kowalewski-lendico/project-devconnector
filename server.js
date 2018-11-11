const express = require("express");
const mongoose = require("mongoose");

//initialize app
const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connet to MongoDB by Mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
