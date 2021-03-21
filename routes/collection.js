require("dotenv").config();
const { Router } = require("express");
const collection = Router();
const Pokemon = require("../mongo.js");

const collectionList = [
  {
    name: "rayquaza",
    height: 70,
    weight: 2065,
    id: 384,
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png",
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    types: ["dragon", "flying"],
  },
];

collection.get("/", async (req, res) => {
  try {
    return res.json(await Pokemon.find());
  } catch (e) {
    return res.status(500).json({ error: `${e}` });
  }
});

collection.post("/catch", async (req, res) => {
  const { body } = req;

  const pokemonToAdd = Pokemon({
    name: body.name,
    height: body.height,
    weight: body.weight,
    id: body.id,
    back_default: body.back_default,
    front_default: body.front_default,
    types: body.types,
  });

  try {
    await pokemonToAdd.save();
    collectionList.push(body);
    return res.status(200).json({ message: "Added Succesfully" });
  } catch (e) {
    return res.status(500).json({ error: `${e}` });
  }
});

collection.delete("/release/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Pokemon.deleteOne({ id: id });
    res.json({ message: "deleted succesfully" });
  } catch (e) {
    return res.status(500).json({ error: `${e}` });
  }
});

module.exports = collection;
