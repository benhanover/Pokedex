import {Component} from "react"; 
import './App.css';
import SearchArea from "./components/SearchArea";
// const axios = require('axios');


class App extends Component{

  constructor(props){
    super(props);
    this.state = {collection: []};
  }

  // componentDidMount() {
  //  axios.get('/api/collection')
  //  .then((data) => {
  //     console.log(data.data);
  //     this.setState({ collection: data.data })
  //   });
  // }

  render() {
      return(
      <SearchArea />
      );    
  }
}

export default App;

 //   return (
  //     <div>
  //       <ul>
  //        {this.state.collection.map(poke => {
  //          return (<li>{poke.name}</li>)
  // })}
  //       </ul>
  //     </div>