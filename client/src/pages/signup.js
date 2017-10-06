import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Input from "../components/Input";
import Hero from "../components/Hero";
//import Input from "../components/Input";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav";

class User extends Component {
  state = {
    user: [],
    name: "",    
    email: "",
    password: "",
 
  };

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => this.loadUser())
        .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <Nav />
        <Hero backgroundImage="https://www.chagrinfallspetclinic.com/wp-content/uploads/2013/09/womanhuggingdog.jpg">
          <Row>
          
            <Col size="xs-9 sm-4">
            
              <h1>Sign up</h1>
              <h2>Keep track of your favorite foster pets</h2>
            </Col>
          </Row>
        </Hero>
        <Container>

          <Row>

            <Col size="md-12">
              <form>
                <Container>
                    <Col size="md-4">
                    </Col>
                    
                    <Col size="md-4">
                    
                      <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name ="name"
                        placeholder="Name"
                      />
                      <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        type="password"
                        name= "password"
                        placeholder="Password"
                      />
                      
                        <Button className="submitBtn" /**disabled={!(this.state.name && this.state.email && this.state.password)} **/onClick={this.handleFormSubmit}>
                        <Link className="submitBtn" to="/thankyouSignup">Submit</Link>
                        </Button>
                      
                    </Col>
                    <Col size="md-4">
                    </Col>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    ); 
  }
}

console.log ("hello");
export default User;