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
        <Jumbotron backgroundImage={require("../assets/images/doginpark.jpg")} />
        <Container>
          <Search />
        </Container>
      </div>
    );
  }
}

export default App;

