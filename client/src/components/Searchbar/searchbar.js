import React from "react";

// RecipeList renders a bootstrap list item
 const SearchBar = (props) => (
<div>
<select
      name="breed"
      value={props.breed}
      onChange={props.handleChange}
    >
      <option value="Pitbull">Pitbull </option>
      <option value="Terrier">Terrier </option>
    </select>


    <select
      name="gender"
      value={props.gender}
      onChange={props.handleChange}
    >
      <option value="M">Male </option>
      <option value="F">Female </option>
      <option value="S">Spade </option>
    </select>

</div>


  )

  export default SearchBar;