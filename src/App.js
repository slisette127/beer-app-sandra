import React from "react";
import './App.css';
import ListBeers from "./component/ListBeers";


const URL = "https://api.punkapi.com/v2/beers";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfBeers: [], 
    }
  }


  componentDidMount(){
    fetch(URL)
      .then((response) => response.json())
      .then((data) => 
        this.setState({
          arrayOfBeers: data
        })
        );
        
      }
      

  render(){
    return (
      <div id="container">
        < ListBeers arrayOfBeers={this.state.arrayOfBeers} />
      </div>
     )
  };
};


export default App;
