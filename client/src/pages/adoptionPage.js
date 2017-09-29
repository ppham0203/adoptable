import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

class Adoption extends Component {
  state = {
    pets: [],
    image: "",
    name: "",
    gender: "",
    age: "",
    weight: "",
    breed: ""
  };

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();
    API.getRecipes(this.state.petSearch)
      .then(res => this.setState({ pets: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <Row>
            <Col size="xs-9 sm-4">
              <h1>Pet Adoptions</h1>
              <h2>Find Your Friend a Forever Home</h2>
            </Col>
          </Row>
        </Hero>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-4">
                    <h2>Submit your pet information</h2>
                      <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        placeholder="Name"
                      />
                      <Input
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleInputChange}
                        placeholder="Gender"
                      />
                      <Input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        placeholder="Age"
                      />
                      <Input
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        placeholder="Weight"
                      />
                      <Input
                        name="breed"
                        value={this.state.breed}
                        onChange={this.handleInputChange}
                        placeholder="Breed"
                      />
                      <Button
                        bsSize="large" 
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  }
}

export default Adoption;