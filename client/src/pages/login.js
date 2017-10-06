import React, { Component } from "react";
import Button from 'react-bootstrap/lib/Button';
import Input from "../components/Input";
import Hero from "../components/Hero";
//import Input from "../components/Input";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Nav from "../components/Nav";

class Login extends Component {
    state = {
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
        if (!this.state.email) {
              alert("Fill out your email please.");
        } else {
        // if email matches server email and password, then go to home
        // 

            API.verifyUser({
                email: this.state.email,
                password: this.state.password,
                })
                    .then(res => this.loadUser())
                    .catch(err => console.log(err));
                    window.location.href = "/"
                    
                }
              
            }

render() {
        return (
        <div>
            <Nav />
            <Hero backgroundImage="https://www.chagrinfallspetclinic.com/wp-content/uploads/2013/09/womanhuggingdog.jpg">
            <Row>
          
            <Col size="xs-9 sm-4">
            
              <h1>Login</h1>
              <h2>Input your details</h2>
            </Col>
          </Row>
        </Hero>
        <h1 />
        <Container>

          <Row>

            <Col size="md-12">
              <form>
                <Container>
                    <Col size="md-4">
                    </Col>
                    
                    <Col size="md-4">
                    
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
                      
                        <Button disabled={!(this.state.email && this.state.password)} onClick={this.handleFormSubmit}>
                            Submit
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
    };

    };
export default Login;