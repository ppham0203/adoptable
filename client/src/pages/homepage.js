import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import Modal from "react-bootstrap/lib/Modal";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";
import { Link, Route } from "react-router-dom";
import Search from "../components/Search";
import Searchbar from "../components/Searchbar";
import Doglist from "../components/Doglist";

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
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-0 sm-2">
                   
                    </Col>
                    <Col size="xs-9 sm-4">
                      <Input
                        name="petSearch"
                        value={this.state.petSearch}
                        onChange={this.handleInputChange}
                        placeholder="Zip Code"
                      />

                      {/* <MenuItem onClick={()=> this.setState({breed: “Chihuahua”}).bind(this)} */}
                      
                    </Col>
                    <Col size="xs-9 sm-4">
                     <DropdownButton bsSize="large" title="Breed" id="dropdown-size-large">
                      <MenuItem >Chihuahua</MenuItem>
                      <MenuItem eventKey="2">Pitbull</MenuItem>
                      <MenuItem eventKey="3">Shih Tsu</MenuItem>
                      <MenuItem eventKey="4">Terrier</MenuItem>
                    </DropdownButton>
                    <DropdownButton bsSize="large" title="Gender" id="dropdown-size-large">
                      <MenuItem eventKey="1">Male</MenuItem>
                      <MenuItem eventKey="2">Female</MenuItem>
                    </DropdownButton>
                      <Button
                        bsSize="large" 
                        title="Search"
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                      <Link to="/petresults">Search</Link>
                      </Button>
                  
                    </Col>
                  </Row>
                  <Col size=" sm-12">

                  <Search
                      
                       />
                       </Col>
                </Container>
              </form>
            </Col>
          </Row>
         
        </Container>
      </div>

    ); 
  }
}

export default App;

