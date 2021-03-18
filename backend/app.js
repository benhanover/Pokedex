require("dotenv").config();
const express = require("express");
const app = express();
const api = require("./routes/routesControl");


app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Working from app");
});


module.exports = app;


