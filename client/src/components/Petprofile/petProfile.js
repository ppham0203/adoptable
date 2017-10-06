import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
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
      <div>
        <Nav />
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Container fluid>
        <Row>
        <Col size="sm-3"></Col>
          <Col size="xs-9 sm-4">
            <article>
              <h1>{this.state.dogs.pet_name}</h1>
              <p>
              <img src={this.state.dogs.image || "https://placehold.it/300x300"} />
              </p>
            </article>
          </Col>
          <Col size="xs-9 sm-4">
          <h1> About Me </h1>
              <h4>Breed: {this.state.dogs.breed} </h4>
              <h4>Gender: {this.state.dogs.gender}</h4>
              <h4>Age: {this.state.dogs.age}</h4>
              <h4>
              {(this.state.dogs.link) ? 
                <a href={this.state.dogs.link}>Where to Adopt</a>
                :
                <div>
                  <p>{this.state.dogs.first_name} {this.state.dogs.last_name}</p>
                  <p>{this.state.dogs.email}</p>
                  <p>{this.state.dogs.phone}</p>
                </div>
              }
              </h4>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Petprofile;
