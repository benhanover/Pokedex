const { Router } = require('express');
const axios = require('axios');
const type = Router();
const link = process.env.typeLink;


type.get("/:type" , async (req, res) => {
  const { type } = req.params;
  try {
    const { data } = await axios.get(link + `${type}`);
    const typePokemonList = data.pokemon;
    res.json(typePokemonList);
  } catch(error){
    res.status(404).json({error:  error.message, success: false});
  }
});








module.exports = type;