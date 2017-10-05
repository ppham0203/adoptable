import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import API from '../../utils/API';
import Nav from "../Nav";
import "./petProfile.css";

class Petprofile extends Component {
  state = {
    dogs: {}
  };
 
  componentDidMount() {
      API.getPet(this.props.match.params.id)
      .then(res => this.setState({ dogs: res.data }))
      .catch(err => console.log(err));


  }

  render() {
    return (
      <Container fluid>
           <Nav />
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            <article>
              <h1>{this.state.dogs.pet_name}</h1>
              <p>
              <img src={this.state.dogs.image || "https://placehold.it/300x300"} />
              </p>
            </article>
          </Col>
          <Col size="md 6">
<<<<<<< HEAD
          <h1> About {this.state.dogs.pet_name} </h1>
          <ul>
              <li>Name: {this.state.dogs.pet_name} </li>
=======
          <h1> About Me </h1>
>>>>>>> master
              <li>Breed: {this.state.dogs.breed} </li>
              <li>Gender: {this.state.dogs.gender}</li>
              <li>Age: {this.state.dogs.age}</li>
              <li> <a href={this.state.dogs.link}>Give me a home!</a></li>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Petprofile;
