import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Container } from "../components/Grid";
import Search from "../components/Search";

class App extends Component {
  state = {
    pets: [],
    petSearch: ""
  };

  render() {
    return (
      <div>
        <Nav />
<<<<<<< HEAD
        <Jumbotron backgroundImage={require("../assets/images/doginpark.jpg")} />
        <Container>
          <Search />
=======
        <Jumbotron backgroundImage={require("../assets/images/dog-holding-leash.jpg")}/>
        <Container>                   
          <Search />    
>>>>>>> master
        </Container>
      </div>
    );
  }
}

export default App;

