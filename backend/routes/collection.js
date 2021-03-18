const { Router } = require('express');
const axios = require('axios');
const collection =  Router();

collection.get("/" , (req, res)=>{
    res.json({ben: "hanover"});
})


module.exports = collection;