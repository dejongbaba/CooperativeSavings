const express = require("express");
const mongoDb = require("mongodb");
const path = require("path");

const app = express();
const mongoClient = mongoDb.mongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";

mongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    console.log(error);
    if (error) {
      return console.log("unable to connect to database");
    }
    console.log("Connected correctly!");
  }
);

const root = app.use(express.static(path.join(__dirname, "./public")));

app.use(root);

app.get("/about", (res) => {});

app.get("/contact", (res) => {
  res.send();
});
