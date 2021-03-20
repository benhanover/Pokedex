import React from 'react';
// import axios from "axios";

export default function Types({typeList, getPokemonByTypes}) {
    

    // const imgList = typeList.map( (url) => {
    //    return(
    //     <img
    //         src={url}
    //     />
          
    //    ); 
    // });
   

    // return(
    //     <div>
    //         {imgList}
    //     </div>
    // );
   


    
// ! Working with names 
    const picturesElements = typeList.map((type, index) => {
        return (
            <h1
                key={index} 
                onClick={getPokemonByTypes} 
                className="type-poke-img" 
                >
                    {type.pokemon.name}
            </h1>
            );  
        });

        return (<div>{picturesElements}</div>)
}
