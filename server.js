const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const userRoutes = require("./route");

const mongoDBUrl = "mongodb://localhost:27017/mongo-playground";

const connect = () => mongoose.connect(mongoDBUrl, { useNewUrlParser: true });

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use("/users", userRoutes);

const start = async () => {
  try {
    await connect();
    app.listen("4000", () => console.log("listen in port 4000"));
  } catch (e) {
    console.log(e);
  }
};

start();
