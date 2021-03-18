const { Router } = require('express');
const axios = require('axios');

const pokemon =  Router();
const link = process.env.pokemonLink;

pokemon.get("/:pokeName", async (req, res) => {
    try {
    const { pokeName } = req.params;
    const { data } = await axios.get(link+`/pokemon/${pokeName}`);
    const { height, weight, name, id, sprites, types } = data;
    const { back_default, front_default } = sprites;
    const testObj = { height, weight, name, id, back_default, front_default, types: types.map((type)=> type.type)};
    res.json(testObj);
    } catch(error){
        res.status(404).json({error:  error.message, success: false});
    }

});



module.exports = pokemon;