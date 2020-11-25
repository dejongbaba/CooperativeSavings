const express = require("express");
const mongoDb = require("mongodb");
const path = require("path");

const app = express();
const mongoClient = mongoDb.mongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "CoopDb";

mongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    console.log(error);
    if (error) {
      return console.log("unable to connect to database");
    }
    console.log("Connected correctly!");

    const db = client.db(dbName);

    db.collections("savings").insertOne({});
  }
);