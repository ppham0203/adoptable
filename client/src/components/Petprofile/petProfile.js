import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import API from '../../utils/API';
import Nav from "../Nav";

class Petprofile extends Component {
  state = {
    dogs: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // axios.get('/adoptionPets/:id').then( results => {
        
    //     const dogs = results.data;
    //     console.log("Axios results", results);
    //     const newState = {
    //       dogs: dogs // array of dogs returned from server
    //     }
    //     this.setState(newState)
    //   });

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
            {/* <Jumbotron>
              <h1>
                {this.state.dogs.name}
              </h1>
            </Jumbotron> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            <article>
              <h1>{this.state.dogs.name} DOG'S NAME</h1>
              <p>
              <img src={this.state.dogs.image || "https://placehold.it/300x300"} />
              </p>
            </article>
          </Col>
          <Col size="md 6">
          <h1> About Dog's Name </h1>
          <ul>
              <li>Name: </li>
              <li>Breed: </li>
              <li>Gender:</li>
              <li>Age: </li>
              <li><a href="/">Give Dog a home</a></li>
              </ul>
              <Link to="/">← Back to home</Link>
          </Col>
        </Row>
        <Row>
       
            
          
        </Row>
      </Container>
    );
  }
}

export default Petprofile;
