import React from "react";

// RecipeList renders a bootstrap list item
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

</div>


  )

  export default SearchBar;