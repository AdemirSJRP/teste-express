import express from "express";
import dotenv from "dotenv";

dotenv.config();

var app = express();

const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
