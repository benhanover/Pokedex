const { Router } = require("express");
const pokemon = require('./pokemon');
const collection = require('./collection');

const api = Router();
api.use('/pokemon', pokemon);

// api.use('/type', type);

// api.use("/collection", collection);

api.get("/", (req, res) => {
    res.send("Working from index");
  });



  
module.exports = api;
