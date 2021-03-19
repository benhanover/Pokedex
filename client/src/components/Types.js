import React from 'react'

export default function Types({typeList, getPokemonByTypes}) {


  const newArr = typeList.map(type => <li onClick={getPokemonByTypes}>{type.pokemon.name}</li>);
    



  return (
        <div>
            <ul>
                {newArr}
            </ul>
        </div>
    )
}
