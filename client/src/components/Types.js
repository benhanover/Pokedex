import React from "react";
// import axios from "axios";

export default function Types({ typeList, getPokemonByTypes }) {
  const picturesElements = typeList.map((type, index) => {
    return (
      <h1 key={index} onClick={getPokemonByTypes} className="type-poke-img">
        {type.pokemon.name}
      </h1>
    );
  });

  return <div>{picturesElements}</div>;
}
