import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";
class thanks extends Component {
  
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
                <Container>
                  <h1>THANK YOU FOR USING ADOPTABLE</h1>
                  <h3>The satisfaction you will acquire when you use Adoptable is like no other. 
                  You will have received or provided a family with a healthy pet, you will save money, you will be supporting a healthy and just cause, you will give the perfect pet to a loving family, and you will be saving a life. 
                  Adopting a pet has lifelong benefits that will not be regretted. Give these animals a second chance by allowing them to join a loving family.</h3>
                  <Button
                        bsSize="large" 
                        title="Return Home"
                        // onClick={this.handleFormSubmit}
                        // type="success"
                        // className="input-lg"
                      >
                      <Link to="/">Return Home</Link>
                      </Button>
                </Container>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  }
}
export default thanks;