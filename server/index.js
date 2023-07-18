require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

connectDB();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", require("./routes/auth"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
