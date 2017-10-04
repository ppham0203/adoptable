import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

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
        <Container>
          <Row>
          <h1>The Team</h1>
            <Col size="md-3">
            <img src={require('../assets/images/andrew.JPG')} height="250px" width="250px" />
            <h1>Andrew</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-3">
            <img src={require('../assets/images/tori.png')} height="250px" width="250px" />
            <h1>Tori</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-3">
            <img src={require('../assets/images/peter.png')} height="250px" width="250px"/>
            <h1>Peter</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col size="md-3">
            <img src={require('../assets/images/ian.png')} height="250px" width="250px"/>
            <h1>Ian</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  }
}
export default aboutUs;