import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
class thanks extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Hero backgroundImage="https://www.dogpeople.co.uk/_static/dog-friendly-holidays-04.jpg">
            <Col size="xs-9 sm-4">
              
              <h1 className="thankYou">Thank you for signing up</h1>
              <h2>You're only a few clicks away from finding your new best friend.</h2>
              <Button className="returnHome"
                bsSize="large" 
                title="Return Home"
              >
              <Link className="submitBtn" to="/">Return Home</Link>
              </Button>
            </Col>
        </Hero>
      </div>
    );
  }
}
export default thanks;