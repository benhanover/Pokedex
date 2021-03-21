require("dotenv").config();
const express = require("express");
const app = express();
const api = require("./routes/routesControl");

app.use(express.json());
app.use(express.static('./client/build'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.use("/api", api);


module.exports = app;


