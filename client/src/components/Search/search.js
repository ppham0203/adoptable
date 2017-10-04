import React, {PropTypes} from 'react';
import axios from 'axios';
import SearchBar from '../Searchbar';
import DogList from '../Doglist';
import { Container, Row, Col } from "../Grid";
import Button from 'react-bootstrap/lib/Button';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      breed: '',
      gender:'',
      filteredDogs: []    
    }

    this.handleChange = this.handleChange.bind(this);
    this.applySearchFilter = this.applySearchFilter.bind(this);
  }

  componentDidMount(){
    axios.get('/results').then( results => {
      console.log("Axios results", results);
      const dogs = results.data;
      const newState = {
        dogs // array of dogs returned from server
      };
      this.setState(newState);
      this.applySearchFilter();
    });
}

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value

    this.setState({ [name]: value })
    console.log("Handle change", event.target);
  }

  applySearchFilter(event) {
    if(event) { 
      event.preventDefault();
    }
      const filteredDogs = this.state.dogs
      .filter ( item => (this.state.gender !== '') ? item.gender.trim() == this.state.gender : true, this )
      .filter( item => (this.state.breed !== '') ? item.breed.indexOf(this.state.breed)!=-1 : true, this )
      console.log(filteredDogs);
      console.log("this is awesome");
      const newState = {
        filteredDogs
      }
      this.setState(newState);
      return filteredDogs;
  }



  render() {
    return (
        <div>
          <SearchBar
            breed={this.state.breed}
            gender={this.state.gender}
            handleChange={this.handleChange}
          />
          <Button className="btn-lg btn-group-lg btn"
            bsSize="large" 
            title="Search"
            onClick={this.applySearchFilter}
            onMouseOver={console.log("great")}
            type="success"
          >
          Filter
          </Button>

          <DogList
            dogs={this.state.filteredDogs}
          />
        </div>
    );
  }
}

export default Search;