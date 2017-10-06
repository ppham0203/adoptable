import React from "react";
import "./searchbar.css";

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
      <option value="N">Male </option>
      <option value="S">Female </option>
    </select>
  </div>
);

export default SearchBar;