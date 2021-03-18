require("dotenv").config();
const express = require("express");
const app = express();
const api = require("./routes/routesControl");

app.use(express.json());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Working from app");
});


module.exports = app;


