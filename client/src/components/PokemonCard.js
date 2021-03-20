import React from "react";
import "../styles/PokemonCard.css";
import axios from "axios";

export default function PokemonCard({
  pokemon,
  getTypeList,
  buttonText,
  addOrRelease,
  mainDiv,
  buttonClass,
  textClass,
  imgClass,
}) {
  const {
    name,
    height,
    weight,
    id,
    back_default,
    front_default,
    types,
  } = pokemon;
  if (pokemon) {
    const handledTypes = types.map((type, index) => {
      return (
        <span className="type" key={index} onClick={getTypeList}>
          {type}
        </span>
      );
    });

    return (
      <div className={`card ${mainDiv}`}>
        <div className={`${textClass}`}>
          <span>name:</span>
          <span>{` ${name}`}</span>
          <br />
          <span>id:</span>
          <span>{` ${id}`}</span>
          <br />
          <span>height:</span>
          <span>{` ${height}`}</span>
          <br />
          <span>weight:</span>
          <span>{` ${weight}`}</span>
          <br />
          <span>types:</span> <span>{handledTypes}</span>
        </div>
        <button
          className={`release-or-catch-btn ${buttonClass}`}
          onClick={() => addOrRelease(pokemon)}
        >
          {buttonText}
        </button>
        <img
          className={imgClass}
          src={front_default}
          onMouseOver={(e) => (e.currentTarget.src = back_default)}
          onMouseOut={(e) => (e.currentTarget.src = front_default)}
          alt={"pokemon"}
        />
      </div>
    );
  } else {
    return <></>;
  }
}
