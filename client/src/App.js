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
      console.log(collection);
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
  
  // const mock = {
  //   name: "rayquaza",
  //   height: 7,
  //   weight: 2065,
  //   id: 384,
  //   back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/384.png",
  //   front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
  //   types: [
  //     'dragon',
  //     'flying'
  //   ]
  // }
  
  const [inputStr, setInputStr] = useState('');
  const [pokemon, setPokemon] = useState('');

      

  const changeInputStr = async (e) =>{
      setInputStr(e.target.value);
  }

  async function getPokemon() {
      const pokemon = inputStr;
      axios.get(`http://localhost:9000/api/pokemon/${pokemon}`)
      .then((res) => setPokemon(res.data));
      console.log(pokemon);
      nameTheButton(pokemon);
  }

  //!TYPE

  const [typeList, setTypeList] = useState([]);

  async function getTypeList (e) {
    const type = e.target.innerText;
    const res = await axios.get(`http://localhost:9000/api/type/${type}`);
    setTypeList(res.data);
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
      <SearchArea getTypeList={getTypeList} getPokemon={getPokemon} changeInputStr={changeInputStr} pokemon={pokemon} buttonText={buttonText} addOrRelease={addOrRelease}/>
      <Collection collection={collection} addOrRelease={addOrRelease}  />
      <Types typeList={typeList} getPokemonByTypes={getPokemonByTypes} />
    </>
  ); 
}
export default App;













// class App extends Component{

    

//   constructor(props){
//     super(props);
//     this.state = {
//       collection: [],
//       typeList: []
//     };
//   }

//   async getTypeList (e) {
//     const type = e.target.innerText;
//     const res = await axios.get(`http://localhost:9000/api/type/${type}`);
//     this.setState({typeList: res.data});
// }


//   render() {
//       return(
//         <>
//           <SearchArea getTypeList={this.getTypeList} />
//           {/* <Collection /> */}
//           <Types typeList={this.state.typeList}/>
//         </>
//       );    
//   }
// }

// export default App;








 //   return (
  //     <div>
  //       <ul>
  //        {this.state.collection.map(poke => {
  //          return (<li>{poke.name}</li>)
  // })}
  //       </ul>
  //     </div>