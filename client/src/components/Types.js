import React from "react";
// import axios from "axios";

export default function Types({ typeList, getPokemonByTypes }) {


  const pokemonImg = typeList.map(({ img, name }) => {
    return <img className={'type-image'} src={img} onClick={() => getPokemonByTypes(name)} />
  });

  return(
    <div>
      {pokemonImg}
    </div>
  );

  // const picturesElements = typeList.map((type, index) => {
  //   return (
  //     <h1 key={index} onClick={getPokemonByTypes} className="type-poke-img">
  //       {type.pokemon.name}
  //     </h1>
  //   );
  // });

  // return <div>{picturesElements}</div>;
}
