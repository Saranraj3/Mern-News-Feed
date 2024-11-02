const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Server Running");
});
