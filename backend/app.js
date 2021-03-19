require("dotenv").config();
const express = require("express");
const app = express();
const api = require("./routes/routesControl");
const path = require('path');

app.use(express.json());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("WELCOME PORT 9000")
});


module.exports = app;


