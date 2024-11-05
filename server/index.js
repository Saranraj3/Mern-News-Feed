import express from "express";
import mongoose from "mongoose";
import AuthenticationRoute from "./Routes/AuthenticationRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

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

// API Routes
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/auth", AuthenticationRoute);

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Server Running");
});

// Middleware
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Something Went Wrong";
  return res.status(statuscode).json({
    success: false,
    message,
    statuscode,
  });
});
