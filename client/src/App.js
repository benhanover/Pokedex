import {useState} from "react"; 
import './App.css';
import SearchArea from "./components/SearchArea";
import Types from "./components/Types";
const axios = require('axios');



function App() {

  //!SearchArea
  
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

  //!TYPE
  const [typeList, setTypeList] = useState([]);

  async function getTypeList (e) {
    const type = e.target.innerText;
    const res = await axios.get(`http://localhost:9000/api/type/${type}`);
    setTypeList(res.data);
  }

  async function getPokemonByTypes(e){
    const pokemon = e.target.innerText;
    axios.get(`http://localhost:9000/api/pokemon/${pokemon}`)
      .then((res) => setPokemon(res.data));
  }

  return(
    <>
      <SearchArea getTypeList={getTypeList} getPokemon={getPokemon} changeInputStr={changeInputStr} pokemon={pokemon} />
      {/* <Collection /> */}
      <Types typeList={typeList} getPokemonByTypes={getPokemonByTypes}/>
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