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





  
  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

   
    event.preventDefault();
    API.getResults(this.state.petSearch)
      .then(res => this.setState({ pets: res.data }))
      .catch(err => console.log(err));
  
  
    };





  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>                   
          <Search />    
        </Container>
      </div>

    ); 
  }
}

export default App;

