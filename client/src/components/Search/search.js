import React, {PropTypes} from 'react';
import axios from 'axios';
import SearchBar from '../Searchbar';
import DogList from './../Doglist';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      breed: '',
      gender:'',
    }

    this.handleChange = this.handleChange.bind(this);
    this.applySearchFilter = this.applySearchFilter.bind(this);
  }

  componentDidMount(){
    axios.get('/results').then( results => {
      console.log("Axios results", results);
      const dogs = results.data;
      const newState = {
        dogs: dogs // array of dogs returned from server
      }
      this.setState(newState)
    });
}

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value

    this.setState({ [name]: value })
    console.log("Handle change", event.target);
  }

  applySearchFilter = dogs => {
   
    const filteredDogs = dogs
    .filter ( item => (this.state.gender !== '') ? item.gender.trim() === this.state.gender : true, this )
    .filter( item => (this.state.breed !== '') ? item.breed === this.state.breed : true, this )
    console.log(filteredDogs);
  
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

          <DogList
            dogs={this.applySearchFilter(this.state.dogs)}
          />
        </div>
    );
  }
}

export default Search;



