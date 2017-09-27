import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import homepage from 
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";
const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={homepage} />
      <Route exact path="/adoptionpage" component={adoptionPage} />
    </div>
  </Router>;
  
export default App;
