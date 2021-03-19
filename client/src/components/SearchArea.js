import React,{useState} from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/SearchArea.css';
import axios from "axios";

export default function SearchArea() {

    const mock = {
        name: "rayquaza",
        height: 70,
        weight: 2065,
        id: 384,
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
        types: [
        'dragon',
        'flying'
        ]
        }
    const [inputStr, setInputStr] = useState('');
    const [pokemon, setPokemon] = useState(mock);

    const changeInputStr = async (e) =>{
        setInputStr(e.target.value);
      }

    async function getPokemon() {
        const pokemon = inputStr;
        axios.get(`http://localhost:9000/api/pokemon/${pokemon}`)
        .then((res) => setPokemon(res.data));
    }

    return (
        <div className="search-area">
            <h1 className="main-title">Look for a Pokemon</h1>
            <div className="search-container">
                <input onChange={changeInputStr} className="search-input" placeholder="Look for a pokemon"></input>
                <button className="search-button" onClick={getPokemon}>Search</button>
            </div>
            <PokemonCard pokemon={pokemon}/>
        </div>
    )
}


