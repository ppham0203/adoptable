import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Hero from "../components/Hero";
import { Container, Row, Col } from "../components/Grid";
import { Link } from "react-router-dom";
import Nav from "../components/Nav"
class thanks extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Hero backgroundImage="http://bravodog.ca/wp-content/uploads/2017/01/cropped-headergraphic2.jpg">
          <Row>
            <Col size="xs-9 sm-4">
              <h1 className="thankYou">Thank You For Posting Your Pet On Adoptable</h1>
              <h2>Your best friend is one step closer to finding their forever home. </h2>
            </Col>
          </Row>
        </Hero>
<<<<<<< HEAD
        <Container>
          <Row>
            <Col size="md-12">
              <Container>
                <h1>Thank You For Posting Your Pet On Adoptable</h1>
                <h3>Your best friend is one step closer to finding their forever home. </h3>
                <Button
                  bsSize="large"
                  title="Return Home"
                >
                  <Link className="submitBtn" to="/">Return Home</Link>
                </Button>
              </Container>
            </Col>
          </Row>
        </Container>
=======
        
          <a className="goHome" href="/"><Button className="returnHomeBtn" 
                bsSize="large" 
                title="Return Home"
                // onClick={this.handleFormSubmit}
                // type="success"
                // className="input-lg"
              >
              Return Home
              </Button></a>
                
>>>>>>> master
      </div>
    );
  }
}
export default thanks;