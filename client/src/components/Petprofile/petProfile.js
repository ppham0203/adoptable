import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import API from '../../utils/API';
import Nav from "../Nav";
import "./petProfile.css";
import Jumbotron from "../Jumbotron";

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
    <div>
     <Nav />
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Container fluid>
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
          <h1> About Me </h1>
              <li>Breed: {this.state.dogs.breed} </li>
              <li>Gender: {this.state.dogs.gender}</li>
              <li>Age: {this.state.dogs.age}</li>
              <li>
              {(this.state.dogs.link) ? 
                <a href={this.state.dogs.link}>Where to Adopt</a>
                :
                <div>
                  <p>{this.state.dogs.first_name} {this.state.dogs.last_name}</p>
                  <p>{this.state.dogs.email}</p>
                  <p>{this.state.dogs.phone}</p>
                </div>
              }
              </li>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Petprofile;
