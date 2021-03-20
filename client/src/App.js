import {useState, useEffect } from "react"; 
import './App.css';
import SearchArea from "./components/SearchArea";
import Types from "./components/Types";
import Collection from "./components/Collection.js";
const axios = require('axios');



function App() {

  //!Collection
  const [collection, setCollection] = useState([]);
  const [buttonText, setButtonText] = useState('Catch');


  useEffect(() => {
    async function fetchCollection() {
      const res = await axios.get('http://localhost:9000/api/collection');
      setCollection(res.data); 
    }
    fetchCollection();
  }, []); 

  async function addOrRelease (pokemon) {
    const isExist = collection.find((poke) => poke.name === pokemon.name);
    if(isExist) {
      const { id } = pokemon;
      try {
        await axios.delete(`http://localhost:9000/api/collection/release/${id}`);
      } catch (e) {
        alert(e);
      }
      try {
        const temp = await axios.get(`http://localhost:9000/api/collection`);
        setCollection(temp.data);
      } catch(e) {
        alert(e);
      }
      if (buttonText === 'release') {
        setButtonText('catch');
      } else {
        setButtonText('release');
      }

    } else {
      try {
        await axios.post('http://localhost:9000/api/collection/catch', {
          name: pokemon.name,
          height: pokemon.height ,
          weight: pokemon.weight,
          id: pokemon.id,
          back_default: pokemon.back_default,
          front_default: pokemon.front_default,
          types: pokemon.types
        });
        
      } catch (e) {
        alert(e);
      }
      const temp = collection.slice();
      temp.push(pokemon);
      setCollection(temp);
      if (buttonText === 'release') {
        setButtonText('catch');
      } else {
        setButtonText('release');
      }
    }
    




  }

  function nameTheButton(name) {
    const isExist = collection.find((pokemon) => pokemon.name === name);
    if(!isExist) {
      setButtonText("catch");
    }
    else {
      setButtonText("release")
    };
  }

  //!SearchArea
  
  let inputStr;
  // const [inputStr, setInputStr] = useState('');
  const [pokemon, setPokemon] = useState('');

      

  const changeInputStr = async (e) =>{
      // setInputStr(e.target.value);
      if (!e) {
        return;
      }
      inputStr = e.target.value;
  }

  async function getPokemon() {
      const pokemon = inputStr;
      axios.get(`http://localhost:9000/api/pokemon/${pokemon}`)
      .then((res) => setPokemon(res.data))
      .catch((e) => alert('could not find this pokemon'));
      nameTheButton(pokemon);
  }

  //!TYPE

  const [typeList, setTypeList] = useState([]);


  async function getPicture(url){
    const res = await axios.get(url);
    const newLink = res.data.sprites.front_default;
    return newLink;
} 

    async function getTypeListImagesUrl(urlList) {
    // // 1
    // const tempArr = await (urlList.map(async (type) => await getPicture(type.pokemon.url)));
    // console.log(tempArr);
    // setTypeList(tempArr);

    // 2
    setTypeList(urlList.map((type) => {
      return getPicture(type.pokemon.url)
      .then((url) => url)
        .then((data) => {
          // console.log(data);
          return(data);
        })
    }))

  
   }



  async function getTypeList (e) {
    const type = e.target.innerText;
    const res = await axios.get(`http://localhost:9000/api/type/${type}`);
    setTypeList(res.data);
    // getTypeListImagesUrl(res.data);
  }

  async function getPokemonByTypes(e){
    const pokemon = e.target.innerText;
    nameTheButton(pokemon);
    axios.get(`http://localhost:9000/api/pokemon/${pokemon}`)
      .then((res) => setPokemon(res.data));
      setTypeList([]);
  }

  return(
    <>
      <div className={'first-section'}>
        <SearchArea getTypeList={getTypeList} getPokemon={getPokemon} changeInputStr={changeInputStr} pokemon={pokemon} buttonText={buttonText} addOrRelease={addOrRelease}/>
        <Collection collection={collection} addOrRelease={addOrRelease} getTypeList={getTypeList} />
      </div>
      <div>
        <Types typeList={typeList} getPokemonByTypes={getPokemonByTypes} />
      </div>
    </>
  ); 
}
export default App;

