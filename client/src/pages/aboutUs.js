import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Team from "../components/Team";

class aboutUs extends Component {
  
  render() {
    return (
      <div>
        <Nav />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <Row>
            <Col size="md-12">
              <h1>ABOUT ADOPTABLE</h1>
              <h2>Approximately 6.5 million companion animals enter U.S. animal shelters nationwide every year.</h2>
                <h2>Of that, 1.5 million are euthanized.</h2>
                <h2>In Orange County alone, there are dozens of animal shelters. How can you be sure you are finding the right pet?</h2>
                <h2>At Adoptable, we aggregate all of the dogs in the area so that you can make a better choice.</h2>
            </Col>
          </Row>
        </Hero>
        <Team />
      </div>
    ); 
  }
}
export default aboutUs;