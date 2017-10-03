import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Input from "../components/Input";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";

class Adoption extends Component {
  state = {
    pets: [],
    name: "",
    gender: "",
    age: "",
    weight: "",
    breed: ""
  };


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getResults()
      .then(res =>
        this.setState({ pets: res.data, name: "", gender: "", age: "" })
      )
      .catch(err => console.log(err));
     
  };
  

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.gender) {
      API.savePet({
        name: this.state.name,
        gender: this.state.gender,
        age: this.state.age,
        weight: this.state.weight,
        breed: this.state.breed,
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav />
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
                 </Row>
                  <h2>Approximately 6.5 million companion animals enter U.S. animal shelters nationwide every year.</h2>
                  <h2>Of that, 1.5 million are euthanized.</h2>
                  <h2>At Adoptable, we help animals find new homes without the need of ever being placed into shelters.</h2>
                  <Row>
                  <h3>Submit your pets information here and we will find them a forever home:</h3>
                    <Col size="md-4">
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
                      {/* <Button
                
                        bsSize="large" 
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Submit
                      </Button> */}
                      <Button disabled={!(this.state.name && this.state.breed && this.state.gender && this.state.age && this.state.weight)} onClick={this.handleFormSubmit}>
                        Submit
                      </Button>
                    </Col>
                    <Col size="md-4"></Col>
                    <Col size="md-4">
                      <iframe width="420" height="345" src="https://www.youtube.com/embed/08SLFf7mrwQ?autoplay=1">
                      </iframe>
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