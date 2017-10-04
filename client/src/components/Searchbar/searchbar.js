import React from "react";
import DogList from "../Doglist";
import { Row, Col, Container } from "../Grid";
import "./searchbar.css";
// RecipeList renders a bootstrap list item
<<<<<<< HEAD
 const SearchBar = (props) => (
<div>
<select
      name="breed"
      value={props.breed}
      onChange={props.handleChange}
    >
      <option value="PIT BULL">Pitbull </option>
      <option value="terrier">Terrier </option>
      <option value="Chihuahua SH MIX">Chihuahua</option>
      <option value="GERM SHEPHERD MIX">German Shepherd</option>
      <option value="POMERANIAN">Pomeranian</option>
      <option value="YORKSHIRE TERR">Yorkshire Terrier</option>
   

    </select>


    <select
      name="gender"
      value={props.gender}
      onChange={props.handleChange}
    >
      <option value="M">Male</option>
      <option value="S">Female</option>
      
    </select>
=======
const SearchBar = (props) => (
  <div>
    <select className="btn-lg btn-group-lg btn"
        name="breed"
        value={props.breed}
        onChange={props.handleChange}
      >
        <option value="">Breed (Show All)</option>
        <option value="PIT BULL">Pitbull </option>
        <option value="CHIHUAHUA">Chihuahua </option>
      </select>


      <select className="btn-lg btn-group-lg btn"
        name="gender"
        value={props.gender}
        onChange={props.handleChange}
      >
        <option value="">Gender (Show All)</option>
        <option value="M">Male </option>
        <option value="S">Female </option>
      </select>
    </div>
>>>>>>> master



  )

  export default SearchBar;