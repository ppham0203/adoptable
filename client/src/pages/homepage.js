import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Link, Route } from "react-router-dom";
import Search from "../components/Search";
// // import Searchbar from "../components/Searchbar";
// import DogList from "../components/Doglist";

class App extends Component {
  state = {
    pets: [],
    petSearch: ""
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron backgroundImage={require("../assets/images/dog-holding-leash.jpg")}/>
        <Container>                   
          <Search />    
        </Container>
      </div>

    ); 
  }
}

export default App;

