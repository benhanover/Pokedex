import { useState, useEffect } from "react";
import "./App.css";
import SearchArea from "./components/SearchArea";
import Types from "./components/Types";
import Collection from "./components/Collection.js";
const axios = require("axios");

function App() {
  //!Collection
  const [collection, setCollection] = useState([]);
  const [buttonText, setButtonText] = useState("Catch");

  useEffect(() => {
    async function fetchCollection() {
      const res = await axios.get("/api/collection");
      setCollection(res.data);
    }
    fetchCollection();
  }, []);

  async function addOrRelease(pokemon) {
    const isExist = collection.find((poke) => poke.name === pokemon.name);
    if (isExist) {
      const { id } = pokemon;
      try {
        await axios.delete(`/api/collection/release/${id}`);
      } catch (e) {
        alert(e);
      }
      try {
        const temp = await axios.get(`/api/collection`);
        setCollection(temp.data);
      } catch (e) {
        alert(e);
      }
      if (buttonText === "release") {
        setButtonText("catch");
      } else {
        setButtonText("release");
      }
    } else {
      try {
        await axios.post("/api/collection/catch", {
          name: pokemon.name,
          height: pokemon.height,
          weight: pokemon.weight,
          id: pokemon.id,
          back_default: pokemon.back_default,
          front_default: pokemon.front_default,
          types: pokemon.types,
        });
      } catch (e) {
        alert(e);
      }
      const temp = collection.slice();
      temp.push(pokemon);
      setCollection(temp);
      if (buttonText === "release") {
        setButtonText("catch");
      } else {
        setButtonText("release");
      }
    }
  }

  function nameTheButton(name) {
    const isExist = collection.find((pokemon) => pokemon.name === name);
    if (!isExist) {
      setButtonText("catch");
    } else {
      setButtonText("release");
    }
  }

  //!SearchArea

  let inputStr;
  const [errorMessage, setErrorMessage] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [pokemon, setPokemon] = useState("");

  const changeInputStr = async (e) => {
    if (!e) {
      return;
    }
    inputStr = e.target.value;
  };

  async function getPokemon() {
    const pokemon = inputStr;
    axios
      .get(`/api/pokemon/${pokemon}`)
      .then((res) => {
        setErrorMessage("");
        setIsHidden(true);
        setPokemon(res.data);
      })
      .catch((e) => {
        setErrorMessage(`${pokemon} is not a pokemon`);
        setIsHidden(false);
      });
    nameTheButton(pokemon);
  }

  //!TYPE

  const [typeList, setTypeList] = useState([]);

  async function getTypeList(e) {
    const type = e.target.innerText;
    const res = await axios.get(`/api/type/${type}`);
    setTypeList(res.data);
  }

  async function getPokemonByTypes(e) {
    const pokemon = e.target.innerText;
    nameTheButton(pokemon);
    axios.get(`/api/pokemon/${pokemon}`).then((res) => setPokemon(res.data));
    setTypeList([]);
  }

  return (
    <>
      <SearchArea
        getTypeList={getTypeList}
        getPokemon={getPokemon}
        changeInputStr={changeInputStr}
        pokemon={pokemon}
        buttonText={buttonText}
        addOrRelease={addOrRelease}
        errorMessage={errorMessage}
        isHidden={isHidden}
      />
      <Collection
        collection={collection}
        addOrRelease={addOrRelease}
        getTypeList={getTypeList}
      />
      <Types typeList={typeList} getPokemonByTypes={getPokemonByTypes} />
    </>
  );
}
export default App;
