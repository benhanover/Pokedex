import React from "react";
import PokemonCard from "./PokemonCard";
import "../styles/SearchArea.css";

export default function SearchArea({
  getTypeList,
  getPokemon,
  changeInputStr,
  pokemon,
  buttonText,
  addOrRelease,
  errorMessage,
  isHidden,
}) {
  return (
    <div className="search-area">
      <h1 className="main-title">Pokedex</h1>
      <div className="search-container">
        <input
          onChange={changeInputStr}
          className="search-input"
          placeholder="Look for a pokemon"
        ></input>
        <button className="search-button" onClick={getPokemon}>
          Search
        </button>
      </div>
      <div className="error-message" hidden={isHidden}>{`${errorMessage}`}</div>
      <PokemonCard
        mainDiv="searched-card"
        buttonClass="button-class"
        textClass="text-class"
        imgClass="img-class"
        pokemon={pokemon}
        getTypeList={getTypeList}
        buttonText={buttonText}
        addOrRelease={addOrRelease}
      />
    </div>
  );
}
