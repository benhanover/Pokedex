import React from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import '../styles/Collection.css';

export default function Collection({ collection, addOrRelease }) {
  console.log(collection);
  const elementCollection = collection.map((pokemon, index) => {
    return <PokemonCard key={index} pokemon={pokemon} buttonText={'release'} addOrRelease={addOrRelease} />
  });
  
  
  return(
    <div className="collection">
      {elementCollection}
    </div>
  );
}