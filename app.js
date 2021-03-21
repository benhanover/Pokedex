require("dotenv").config();
const express = require("express");
const app = express();
const api = require("./routes/routesControl");
const path = require('path');

app.use(express.json());
app.use("/api", api);
app.use(express.static('./client/public'))

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


module.exports = app;


