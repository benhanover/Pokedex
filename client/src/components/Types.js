import React from 'react'

export default function Types({typeList, getPokemonByTypes}) {


  const newArr = typeList.map((type, index) => <li key={index} onClick={getPokemonByTypes}>{type.pokemon.name}</li>);
    



  return (
        <div>
            <ul>
                {newArr}
            </ul>
        </div>
    )
}
