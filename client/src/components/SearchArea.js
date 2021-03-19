import React,{useState} from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/SearchArea.css';
import axios from "axios";

export default function SearchArea({getTypeList, getPokemon, changeInputStr, pokemon}) {

 
    return (
        <div className="search-area">
            <h1 className="main-title">Look for a Pokemon</h1>
            <div className="search-container">
                <input onChange={changeInputStr} className="search-input" placeholder="Look for a pokemon"></input>
                <button className="search-button" onClick={getPokemon}>Search</button>
            </div>
            <PokemonCard pokemon={pokemon} getTypeList={getTypeList}/>
        </div>
    )
}


