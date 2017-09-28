import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import Thumbnail from "../components/Thumbnail";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";

class App extends Component {
  state = {
    pets: [],
    petSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get pets update the pets state
    event.preventDefault();
    API.getRecipes(this.state.petSearch)
      .then(res => this.setState({ pets: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-5">
                      <h2>Placeholder where photo goes</h2>
                      <Thumbnail />
                    </Col>
                    <Col size="xs-0 sm-1">
                    </Col>
                    <Col size="xs-9 sm-5">
                      <h2>Placeholder text</h2>
                    </Col>
                 
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.pets.length ? (
                <h1 className="text-center">No Pets to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.pets.map(pet => {
                    return (
                      <RecipeListItem
                        key={pet.title}
                        title={pet.title}
                        href={pet.href}
                        ingredients={pet.ingredients}
                        thumbnail={pet.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
