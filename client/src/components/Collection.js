import React from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import '../styles/Collection.css';

export default function Collection({ collection, addOrRelease, getTypeList }) {
  const elementCollection = collection.map((pokemon, index) => {
    return <PokemonCard key={index} pokemon={pokemon} buttonText={'release'} addOrRelease={addOrRelease} getTypeList={getTypeList} />
  });
  
  
  return(
    <div className="collection">
      {elementCollection}
    </div>
  );
}