import React from "react";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
const breeds = ["boxer", "chihuaha"];


const Dropdown = ({arr}) => (
  <div>
    {breeds.map(breeds => (
      <div className="breeds" key={breeds.index}></div>
      <MenuItem eventKey="1">{breeds.index}</MenuItem>
    ))}
  </div>
); 

https://stackoverflow.com/questions/32157286/rendering-react-components-from-array-of-objects
Dropdown(breeds);


// const DropdownButton = () => (

// <DropdownButton bsSize="large" title="Breed" id="dropdown-size-large">
// 	  <MenuItem eventKey="1">Chihuahua</MenuItem>
// 	  <MenuItem eventKey="2">Pitbull</MenuItem>
// 	  <MenuItem eventKey="3">Shih Tsu</MenuItem>
// 	  <MenuItem eventKey="4">Terrier</MenuItem>
// 	</DropdownButton>
// );