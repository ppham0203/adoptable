import React from "react";
import DropdownButton 
const breeds = ["boxer", "chihuaha"];

const Dropdown = (breedArr) => {  
	for (i = 0; i < breedArr.length; i++) {
		$.each(breedArr, function (i, value) {
			<MenuItem eventKey= i>value</MenuItem>
		});
	}
};

const Dropdown = ({breeds}) => (
  <div>
    {breeds.map(breeds => (
      <div className="breeds" key={station.call}>{station.call}</div>
      <MenuItem eventKey="1">Chihuahua</MenuItem>
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