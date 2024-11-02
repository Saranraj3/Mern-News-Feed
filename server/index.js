const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// MongoDB Database Connection

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Server Running");
});
